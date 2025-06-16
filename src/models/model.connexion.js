import { getAllElements} from "./model.chef.js"


export async function verifierUtilisateur(numero, mdp) {
  const utilisateurs = await getAllElements("utilisateurs")
  
  if (!utilisateurs || utilisateurs.length === 0) {
    return { success: false, erreur: "serveur" }
  }
  // console.log(utilisateurs);

  
  const utilisateur = utilisateurs.find(u => u.numero === numero)

  // console.log(utilisateur);
  
  if (!utilisateur) {
    return { success: false, erreur: "numero" }
  }

  if (utilisateur.mdp !== mdp) {
    return { success: false, erreur: "mdp" }
  }

  return { success: true, data: utilisateur }
}





// function getUtilisateurs() {
//   const data = localStorage.getItem("utilisateurs")
//   return data ? JSON.parse(data) : []
// }

// // Fonction pour sauvegarder les utilisateurs dans localStorage
// function setUtilisateurs(utilisateurs) {
//   localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs))
// }