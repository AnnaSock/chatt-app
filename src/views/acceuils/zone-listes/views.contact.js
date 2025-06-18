import { createElement } from "../../../component.js"



export function afficherListeContact(){
    const item= createElement('div',{},[
                             createElement('div', {class: "w-[28vw] flex justify-center h-[10vh] border-b border-gray-800 hover:bg-[#202c33] cursor-pointer"}, [
                                          createElement('div', {class: "w-[4vw] h-[10vh] flex items-center justify-center   "}, [
                                                                                                 createElement('button', { class: "flex justify-center items-center" }, [
                                                                                                 createElement('div', { class: "w-[3.1vw] h-[6vh] bg-[#374248] rounded-[30px] ml-0.5 text-[#039393] flex items-center justify-center text-[30px]" }, 'KF'),
                                                                                                
                                                                                                
                                                                                                ]),
                                                                                                
                                                                                    ]),
                                                                                    createElement('div', {class: "w-[20vw] h-[10vh] flex flex-col  "},
                                                                                                        [ 
                                                                                                                        createElement('p', {class: "ml-2 font-semibold text-white mt-[3.5vh] "}, "Khadidiatou Fall")
                                                                                                            // createElement('div', {class: "w-[20vw] h-[5vh] "}, [
                                                                                                            //             createElement('p', {class: "ml-2 text-sm text-gray-600 truncate"}, "Contenu du message ici")
    
                                                                                                            //  ])
    
                                                                                                 ]),
                                                                                    createElement('div', {class: "w-[2vw] h-[10vh] flex flex-col  "}, [
                                                                                                //  createElement('div', {class: "w-[4vw] h-[5vh] flex items-end text-sm text-white font-medium"}, "21:22"),
                                                                                                //  createElement('div', {class: "w-[4vw] h-[5vh]"},  [
                                                                                                //               createElement("div", { class: " bg-[#039393]  w-6 h-6 ml-1 rounded-full flex items-center justify-center text-white text-xs font-bold"}, "3")
                                                                                                //  ] )
    
                                                                                    ])                                          
    
                                                                      ]),                                                                        
      
            ])
            return item
}