import { navigate } from "../../routes/mini.route";
import { enregistrerContact, verifierNumero } from "../models/model.acceuil";
import { afficherErreur } from "../services/error.service";
import { validerFormulaireContact } from "../services/validator.service";
import { renderPageAcceuil } from "../views/acceuils/views.acceuil";



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
   
     const utilisateurJSON = localStorage.getItem("utilisateurConnecte")
     const uConnecte = utilisateurJSON ? JSON.parse(utilisateurJSON) : null
     const numero= champs.numero.value.trim()
     const result = await verifierNumero(numero)
    
     if(!result.success){
         if(result.erreur === "numero"){
            afficherErreur("Cet utilisateur n'a pas de compte Chat ODC", erreurs.numero)
         }
         return
     }

     const contactTrouve= result.data


     if(uConnecte.id === contactTrouve.id){
            afficherErreur("Tu ne peux pas t'ajouter toi meme comme contact", erreurs.numero)
            return
     }

     if(uConnecte.contacts.includes(contactTrouve.id)){
            afficherErreur("ce contact existe déjà dans ta liste de contact", erreurs.numero)
            return
     }

     uConnecte.contacts.push(contactTrouve.id)
     localStorage.setItem("utilisateurConnecte", JSON.stringify(uConnecte))

     const utilisateurModifier= { 
      contacts: uConnecte.contacts 
     }
     const utilisateurC= uConnecte.id
     
     
     const modification = await enregistrerContact(utilisateurModifier , utilisateurC)
   
   
     if(!modification.success) {
        afficherErreur(modification.message, erreurs.numero)
      }


   // if(result.success){
   //    uConnecte.contacts.push(result.data.id)
   //    localStorage.setItem("utilisateurConnecte", JSON.stringify(uConnecte))
   // }else{
   //    if(result.erreur === "numero"){
   //          afficherErreur(`cette t'utilisateur n'as pas de compte chat ODC`, erreurs.numero)
   //    }
   // }
   
})
    
   
}


