import Home from "./pages/Home"
import { useState, useEffect } from "react"
import { fetchMovies } from "./api/ApiFetch"


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies()
      setMovies(moviesData)
    };

    fetchData();
  }, []);

  return (
    <div>
      <Home movies={movies}/>
    </div>
  )
}

export default App
