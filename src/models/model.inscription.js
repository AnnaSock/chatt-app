import { getAllElements, getApiUrl } from "./model.chef.js";

export async function enregistrerNouvelUtilisateur(utilisateur) {
  try {
    const url = getApiUrl() + "utilisateurs"; 

    const data = await getAllElements("utilisateurs");

    if (!data) {
      return { success: false, message: "Erreur serveur" };
    }

    const numeroExiste = data.some(u => u.numero === utilisateur.numero);
    if (numeroExiste) {
      return { success: false, message: "Ce numéro existe déjà" };
    }

    const mdpExiste = data.some(u => u.mdp === utilisateur.mdp);
    if (mdpExiste) {
      return { success: false, message: "Ce mot de passe est déjà utilisé" };
    }

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
