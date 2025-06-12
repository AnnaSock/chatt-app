const url = "https://jsonbackend-t8is.onrender.com/";


// const url = "http://localhost:3001/"

export async function getAllElements(elements) {
  try {
    const res = await fetch(`${url}${elements}`)

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
  const utilisateurs = await getAllElements("contacts")

  if (!utilisateurs || utilisateurs.length === 0) {
    return { success: false, erreur: "serveur" }
  }

  const utilisateur = utilisateurs.find(u => u.numero === numero)

  if (!utilisateur) {
    return { success: false, erreur: "numero" }
  }

  if (utilisateur.motDePasse !== motDePasse) {
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