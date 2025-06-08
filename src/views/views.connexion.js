import { createElement } from "../component.js"


export function renderLoginPage(){
    return createElement('div', {id:"container", class:"bg-gradient-to-br from-gray-100 via-summer-shower to-gray-200 min-h-screen flex flex-col items-center justify-center p-4"} , [
                        createElement('div', {}, [
                                     createElement('img', {src: "../public/logo_odc.png?v=1", class: "w-[15rem] h-[15rem]"})
                        ]),
                        createElement('div', {class:"w-[30rem] h-[25rem]"}, [
                                     createElement('div',{class:"text-center mb-8"},[
                                                  createElement('h1',{class:"text-3xl text-[#039393] font-bold bg-gradient-to-r from-[#DAF1DE] to-[#8EB69B] bg-clip-text  mb-2"}, 'Bienvenue'),
                                                  createElement('p',{class:"text-[#e84f0b]"}, 'Chat App ODC')

                                     ]),
                                     createElement('form', {class:"space-y-6"}, [
                                                  createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-gray-200 backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-phone w-5 h-5 text-[#e84f0b] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"numero", placeholder:"Numéro de téléphone", type:"tel" , }, )
                                                                ])
                                                  ]),
                                                   createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-gray-200 backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-lock w-5 h-5 text-[#e84f0b] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"mdp", placeholder:"Mot de passe", type:"password" , }, )
                                                                ])
                                                  ]),
                                                  createElement("button", {class:"w-full py-4 rounded-full bg-gradient-to-r from-[#e84f0b] to-[#fb6123] text-white font-semibold text-lg shadow-lg hover:from-[#fb6123] hover:to-[#fb6123] hover:shadow-xl hover:-translate-y-1 transition-all duration-300", type:"submit"}, 'Se connecter')
                                     ])
                        ])
    
    
    ]) 

}



// import { createElement } from "../component.js"

// export function renderHomePage() {
//   return createElement("div", {
//     id: "home-container",
//     class: "flex min-h-screen bg-gradient-to-br from-gray-100 via-summer-shower to-gray-200"
//   }, [

//     // 🟦 1. SIDEBAR
//     createElement("aside", {
//       class: "w-[6rem] bg-white shadow-xl flex flex-col justify-between items-center py-4"
//     }, [
//       // Logo ou icône en haut
//       createElement("div", {}, [
//         createElement("img", {
//           src: "../public/logo_odc.png",
//           alt: "Logo",
//           class: "w-10 h-10"
//         })
//       ]),
//       // Bouton déconnexion en bas
//       createElement("div", {}, [
//         createElement("button", {
//           class: "bg-gradient-to-r from-[#e84f0b] to-[#fb6123] text-white px-4 py-2 rounded-full mb-4 hover:scale-105 transition"
//         }, "Déconnexion")
//       ])
//     ]),

//     // 🟨 2. LISTES (conversations, groupes, archives, etc.)
//     createElement("section", {
//       class: "w-[24rem] border-r border-gray-300 p-4 overflow-y-auto"
//     }, [
//       createElement("h2", {
//         class: "text-xl font-semibold text-[#039393] mb-4"
//       }, "Discussions"),
//       createElement("ul", { class: "space-y-2" }, [
//         createElement("li", {
//           class: "bg-white p-3 rounded-lg shadow hover:bg-[#235347]/20 cursor-pointer transition"
//         }, "Contact 1"),
//         createElement("li", {
//           class: "bg-white p-3 rounded-lg shadow hover:bg-[#235347]/20 cursor-pointer transition"
//         }, "Contact 2"),
//         createElement("li", {
//           class: "bg-white p-3 rounded-lg shadow hover:bg-[#235347]/20 cursor-pointer transition"
//         }, "Diffusions"),
//         createElement("li", {
//           class: "bg-white p-3 rounded-lg shadow hover:bg-[#235347]/20 cursor-pointer transition"
//         }, "Archives"),
//       ])
//     ]),

//     // 🟩 3. ZONE MESSAGE
//     createElement("main", {
//       class: "flex-1 p-6 flex flex-col justify-between"
//     }, [

//       // Affichage des messages
//       createElement("div", {
//         id: "zone-messages",
//         class: "flex-1 overflow-y-auto space-y-3"
//       }, [
//         createElement("div", {
//           class: "self-start max-w-[60%] bg-white rounded-xl px-4 py-2 shadow"
//         }, "Bonjour !"),
//         createElement("div", {
//           class: "self-end max-w-[60%] bg-[#e84f0b] text-white rounded-xl px-4 py-2 shadow"
//         }, "Salut, ça va ?"),
//       ]),

//       // Input pour écrire un message
//       createElement("div", {
//         class: "mt-4 flex items-center"
//       }, [
//         createElement("input", {
//           type: "text",
//           placeholder: "Écrire un message...",
//           class: "flex-1 px-4 py-3 rounded-full border border-[#039393] focus:outline-none"
//         }),
//         createElement("button", {
//           class: "ml-2 bg-[#e84f0b] text-white px-5 py-3 rounded-full hover:bg-[#fb6123] transition"
//         }, "Envoyer")
//       ])
//     ])

//   ]);
// }
