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
  
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    effacerErreur(small)
    effacerErreur(small1)
    
    const inputNumero = document.getElementById("numero")
    const inputMdp = document.getElementById("mdp")

    const numero= inputNumero.value.trim()
    const mdp= inputMdp.value.trim()

    
    let estValide= true;
    
    if (!numero) {
      afficherErreur("Le numéro est obligatoire !", small)
      estValide = false
    }
    
    if (!/^\d+$/.test(numero)) {
      afficherErreur('Le numéro doit contenir uniquement des chiffres !', small);
      estValide = false
    }
    if (!mdp) {
      afficherErreur("Le mot de passe est obligatoire !", small1)
      estValide = false
    }
    
    if (mdp.length < 5) {
      afficherErreur("Le mot de passe est trop court !", small1)
      estValide = false
    }
    
    if(estValide){
      const utilisateur = await verifierUtilisateur(numero, mdp)
      console.log(utilisateur);

    if (utilisateur) {
      
      route("/acceuil")
    } else {
      afficherErreur("Numéro ou mot de passe incorrect !", small)
    }
  }
    inputNumero.value= ''
    inputMdp.value= ''
  })
  return page

}
