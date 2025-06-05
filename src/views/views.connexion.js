import { createElement } from "../component.js"


export function renderLoginPage(){
    return createElement('div', {id:"container", class:"bg-gradient-to-br from-[#051F20] via-[#0B2B26] to-[#163632] min-h-screen flex items-center justify-center p-4"} , [
                        createElement('div', {class:"w-[30rem] h-[25rem] border-2 border-black"}, [
                                     createElement('div',{class:"text-center mb-8"},[
                                                  createElement('h1',{class:"text-3xl font-bold bg-gradient-to-r from-[#DAF1DE] to-[#8EB69B] bg-clip-text text-transparent mb-2"}, 'Bienvenue'),
                                                  createElement('p',{class:"text-[#8EB69B] text-lg"}, 'Chat App de ODC')

                                     ]),
                                     createElement('form', {class:"space-y-6"}, [
                                                  createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-[#235347]/20 backdrop-blur-sm border border-[#8EB69B]/30 rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30 focus-within:border-[#8EB69B]/50 transition-all duration-300 "}, [
                                                                              createElement('div', {class:"bg-[#8EB69B]/20 backdrop-blur-sm rounded-full p-2 mr-4"}, [
                                                                                            createElement('i', {class:"fas fa-phone w-5 h-5 text-[#8EB69B] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-[#DAF1DE] placeholder-[#8EB69B]/70 w-full focus:outline-none", id:"numero", placeholder:"Numéro de téléphone", type:"tel" }, )
                                                                ])
                                                  ]),
                                                  createElement('div', {class:"carteInput"}, [
                                                                createElement('div', {class:"flex items-center bg-[#235347]/20 backdrop-blur-sm border border-[#8EB69B]/30 rounded-full px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30 focus-within:border-[#8EB69B]/50 transition-all duration-300 "}, [
                                                                              createElement('div', {class:"bg-[#8EB69B]/20 backdrop-blur-sm rounded-full p-2 mr-4"}, [
                                                                                            createElement('i', {class:"fas fa-lock w-5 h-5 text-[#8EB69B] text-center"}),
                                                                              ]),
                                                                              createElement('input', {class: "bg-transparent text-[#DAF1DE] placeholder-[#8EB69B]/70 w-full focus:outline-none", id:"mdp", placeholder:"Mot de passe", type:"password"}, )
                                                                ])
                                                  ]),
                                                  createElement("button", {class:"w-full py-4 rounded-full bg-gradient-to-r from-[#235347] to-[#8EB69B] text-white font-semibold text-lg shadow-lg hover:from-[#8EB69B] hover:to-[#235347] hover:shadow-xl hover:-translate-y-1 transition-all duration-300", type:"submit"}, 'Se connecter')
                                     ])
                        ])
    
    
    ]) 

}

