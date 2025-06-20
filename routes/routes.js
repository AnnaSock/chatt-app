import{afficherPageConnexion} from "../src/controllers/controller.connexion.js"
import { afficherPageAcceuil } from "../src/controllers/controller.acceuil.js"
import { afficherPageInscription } from "../src/controllers/controller.inscription.js";
import { error404 } from "../src/services/error.service.js";

const routes = {
    "/connexion" : afficherPageConnexion,
    "/acceuil" : afficherPageAcceuil,
    "/inscription" : afficherPageInscription,
    "/deconnexion": afficherPageConnexion,
}

// export function route(chemin){
//     const views = routes[chemin] 
//     const body = document.querySelector('body')
//     body.appendChild(views())
// }

export function route(chemin) {
    const views = routes[chemin];
    if (views) {
        views();
    } else {
        error404()
    }
}




