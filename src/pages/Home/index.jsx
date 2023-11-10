import MoviesTable from "../../components/MoviesTable"
import { Input, Space } from 'antd';
const { Search } = Input;
import './style.css'
import { useState } from "react";

const Home = ( {movies} ) => {
  const [inputTitle, setInputTitle] = useState("")

  const onSearch = (value) => {
    setInputTitle(value)
    console.log(value)
  }


  return (
    <div className="home">
      <div className="home-header">
        <h1> TRAACE EXERCISE : MOVIES </h1>
        <h2> Below is a selection of movies ranked by duration (from shortest to longest) </h2>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={onSearch}
        />
      </div>

      <MoviesTable movies={movies} inputTile={inputTitle} />
    </div>
  )
}

export default Home
