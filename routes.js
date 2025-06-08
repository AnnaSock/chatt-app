// import { renderLoginPage } from "./src/views/views.connexion"

// const routes= {
//     "/page": renderLoginPage
// }



// export function route(chemin){
//  const views = routes[chemin]
//  const app = document.getElementById('app')

//  app.innerHTML= ""
//  app.appendChild(views())
// }


import{renderLoginPage} from "./src/views/views.connexion.js"

const routes = {
    "/connexion" : renderLoginPage,
}

export function route(chemin){
    const views = routes[chemin] || renderLoginPage
    const body = document.querySelector('body')
    document.body.innerHTML= ""
    body.appendChild(views())
}

export function redirectToRoute(path){
    location.hash= path
}