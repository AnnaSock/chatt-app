import {getAllElements, url} from "./model.chef.js"

export async function verifierNumero(numero) {
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

  return { success: true, data: utilisateur }
}







// export async function enregistrerContact(utilisateur, uConnecte) {
//   try {
//     const res = await fetch(`${url}${uConnecte}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },

      
//       body: JSON.stringify(utilisateur)
//     });
    
//     if (!res.ok) {
//       return { success: false, message: "Erreur lors de l'ajout" };
//     }

//     return { success: true };

//   } catch (error) {
//     console.error("Erreur ajoutContact:", error);
//     return { success: false, message: "Erreur serveur" };
//   }
// }


export async function enregistrerContact(utilisateurModifie, id) {
  try {
    const res = await fetch(`http://localhost:3001/utilisateurs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(utilisateurModifie),
    });

    if (!res.ok) {
      throw new Error("Échec de l’enregistrement");
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: "Erreur lors de l'ajout" };
  }
}
