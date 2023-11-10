import { Table } from 'antd';
import './style.css'

const MoviesTable = ( {movies, inputTitle} ) => {


  // format runtime to hh:mm:ss
  const formatedRuntime = (runtime) => {
    let hours = Math.floor(runtime / 60)
    let minutes = runtime % 60
    if (hours < 10) {hours = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    return(`${hours}:${minutes}:00`)
  }

  // filter movies
  // const selectedMovies = movies.filter((movie) => {
  //   return movie.title.includes(inputTitle)
  // })
  // console.log(inputTitle)
  // console.log(selectedMovies)


  // set table
  const columns = [
    {
      title: 'POSTER',
      dataIndex: 'posterUrl',
      key: 'posterUrl',
      align: 'center',
      render: (dataIndexValue, record) => <img className="poster" src={dataIndexValue} alt={`poster of ${record.title}`} />
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      render: (title) => <p className="table-cell"> {title} </p>
    },
    {
      title: 'YEAR',
      dataIndex: 'year',
      key: 'year',
      align: 'center',
      render: (year) => <p className="table-cell"> {year} </p>
    },
    {
      title: 'DURATION',
      dataIndex: 'runtime',
      key: 'runtime',
      align: 'center',
      render: (runtime) => <p className="table-cell"> {`${formatedRuntime(runtime)}`} </p>
    },
    {
      title: 'PLOT',
      dataIndex: 'plot',
      key: 'plot',
      render: (plot) => <p className="table-cell"> {plot} </p>
    },
  ]


  return (
      <div className="table-container">
        <Table
          className="table"
          columns={columns}
          dataSource={movies.filter(movie => movie.title.toLowerCase().includes(inputTitle))}
          bordered
        />
      </div>
  )
}

export default MoviesTable
