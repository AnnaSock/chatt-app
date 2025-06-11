import { route } from "../../routes.js"
import { renderPageInscription } from "../views/views.inscription"







export function afficherPageInscription(){
    document.body.innerHTML = ""
      const page = renderPageInscription()
      document.body.appendChild(page)

    const valider = document.querySelector("button")

    valider.addEventListener("submit", ()=>{route("/connexion")})

}