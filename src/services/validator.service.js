import { afficherErreur, effacerErreur } from "./error.service.js"


export function validerFormulaireConnexion(champs, erreurs) {
  let estValide = true

  Object.values(erreurs).forEach(effacerErreur)

  const numero = champs.numero.value.trim()
  const mdp = champs.mdp.value.trim()

  if (!numero) {
    afficherErreur("Le numéro est requis", erreurs.numero)
    estValide = false
  } else if (!/^\d+$/.test(numero)) { 
    afficherErreur("Le numéro doit contenir uniquement des chiffres", erreurs.numero)
    estValide = false
  }

  if (!mdp) {
    afficherErreur("Le mot de passe est requis", erreurs.mdp)
    estValide = false
  } else if (mdp.length < 5) { 
    afficherErreur("Le mot de passe doit faire au moins 5 caractères", erreurs.mdp)
    estValide = false
  }

  return estValide
}

    export function validerFormulaireInscription(champs, erreurs) {
      let estValide = true
    
      Object.values(erreurs).forEach(effacerErreur)
    
      const prenom = champs.prenom.value.trim()
      const nom = champs.nom.value.trim()
      const numero = champs.numero.value.trim()
      const mdp = champs.mdp.value.trim()
    
      if (!prenom) {
        afficherErreur("Le prénom est requis", erreurs.prenom)
        estValide = false
      }
    
      if (!nom) {
        afficherErreur("Le nom est requis", erreurs.nom)
        estValide = false
      }
    
      if (!numero) {
        afficherErreur("Le numéro est requis", erreurs.numero)
        estValide = false
      } else if (!/^\d+$/.test(numero)) {
        afficherErreur("Le numéro doit contenir uniquement des chiffres", erreurs.numero)
        estValide = false
      }
    
      if (!mdp) {
        afficherErreur("Le mot de passe est requis", erreurs.mdp)
        estValide = false
      } else if (mdp.length < 5) {
        afficherErreur("Le mot de passe doit faire au moins 5 caractères", erreurs.mdp)
        estValide = false
      }
    
      return estValide
    }
