import { renderLoginPage } from "./src/views/views.connexion"

const routes= {
    "/page": renderLoginPage
}



export function route(chemin){
 const views = routes[chemin]
 const app = document.getElementById('app')

 app.innerHTML= ""
 app.appendChild(views())
}