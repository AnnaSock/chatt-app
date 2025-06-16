import { createElement } from "../../../component"




export function afficherFormulaireContact(){
   return createElement('form', {
                                                   class: "flex flex-col gap-[15px] pl-[10px] w-[425px] h-[500px]  shadow rounded-[10px] ", id: "contact"
                                             }, [
                                                                 createElement('h1', {class: "font-bold text-3xl text-[#E0A75E] mt-[10px]"}, "Ajouter un contact"),
                                                                 createElement('small', {id: 'erreur-contact', class: " block text-[1rem]"}),
                                                                 createElement('label',{}, 'Entrer votre nom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le nom", id: "nom"}),
                                                                 createElement('label',{}, 'Entrer votre prenom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le prenom", id: "prenom"}),
                                                                 createElement('label', {}, 'Entrer votre numéro :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le numéro de téléphone", id: "numero"}),
                                                                 createElement('button', {class: "bg-[#E0A75E] w-[300px] h-[50px] rounded-[10px] ml-[55px] text-white font-bold",id: 'bouton',}, 'Ajouter')
                          ])
}