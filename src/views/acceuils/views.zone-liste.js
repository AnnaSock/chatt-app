import { navigate } from "../../../routes/mini.route";
import { createElement } from "../../component.js";



export function zoneListe(){
    const zoneListe = createElement('div',{class: "zone-liste  w-[28vw] h-[95vh] bg-[#111b21] flex flex-col"}, [
                                                                    
                                                     createElement('div', {class: "w-[28vw] h-[8vh] flex border-b border-gray-800"}, [
                                                                   createElement('div', {class: "w-[23vw] h-[8vh] flex items-center"}, [createElement('h1',{class: "titre text-3xl ml-[10px] text-white", id: "titreZone"},'Messages'),]),
                                                                   createElement('div', {class: "w-[5vw] h-[8vh] flex items-center justify-center "}, [
                                                                                createElement('i', {class: "fa-solid fa-user-plus text-white cursor-pointer", onclick:()=> {navigate("boutonNouveau")} })
                                                                   ])
                                                     ]),
                                                     createElement('div', {class: " w-[28vw] h-[8vh] border-b border-gray-800 flex justify-center items-center"}, [
                                                                 createElement('input', {placeholder: 'Rechercher', class: "w-[25vw] h-[4vh] bg-[#202c33] rounded-[10px] pl-[2vw] outline-none"}),
                                                     ]),
                                                     createElement('div', {id: "zone-echange", class: 'w-[28vw] h-[79vh]  flex flex-col  overflow-scroll'}, []) 


                                        ])
    return zoneListe
}



// export function creerItemDiscussion() {
//   return createElement("div", {
//     class: "flex items-center p-4 hover:bg-white cursor-pointer border-b border-gray-800"
//   }, [
//     // Avatar + badge
//     createElement("div", { class: "relative" }, [
//     //   createElement("img", {
//     //     src: "",
//     //     class: "w-12 h-12 rounded-full"
//     //   }),
//     //   createElement("div", {
//     //     class: "absolute bg-red-500 -top-1 -right-1 w-6 h-6 bg-sonatel-teal rounded-full flex items-center justify-center text-white text-xs font-bold"
//     //   }, "3")
//     ]),

//     // Contenu texte
//     createElement("div", { class: "ml-3 flex-1" }, [
//       createElement("div", { class: "flex justify-between items-start" }, [
//         createElement("h3", { class: "font-semibold text-white" }, "Anna Sock"),
//         createElement("span", { class: "text-sm text-sonatel-teal font-medium" }, "20:14")
//       ]),
//       createElement("p", { class: "text-sm text-gray-600 truncate" }, "le message envoyé")
//     ])
//   ]);
// }
