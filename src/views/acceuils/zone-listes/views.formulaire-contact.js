import { navigate } from "../../../../routes/mini.route.js"
import { createElement } from "../../../component.js"
import { ajouterContact } from "../../../controllers/controller.acceuil.js"




export function afficherFormulaireContact(){
   return createElement('form', {
                                                   class: "flex flex-col gap-[5vh] w-[20vw] shadow rounded-[10px] ", id: "contact"
                                             }, [
                                                                  createElement('h1', {class:" text-[2rem] text-white  mt-[3vh] ml-[2vw] flex gap-8 "}, [
                                                                        createElement('i', {class :"fas fa-arrow-left cursor-pointer text-[#039393] mt-[1vh] ", onclick: ()=> navigate("boutonNouveau")}),
                                                                        "      Nouveau contact"

                                                                  ]),                                                
                                                                  createElement('div', {class: "flex flex-col gap-6"}, [
                                                                                    createElement('div', {class:"carteInput ml-[2.5vw] "}, [
                                                                                    createElement('div', {class:"flex items-center bg-white w-[23vw] h-[6vh] border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                                                createElement('div', {class:"bg-[#202c33] backdrop-blur-sm  rounded-full p-2 mr-4 "}, [
                                                                                                            createElement('i', {class:"fas fa-user w-5 h-5 text-black text-center", }),
                                                                                                ]),
                                                                                                createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full  focus:outline-none ", id:"prenom", placeholder:"Prénom", type:"text" , }, ),
                                                                                                
                                                                                          ]),
                                                                                    createElement('small', {id: 'erreur-prenom', class: "hidden text-[1rem] text-red-500 mt-[1.5rem] ml-[1rem]"}, ),
                                                                                    ]),
                                                                                    createElement('div', {class:"carteInput ml-[2.5vw] "}, [
                                                                                    createElement('div', {class:"flex items-center bg-white w-[23vw] h-[6vh] border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                                                createElement('div', {class:"bg-[#202c33] backdrop-blur-sm  rounded-full p-2 mr-4 "}, [
                                                                                                            createElement('i', {class:"fas fa-user w-5 h-5 text-black text-center"}),
                                                                                                ]),
                                                                                                createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full  focus:outline-none ", id:"nom", placeholder:"Nom", type:"text" , }, ),
                                                                                                
                                                                                          ]),
                                                                                    createElement('small', {id: 'erreur-nom', class: "hidden text-[1rem] text-red-500 mt-[1.5rem] ml-[1rem]"}, ),
                                                                                    ]),
                                                                                    createElement('div', {class:"carteInput ml-[2.5vw] "}, [
                                                                                    createElement('div', {class:"flex items-center bg-white w-[23vw] h-[6vh] border border-[#039393] rounded-[20px] px-4 py-4 hover:bg-[#235347]/30 focus-within:bg-[#235347]/30  transition duration-300 transform hover:scale-110"}, [
                                                                                                createElement('div', {class:"bg-[#202c33] backdrop-blur-sm  rounded-full p-2 mr-4 "}, [
                                                                                                            createElement('i', {class:"fas fa-phone w-5 h-5 text-black text-center"}),
                                                                                                ]),
                                                                                                createElement('input', {class: "bg-transparent text-black placeholder-black-200 w-full  focus:outline-none ", id:"numero", placeholder:"Numéro", type:"text" , }, ),
                                                                                                
                                                                                          ]),
                                                                                    createElement('small', {id: 'erreur-numero', class: "hidden text-[1rem] text-red-500 mt-[1.5rem] ml-[1rem]"}, ),
                                                                                    ]),
                                                                                    createElement("button", {class:"w-[23vw] p-3  ml-[2.5vw] rounded-[20px] bg-[#039393] text-black font-semibold text-lg shadow-lg hover:from-[#fb6123] hover:to-[#fb6123] hover:shadow-xl hover:-translate-y-1 transition-all duration-300", type:"submit", onclick: ()=> ajouterContact()}, 'Ajouter'),
                                                                                    
                                                                  ]),
                                                                  
                          ])
}