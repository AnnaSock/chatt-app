import { renderPageInscription } from "../views/views.inscription.js"
import { enregistrerNouvelUtilisateur } from "../models/model.inscription.js"
import { validerFormulaireInscription } from "../services/validator.service.js"
import { afficherErreur } from "../services/error.service.js"
import { route } from "../../routes/routes.js"


export function afficherPageInscription() {
  document.body.innerHTML = ""
  const page = renderPageInscription()
  document.body.appendChild(page)

  const form = document.getElementById("form-connexion")

  const champs = {
    prenom: document.getElementById("prenom"),
    nom: document.getElementById("nom"),
    numero: document.getElementById("numero"),
    mdp: document.getElementById("mdp"),
  }

  const erreurs = {
    prenom: document.getElementById("erreur-prenom"),
    nom: document.getElementById("erreur-nom"),
    numero: document.getElementById("erreur-numero"),
    mdp: document.getElementById("erreur-mdp"),
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const estValide = validerFormulaireInscription(champs, erreurs)
    if (!estValide) return

    const nouvelUtilisateur = {
      prenom: champs.prenom.value.trim(),
      nom: champs.nom.value.trim(),
      numero: champs.numero.value.trim(),
      mdp: champs.mdp.value.trim(),
      // contact: "2"
    }
    // console.log(nouvelUtilisateur)
    const result = await enregistrerNouvelUtilisateur(nouvelUtilisateur)

    if (result.success) {
      // localStorage.setItem("uti/lisateurConnecte", JSON.stringify(nouvelUtilisateur));
      route("/connexion")
    } else {
      if (result.message.includes("numéro")) {
        afficherErreur(result.message, erreurs.numero)
      } else if (result.message.includes("mot de passe")) {
        afficherErreur(result.message, erreurs.mdp)
      } else {
        afficherErreur(result.message, erreurs.nom)
      }
    }
  })
}
