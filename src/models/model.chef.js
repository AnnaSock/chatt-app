export function getApiUrl() {
  const isLocalhost = window.location.hostname === "localhost";
  return isLocalhost
    ? "/api/"
    : "https://jsonbackend-t8is.onrender.com/"
}

export const url = getApiUrl();



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