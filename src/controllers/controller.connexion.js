 import { verifierUtilisateur } from "../models/model.connexion.js"
 import { validerFormulaireConnexion } from "../services/validator.service.js"
 import { afficherErreur } from "../services/error.service.js"
 import { route } from "../../routes/routes.js"
import { renderPageConnexion } from "../views/views.connexion.js"

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
//  console.log(champs.numero.value.trim());
//  console.log(champs.mdp.value.trim());
 
 
    const result = await verifierUtilisateur(champs.numero.value.trim(), champs.mdp.value.trim())
    //  console.log(result);

    
      if (result.success) {
         localStorage.setItem("utilisateurConnecte", JSON.stringify(result.data))
         champs.numero.value = ''
        champs.mdp.value = ''
         route("/acceuil")
      } else {
         if (result.erreur === "numero") {
          afficherErreur("Numéro incorrect !", erreurs.numero)
        } else if  (result.erreur === "mdp") {
           afficherErreur("Mot de passe incorrect !", erreurs.mdp)
         }  else {
           afficherErreur("Erreur serveur. Réessaie plus tard !", erreurs.numero)
         }
       }
  })
  inscrire.addEventListener('click', ()=>{route("/inscription")})

}
