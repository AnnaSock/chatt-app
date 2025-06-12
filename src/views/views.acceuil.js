import { createElement } from "../component.js"


export function renderPageAcceuil(){
     const utilisateurJSON = localStorage.getItem("utilisateurConnecte")
     const utilisateur = utilisateurJSON ? JSON.parse(utilisateurJSON) : null

        if (!utilisateur) {
            route("/connexion")
            return
        }
    


const page = createElement('div',{class: "relative bg-[#262524] w-screen h-screen"}, [
                        //   createElement('div', {class: "bg-[#039393] h-[13vh]"}, []),
                        //   createElement('div', {class: "bg-[#dbd8d4] h-[87vh]"}),
                          createElement('div', {class: "absolute top-0 left-0 w-[90vw] h-[95vh] bg-white z-1 shadow-white-500 mt-[2.5vh] ml-[5vw] flex rounded-[10rem] "}, [
                                        createElement('div', {class: "sidebar w-[5vw] h-[95vh]  bg-[#202c33] flex flex-col"}, [
                                                     createElement('div', {class:"h-[10vh] w-[5vw] flex justify-center flex-col items-center"}, [
                                                                //    createElement('h1', {class: "font-bold text-[#e84f0b] text-[1.5rem]"}, 'Chat'),
                                                                //    createElement('p', {class :"font-bold text-[#e84f0b]"}, 'ODC'),

                                                     ]),
                                                     createElement('div' , {class: "w-[5vw] h-[75vh] flex flex-col items-center justify-center gap-5"}, [
                                                                //   createElement('button', {class: "w-[3.5vw] h-[5.5vh] rounded-2xl border-2 border-[#039393] cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors"}, [
                                                                //                 createElement('i',{class: "fa-solid fa-message",}),
                                                                //                 createElement('p',{class: "text-[0.7rem]"}, 'Messages')
                                                                //   ]),
                                                                //   createElement('button', {class: "w-[3.5vw] h-[5.5vh] rounded-2xl border-2 border-[#039393] cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors"}, [
                                                                //                 createElement('i',{class: "fa-solid fa-user-group",}),
                                                                //                 createElement('p',{class: "text-[0.7rem]"}, 'Groupes')
                                                                //   ]),
                                                                //   createElement('button', {class: "w-[3.5vw] h-[5.5vh] rounded-2xl border-2 border-[#039393] cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors"}, [
                                                                //                 createElement('i',{class: "fa-solid fa-arrows-turn-to-dots",}),
                                                                //                 createElement('p',{class: "text-[0.7rem]"}, 'Diffusions')
                                                                //   ]),
                                                                //   createElement('button', {class: "w-[3.5vw] h-[5.5vh] rounded-2xl border-2 border-[#039393] cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors"}, [
                                                                //                 createElement('i',{class: "fa-solid fa-box-archive",}),
                                                                //                 createElement('p',{class: "text-[0.7rem]"}, 'Archives')
                                                                //   ]),
                                                           
                                                     ]),
                                                    //  createElement('div', {class: "w-[5vw] h-[10vh] flex justify-center items-center "}, [
                                                    //                 createElement('button', {id: "btNouveau", class: "w-[60px] h-[50px] rounded-2xl cursor-pointer  rounded-xl hover:bg-red-400 focus:bg-red-400 transition-colors",}, [
                                                    //                 createElement('i', {class: 'fas fa-right-from-bracket text-red-500'}),])
                                                    //  ])
                                                     

                                        ]),
                                        createElement('div',{class: "zone-liste border border-black w-[28vw] h-[95vh] bg-[#111b21] flex flex-col"}, [
                                                                    
                                                     createElement('div', {class: "border border-black w-[28vw] h-[8vh] flex"}, [
                                                                   createElement('div', {class: "border border-black w-[23vw] h-[8vh] flex items-center"}, [createElement('h1',{class: "titre text-3xl ml-[10px] "},'Messages'),]),
                                                                   createElement('div', {class: "border border-black w-[5vw] h-[8vh] "}, [])
                                                     ]),
                                                     createElement('div', {class: "border border-black w-[28vw] h-[8vh] flex justify-center items-center"}, [
                                                                 createElement('input', {placeholder: 'Rechercher', class: "w-[25vw] h-[4vh] bg-[#202c33] rounded-[10px] pl-[2vw] outline-none"}),
                                                     ])


                                        ]),
                                        createElement('div',{class: "zone-message border border-black w-[67vw] h-[95vh] bg-[#202c33] flex  flex-col justify-center items-center text-[2rem] text-white"}, [
                                                     createElement('img', {src: "/chat.png", class: "w-[15vw] h-[30vh] "}),
                                                     createElement("p", {class: "text-white text-[1rem] "}, "Chat ODC ___ Commence à chatter !"),
                                                     createElement("p", {class: "text-white text-[1rem]"}, "Veuillez choisir une conversation pour afficher les messages ici."),

                                                    //  createElement('div', {class: "border border-bl1remack h-[10vh] "}, ),
                                                    //  createElement("div", {class: "border border-black h-[75vh] "}),
                                                    //  createElement('div', {class: "border border-black h-[10vh] "})
                                        ])

                                
                            ])
                          ]) 
    
    
    
    return page




}


    
    
    
    

// #374248 couleur boule message 



