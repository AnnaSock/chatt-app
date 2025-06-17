import { validerFormulaireContact } from "../services/validator.service";
import { renderPageAcceuil } from "../views/acceuils/views.acceuil";

// import { verifierUtilisateur } from "../models/model.acceuil.js"
// import { redirectToRoute } from "../../routes.js"
// import { afficherErreur, effacerErreur } from "../services/error.service.js"


export function afficherPageAcceuil(){
      document.body.innerHTML = ""
      const page = renderPageAcceuil()
      document.body.appendChild(page)
      console.log(page);
}





export function ajouterContact(){
    const form = document.getElementById('contact')


   form.addEventListener("submit", async (e) => {
      e.preventDefault()
      const champs= {
       prenom : document.getElementById('prenom'),
       nom : document.getElementById('nom'),
       numero : document.getElementById('numero')

    }

    const erreurs = {
         prenom : document.getElementById('erreur-prenom'),
         nom: document.getElementById('erreur-nom'),
         numero : document.getElementById('erreur-numero')
    }
      
    const estValide= validerFormulaireContact(champs, erreurs)
    if(!estValide)return
   })
    



}


