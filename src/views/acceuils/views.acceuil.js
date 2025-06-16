import { createElement } from "../../component.js"
import { sidebar } from "./views.sidebar.js"
import { zoneListe } from "./views.zone-liste.js"
import {zoneMessage} from "./views.zone-message.js"




export function renderPageAcceuil(){
const page = createElement('div',{class: "relative bg-[#262524] w-screen h-screen"}, [
                                createElement('div', {class: "bg-[#039393] h-[13vh]"}, []),
                                createElement('div', {class: "bg-[#262524] h-[87vh]"}),
                                createElement('div', {class: "absolute top-0 left-0 w-[90vw] h-[95vh] bg-white z-1 shadow-white-500 mt-[2.5vh] ml-[5vw] flex rounded-[10rem] "},
                                   [
                                              sidebar(),
                                              zoneListe(),              
                                              zoneMessage()
                                      
                                   ]
                              )
                          ]) 
    return page
}


    
    
    
    

// #374248 couleur boule message 



