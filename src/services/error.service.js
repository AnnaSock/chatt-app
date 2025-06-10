// export function afficherErreur(id, message) {
//   const element = document.getElementById(id)
//   if (element) {
//     element.textContent = message
//     element.classList.remove("hidden")
//   }
// }

// export function effacerErreur(id) {
//   const element = document.getElementById(id)
//   if (element) {
//     element.textContent = ''
//     element.classList.add("hidden")
//   }
// }


export function afficherErreur(message, tag) {
    tag.textContent = message;
    tag.classList.remove('hidden');
    tag.classList.add('block');
}

export function effacerErreur(tag) {
    tag.textContent = '';
}
