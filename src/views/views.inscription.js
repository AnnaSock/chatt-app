import { createElement } from "../component";


export function renderPageInscription(){
    const page = createElement('div', {id:"container", class:"bg-[#111b21] min-h-screen flex flex-col items-center justify-center p-4"} , [
                              createElement('div',{class:"text-center mb-8"},[
                                                  createElement('h1',{class:"text-3xl text-[#039393] font-bold bg-gradient-to-r from-[#DAF1DE] to-[#8EB69B] bg-clip-text  mb-2"}, 'Inscription'),

                                     ]),
                              createElement('form', {id: "form-connexion" ,class:"space-y-6 w-[25rem]"}, [
                                            createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-[#039393] backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-user w-5 h-5 text-black text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"prenom", placeholder:"Prénom", type:"text" , }, ),
                                                                              
                                                                            ]),
                                                                createElement('small', {id: 'erreur-prenom', class: "hidden text-[1rem] text-red-500 mt-[1.5rem] ml-[1rem]"}),
                                                  ]),
                                             createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-[20px]  px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-[#039393] backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-user w-5 h-5 text-black text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"nom", placeholder:"Nom", type:"text" , }, )
                                                                ]),
                                                                createElement('small', {id: 'erreur-nom', class: "hidden text-[1rem] text-red-500 mt-[1rem] ml-[1rem]"}),

                                                  ]),
                                             createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-[#039393] backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-phone w-5 h-5 text-black text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"numero", placeholder:"Numéro", type:"tel" , }, )
                                                                ]),
                                                                createElement('small', {id: 'erreur-numero', class: "hidden text-[1rem] text-red-500 mt-[1rem] ml-[1rem]"}),

                                                  ]),
                                             createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-[#039393] backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-lock w-5 h-5 text-black text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"mdp", placeholder:"Mot de passe", type:"password" , }, )
                                                                ]),
                                             createElement('small', {id: 'erreur-mdp', class: "hidden text-[1rem] text-red-500 mt-[1rem] ml-[1rem]"}),

                                                  ]),
                                                  
                                              createElement("button", {class:"w-full py-4 rounded-[20px] bg-[#039393] text-black font-semibold text-lg shadow-lg hover:from-[#fb6123] hover:to-[#fb6123] hover:shadow-xl hover:-translate-y-1 transition-all duration-300", type:"submit",}, 'Continuer'),

                                     ])
                 ])

    return page
}