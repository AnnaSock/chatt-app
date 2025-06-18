import { createElement } from "../component.js";




export function afficherErreur(message, tag) {
    tag.textContent = message;
    tag.classList.remove('hidden');
}

export function effacerErreur(tag) {
    tag.textContent = '';
}


export function error404(){
      const pageErreur = createElement('h1', {}, 'Error 404, Page introuvable')
      return pageErreur
}