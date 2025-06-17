import { createElement } from "../../component";

export function zoneMessage(){
    const zoneMessage = createElement('div',{class: "zone-message w-[67vw] h-[95vh] bg-[#202c33] flex  flex-col justify-center items-center text-[2rem] text-white"}, [

                                                    // image avant de cliquer sur un message
                                                     createElement('img', {src: "/image.png", class: "w-[30vw] h-[60vh] "}),
                                                     createElement("p", {class: "text-white text-[1rem] "}, "Chat ODC ___ Commence à chatter !"),
                                                     createElement("p", {class: "text-white text-[1rem]"}, "Veuillez choisir une conversation pour afficher les messages ici."),

                                                      // Apres le click la discussions apparait

                                                    //  createElement('div', {class: "border border-bl1remack h-[10vh] "}, ),
                                                    //  createElement("div", {class: "border border-black h-[75vh] "}),
                                                    //  createElement('div', {class: "border border-black h-[10vh] "})
                                        ])
     return   zoneMessage                                         
}