// const url = "https://jsonbackend-t8is.onrender.com/";


const url = "http://localhost:3001/"


export async function getAllElements(elements) {
  try {
    const res = await fetch(`${url}${elements}`)
    // console.log(res)
    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status} : ${res.statusText}`)
    }

    return await res.json()
  } catch (error) {
    console.error("Erreur dans getAllElements :", error.message)
    return null
  }
}

export async function verifierUtilisateur(numero, motDePasse) {
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

  if (utilisateurs.motDePasse !== motDePasse) {
    return { success: false, erreur: "motDePasse" }
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