// const url = "https://jsonbackend-t8is.onrender.com/";


// const url = "http://localhost:3001/"


function getApiUrl() {
  const isLocalhost = window.location.hostname === "localhost";
  return isLocalhost
    ? "http://localhost:3001/"
    : "https://jsonbackend-t8is.onrender.com/"
}

const url = getApiUrl();

// export async function getAllElements(elements) {
//   try {
//     const res = await fetch(`${url}${elements}`)
//     console.log(res)
//     if (!res.ok) {
//       throw new Error(`Erreur HTTP ${res.status} : ${res.statusText}`)
//     }

//     return await res.json()
    
//   } catch (error) {
//     console.error("Erreur dans getAllElements :", error.message)
//     return null
//   }
// }

export async function getAllElements(elements) {
  try {
    const res = await fetch(`${url}${elements}`);

    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status} : ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Erreur dans getAllElements :", error.message);
    return null;
  }
}


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