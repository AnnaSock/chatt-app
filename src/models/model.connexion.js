const url = "https://jsonbackend-t8is.onrender.com/";

export async function verifierUtilisateur(numero, mdp) {
  const res = await fetch(`${url}contacts?numero=${numero}&motDePasse=${mdp}`)
  const data = await res.json()
  return data.length ? data[0] : null
}


export async function getAllElements(elements) {
  const res = await fetch(`${url}${elements}`);
  return res.json();
}

