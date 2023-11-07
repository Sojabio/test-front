import { Table } from 'antd';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../api/ApiFetch';
import './style.css'

const MoviesTable = () => {
  const [movies, setMovies] = useState([])

  // get data from api
  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies()
      setMovies(moviesData)
    };

  fetchData();
    }, []);

  // sort movies by runtime
  movies.sort((a, b) => {
    return a.runtime - b.runtime
  })

  // format runtime to hh:mm:ss
  const formatedRuntime = (runtime) => {
    let hours = Math.floor(runtime / 60)
    let minutes = runtime % 60
    if (hours < 10) {hours = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    return(`${hours}:${minutes}:00`)
  }

  // set ant table
  const columns = [
    {
      title: 'Poster',
      dataIndex: 'posterUrl',
      key: 'posterUrl',
      render: (dataIndexValue, record) => <img className="poster" src={dataIndexValue} alt={`poster of ${record.title}`} />    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Year of release',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Duration',
      dataIndex: 'runtime',
      key: 'runtime',
      render: (runtime) => formatedRuntime(runtime),
    },
    {
      title: 'Plot',
      dataIndex: 'plot',
      key: 'plot'
    },
  ]

  return (
      <div className="table-container">
        <Table className="table" columns={columns} dataSource={movies} />
      </div>
  )
}

export default MoviesTable
