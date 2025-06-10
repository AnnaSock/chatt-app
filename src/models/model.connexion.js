export async function verifierUtilisateur(numero, mdp) {
  const res = await fetch(`http://localhost:3001/contacts?numero=${numero}&motDePasse=${mdp}`)
  const data = await res.json()
  return data.length ? data[0] : null
}
