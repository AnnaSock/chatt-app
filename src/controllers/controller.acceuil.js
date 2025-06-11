import { renderPageAcceuil } from "../views/views.acceuil.js"
// import { verifierUtilisateur } from "../models/model.acceuil.js"
// import { redirectToRoute } from "../../routes.js"
// import { afficherErreur, effacerErreur } from "../services/error.service.js"



export function afficherPageAcceuil(){
    document.body.innerHTML = ""
      const page = renderPageAcceuil()
      document.body.appendChild(page)
      console.log(page);
      
      
}



// export function afficherPageAcceuil() {
//   document.body.innerHTML = ""

//   const utilisateurJSON = localStorage.getItem("utilisateurConnecte")
//   const utilisateur = utilisateurJSON ? JSON.parse(utilisateurJSON) : null

//   if (!utilisateur) {
//     // Si aucun utilisateur connecté, retour à la connexion
//     route("/connexion")
//     return
//   }

//   // Exemple d'affichage :
//   const titre = document.createElement("h1")
//   titre.textContent = `Bienvenue ${utilisateur.nom || "Utilisateur"} !`

//   document.body.appendChild(titre)
// }
