
// const url = "https://jsonbackend-t8is.onrender.com/utilisateurs";
// const url = "http://localhost:3001/utilisateurs"

// import { getAllElements, getApiUrl } from "./model.connexion"



// export async function enregistrerNouvelUtilisateur(utilisateurs) {
//   try {
        
//     const response =  await fetch(url)

//     // console.log(response);
    
//     const data = await response.json()

//     const numeroExiste = data.some(u => u.numero === utilisateurs.numero)

//     if (numeroExiste) {
//       return { success: false, message: "Ce numéro existe déjà" }
//     }

//     const mdpExiste = data.some(u => u.mdp === utilisateurs.mdp)
//     if (mdpExiste) {
//       return { success: false, message: "Ce mot de passe est déjà utilisé" }
//     }

//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(utilisateurs)
//     })

//     if (!res.ok) {
//       return { success: false, message: "Erreur lors de l'ajout" }
//     }

//     return { success: true }

//   } catch (error) {
//     console.error("Erreur inscription:", error)
//     return { success: false, message: "Erreur serveur" }
//   }
// }


import { getAllElements, getApiUrl } from "./model.connexion.js"

export async function enregistrerNouvelUtilisateur(utilisateur) {
  try {
    const url = getApiUrl() + "utilisateurs"; // ← on construit l'URL complète

    // 1. On récupère tous les utilisateurs existants
    const data = await getAllElements("utilisateurs");

    if (!data) {
      return { success: false, message: "Erreur serveur" };
    }

    // 2. Vérification numéro
    const numeroExiste = data.some(u => u.numero === utilisateur.numero);
    if (numeroExiste) {
      return { success: false, message: "Ce numéro existe déjà" };
    }

    // 3. Vérification mot de passe
    const mdpExiste = data.some(u => u.mdp === utilisateur.mdp);
    if (mdpExiste) {
      return { success: false, message: "Ce mot de passe est déjà utilisé" };
    }

    // 4. Envoi du nouvel utilisateur
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(utilisateur)
    });

    if (!res.ok) {
      return { success: false, message: "Erreur lors de l'ajout" };
    }

    return { success: true };

  } catch (error) {
    console.error("Erreur inscription:", error);
    return { success: false, message: "Erreur serveur" };
  }
}
