import MoviesTable from "../../components/MoviesTable"

import './style.css'
const Home = () => {

  return (
    <div className="home">
      <div className="home-header">
        <h1> TRAACE EXERCISE : MOVIES </h1>
        <h2> Below is a selection of movies ranked by duration (from shortest to longest) </h2>
      </div>
      <MoviesTable />
    </div>
  )
}

export default Home
