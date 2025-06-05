import { route } from "../routes";

document.addEventListener('DOMContentLoaded', ()=>{
      route("/page")
      
      
      const inputDocument = document.querySelectorAll('div:has(input[type="tel"]), div:has(input[type="password"])')
      inputDocument.forEach(tag =>{ 
            const input= document.querySelector('input') 
            input.addEventListener("focus",function (){
                  tag.classList.add('scale-105')
              });
     
           input.addEventListener("blur", function (){
           tag.classList.remove('scale-105')
           });
      // console.log(input)
})

}) 