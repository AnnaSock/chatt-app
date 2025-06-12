import { renderPageConnexion } from "../views/views.connexion.js"
 import { verifierUtilisateur } from "../models/model.connexion.js"
 import { validerFormulaireConnexion } from "../services/validator.service.js"
 import { route } from "../../routes.js"


export function afficherPageConnexion() {
  document.body.innerHTML = ""
  const page = renderPageConnexion()
  document.body.appendChild(page)

  const form = document.getElementById("form-connexion")
   const inscrire = document.getElementById("inscription")


  const champs = {
    numero: document.getElementById("numero"),
    mdp: document.getElementById("mdp"),
  }

  const erreurs = {
    numero: document.getElementById("erreur-numero"),
    mdp: document.getElementById("erreur-mdp"),
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const estValide = validerFormulaireConnexion(champs, erreurs)
    if (!estValide) return

    const result = await verifierUtilisateur(numero, mdp)
     console.log(result);
    
      if (result.success) {
         localStorage.setItem("utilisateurConnecte", JSON.stringify(result.data))
         inputNumero.value = ''
        inputMdp.value = ''
         route("/acceuil")
      } else {
         if (result.erreur === "numero") {
          afficherErreur("Numéro incorrect !", small)
        } else if  (result.erreur === "mdp") {
           afficherErreur("Mot de passe incorrect !", small1)
         }  else {
           afficherErreur("Erreur serveur. Réessaie plus tard !", small)
         }
       }
  })
  inscrire.addEventListener('click', ()=>{route("/inscription")})

}
