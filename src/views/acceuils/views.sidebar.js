import { route } from "../../../routes/routes";
import { createElement } from "../../component"



export function iconeAvecInfo(iconeClasse, texteInfo, onClickCallback, id) {
  return createElement("div", {
    id,
    class: "relative group cursor-pointer icone-sidebar",
    onclick: () => {
      activerIcone(id);
      onClickCallback();
    }
  }, [
    createElement("div", {
      class: "w-[3.1vw] h-[6vh] flex items-center justify-center rounded-full",
    }, [
      createElement("i", {
        class: `${iconeClasse} text-white text-[1rem]`
      }),
    ]),
    createElement("div", {
      class: "absolute left-[130%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-white text-black text-xs px-2 py-1 rounded shadow z-10 whitespace-nowrap"
    }, texteInfo)
  ])
}

function activerIcone(idActif) {
  const toutesLesIcones = document.querySelectorAll(".icone-sidebar");

  toutesLesIcones.forEach(icone => {
    const cercle = icone.querySelector("div"); 
    cercle.classList.remove("bg-[#374248]");
  });

  const iconeActive = document.getElementById(idActif);
  if (iconeActive) {
    const cercle = iconeActive.querySelector("div");
    cercle.classList.add("bg-[#374248]");
  }
}


function changerTitreZone(nouveauTitre) {
  const titreElement = document.getElementById("titreZone");
  if (titreElement) {
    titreElement.textContent = nouveauTitre;
  }
}

export function sidebar(){
    const utilisateurJSON = localStorage.getItem("utilisateurConnecte")
     const utilisateur = utilisateurJSON ? JSON.parse(utilisateurJSON) : null

        if (!utilisateur) {
            route("/connexion")
            return
        }
     const sidebar= createElement('div', {class: "sidebar w-[5vw] h-[95vh]  bg-[#202c33] flex flex-col"}, [
                                                         createElement('div', {class:"flex justify-center flex-col items-center mt-[2vh]"}, [
                                                                                    iconeAvecInfo("bi bi-chat-left-text", "Messages", () => {changerTitreZone("Messages"), navigate("boutonMessage")}, "icone-messages"),
                                                                                    iconeAvecInfo("fa-solid fa-circle-notch", "Actus", () => changerTitreZone("Actus"), "icone-actus"),
                                                                                    iconeAvecInfo("fa-solid fa-box-archive", "Archives", () => changerTitreZone("Archives"), "icone-archives"),
                                                                                    iconeAvecInfo("fa-solid fa-users", "Groupes", () => changerTitreZone("Groupes"), "icone-groupes"),
    
    
                                                         ]),

                                                         createElement('div', {class: "flex flex-col justify-center items-center mt-[45vh] gap-2"}, [
                                                                         iconeAvecInfo("fas fa-right-from-bracket", "Deconnexion", () =>  route("/connexion"), "icone-deconnexion"),

                                                                        iconeAvecInfo("fa-solid fa-gear ", "Paramètres", () => changerTitreZone("Paramètres"), "icone-parametres"),

                                                                        createElement('button', { class: "flex justify-center items-center" }, [
                                                                                      createElement('div', { class: "w-[3.1vw] h-[6vh] bg-[#374248] rounded-[30px] ml-0.5 text-[#039393] flex items-center justify-center text-[30px]" }, `${utilisateur.prenom[0].toUpperCase() + utilisateur.nom[0].toUpperCase() }`),
            ])
                                                         ])
                                                         
    
                                            ])
    return sidebar
}