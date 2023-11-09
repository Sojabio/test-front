import Home from "./pages/Home"
import { useEffect, useState } from "react"
import { fetchMovies } from "./api/ApiFetch"


function App() {
  const [movies, setMovies] = useState([])

  // get data from api and sort movies by runtime
  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies()
      moviesData.sort((a, b) => {
        return a.runtime - b.runtime
      })
    setMovies(moviesData)
    }

    fetchData()
  }, [])


  return (
    <div>
      <Home movies={movies}/>
    </div>
  )
}

export default App
