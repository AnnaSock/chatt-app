import { afficherListeContact } from "../src/views/acceuils/zone-listes/views.contact"
import { afficherFormulaireContact } from "../src/views/acceuils/zone-listes/views.formulaire-contact"
import { afficherformulaireGroupe } from "../src/views/acceuils/zone-listes/views.formulaire-groupe"
import { afficherListeMessage } from "../src/views/acceuils/zone-listes/views.message"
import { afficherListeNouveau } from "../src/views/acceuils/zone-listes/views.nouveau"


const options= {
      "boutonMessage" :  afficherListeMessage,
      "boutonContact" :  afficherListeContact,
      "nContact": afficherFormulaireContact,
      "nGroupe": afficherformulaireGroupe,
      // "boutonContact": afficherListeContacts,
      // "boutonActu": afficherActu,
      // "boutonArchive" :afficherListeArchive,
      // "boutonGroupe" : afficherListeGroupe,
      "boutonNouveau": afficherListeNouveau
}


export function navigate(choix){
        const redirection= options[choix]
        const zoneEchange= document.getElementById('zone-echange')
        zoneEchange.innerHTML=''
        zoneEchange.append(redirection())
}