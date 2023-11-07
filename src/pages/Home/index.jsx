import { Table } from 'antd';

const Home = ({movies}) => {

  const sortedMovies= movies.sort((a, b) => {
    return a.runtime - b.runtime
  })

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'posterUrl',
      key: 'posterUrl',
      render: (dataIndexValue, record) => <img src={dataIndexValue} alt={`affiche du film ${record.title}`} />    },
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
      key: 'runtime'
    },
    {
      title: 'Plot',
      dataIndex: 'plot',
      key: 'plot'
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={movies} />
    </div>
  )
}

export default Home
