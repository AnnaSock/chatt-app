import { renderPageAcceuil } from "../views/views.acceuil.js"
// import { verifierUtilisateur } from "../models/model.acceuil.js"
// import { redirectToRoute } from "../../routes.js"
// import { afficherErreur, effacerErreur } from "../services/error.service.js"



export function afficherPageAcceuil(){
    document.body.innerHTML = ""
      const page = renderPageAcceuil()
      document.body.appendChild(page)

      
}