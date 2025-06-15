import { afficherListeMessage } from "../src/views/acceuils/zone-listes/views.message"
import { afficherListeNouveau } from "../src/views/acceuils/zone-listes/views.nouveau"






const options= {
      "boutonMessage" :  afficherListeMessage,
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