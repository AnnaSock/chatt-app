import { renderLoginPage } from "../views/views.connexion.js"
import { verifierUtilisateur } from "../models/model.connexion.js"
import { route } from "../../routes.js"
import { afficherErreur, effacerErreur } from "../services/error.service.js"

export function afficherPageConnexion() {
  document.body.innerHTML = ""
  const page = renderLoginPage()
  document.body.appendChild(page)

  const form = document.getElementById("form-connexion")
  const small = document.getElementById("erreur-numero")
  const small1 = document.getElementById("erreur-mdp")
  const inscrire = document.getElementById("inscription")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    effacerErreur(small)
    effacerErreur(small1)

    const inputNumero = document.getElementById("numero")
    const inputMdp = document.getElementById("mdp")

    const numero = inputNumero.value.trim()
    const mdp = inputMdp.value.trim()

    let estValide = true

    if (!numero) {
      afficherErreur("Le numéro est obligatoire !", small)
      estValide = false
    } else if (!/^\d+$/.test(numero)) {
      afficherErreur("Le numéro doit contenir uniquement des chiffres !", small)
      estValide = false
    }

    if (!mdp) {
      afficherErreur("Le mot de passe est obligatoire !", small1)
      estValide = false
    } else if (mdp.length < 5) {
      afficherErreur("Le mot de passe est trop court !", small1)
      estValide = false
    }

    if (!estValide) {
      return
    }

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
