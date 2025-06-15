
// const url = "https://jsonbackend-t8is.onrender.com/utilisateurs";
const url = "http://localhost:3001/utilisateurs"


export async function enregistrerNouvelUtilisateur(utilisateurs) {
  try {
        
    const response =  await fetch(url)

    // console.log(response);
    
    const data = await response.json()

    const numeroExiste = data.some(u => u.numero === utilisateurs.numero)

    if (numeroExiste) {
      return { success: false, message: "Ce numéro existe déjà" }
    }

    const mdpExiste = data.some(u => u.mdp === utilisateurs.mdp)
    if (mdpExiste) {
      return { success: false, message: "Ce mot de passe est déjà utilisé" }
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(utilisateurs)
    })

    if (!res.ok) {
      return { success: false, message: "Erreur lors de l'ajout" }
    }

    return { success: true }

  } catch (error) {
    console.error("Erreur inscription:", error)
    return { success: false, message: "Erreur serveur" }
  }
}
