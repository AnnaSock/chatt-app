import { createElement } from "../../../component.js"

createElement

export function afficherListeNouveau(){
       
      const item= createElement('div',{},[ createElement('div', {class: "w-[28vw] flex justify-center h-[10vh] border-b border-gray-800 hover:bg-[#202c33] cursor-pointer"}, [
                                                                                createElement('div', {class: "w-[4vw] h-[10vh] flex items-center justify-center   "}, [
                                                                                             createElement('div', { class: "fa-solid fa-user w-[3.1vw] h-[6vh] text-center pt-[0.5vw] bg-[#374248] rounded-[2vw] ml-0.5 text-[#039393] text-[2rem]" },)
            
                                                                                ]),
                                                                                createElement('div', {class: "w-[20vw] h-[10vh] flex  items-center  "},
                                                                                                    [ 
                                                                                                        createElement('p', {class: "ml-2 font-semibold text-white"}, "Nouveau contact")
                                                                                             ])
                                                                                

                                                                  ]),
                    createElement('div', {class: "w-[28vw] flex justify-center h-[10vh] border-b border-gray-800 hover:bg-[#202c33] cursor-pointer"}, [
                                                                                createElement('div', {class: "w-[4vw] h-[10vh] flex items-center justify-center   "}, [
                                                                                             createElement('div', { class: "fa-solid fa-user w-[3.1vw] h-[6vh] text-center pt-[0.5vw] bg-[#374248] rounded-[2vw] ml-0.5 text-[#039393] text-[2rem]" },)
            
                                                                                ]),
                                                                                createElement('div', {class: "w-[20vw] h-[10vh] flex  items-center  "},
                                                                                                    [ 
                                                                                                        createElement('p', {class: "ml-2 font-semibold text-white"}, "Nouveau groupe")
                                                                                             ]),
                                                                                

                    ])
                  ])
         return item         
                
}