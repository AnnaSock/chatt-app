import { createElement } from "../component.js"


export function renderLoginPage(){
    const page = createElement('div', {id:"container", class:"bg-gradient-to-br from-gray-100 via-summer-shower to-gray-200 min-h-screen flex flex-col items-center justify-center p-4"} , [
                        createElement('div', {}, [
                                     createElement('img', {src: "/logo_odc.png?v=1", class: "w-[15rem] h-[15rem]"})
                        ]),
                        createElement('div', {class:"w-[30rem] h-[25rem]"}, [
                                     createElement('div',{class:"text-center mb-8"},[
                                                  createElement('h1',{class:"text-3xl text-[#039393] font-bold bg-gradient-to-r from-[#DAF1DE] to-[#8EB69B] bg-clip-text  mb-2"}, 'Bienvenue'),
                                                  createElement('p',{class:"text-[#e84f0b]"}, 'Chat App ODC')

                                     ]),
                                     createElement('form', {id: "form-connexion" ,class:"space-y-6"}, [
                                                  createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-gray-200 backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-phone w-5 h-5 text-[#e84f0b] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"numero", placeholder:"Numéro de téléphone", type:"tel" , }, ),
                                                                              
                                                                            ]),
                                                                createElement('small', {id: 'erreur-numero', class: "hidden text-[1rem] text-red-500 mt-[1.5rem] ml-[1rem]"}),
                                                  ]),
                                                   createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-white  border border-[#039393] rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                              createElement('div', {class:"bg-gray-200 backdrop-blur-sm rounded-full p-2 mr-4 "}, [
                                                                                            createElement('i', {class:"fas fa-lock w-5 h-5 text-[#e84f0b] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full focus:outline-none ", id:"mdp", placeholder:"Mot de passe", type:"password" , }, )
                                                                ]),
                                                                createElement('small', {id: 'erreur-mdp', class: "hidden text-[1rem] text-red-500 mt-[1rem] ml-[1rem]"}),

                                                  ]),
                                                  createElement("button", {class:"w-full py-4 rounded-full bg-gradient-to-r from-[#e84f0b] to-[#fb6123] text-white font-semibold text-lg shadow-lg hover:from-[#fb6123] hover:to-[#fb6123] hover:shadow-xl hover:-translate-y-1 transition-all duration-300", type:"submit",}, 'Se connecter'),
                                                  createElement('div', {class: "text-center"}, [
                                                               createElement('a', {id: "inscription", class: "text-gray-600 hover:text-gray-800 italic transition-colors text-sm"}, "S'inscrire")
                                                  ]),

                                     ])
                        ])
    
    
    ]) 

  return page

}


