import { API_URL } from "./ApiUrl"

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL, {
      method: "get",
    })
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData.movies;
    } else {
      throw new Error("Erreur lors de la requête des films");
    }
  } catch (error) {
    console.error("Erreur de requête des films : ", error)
    return []
  }
}
