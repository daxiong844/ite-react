import { Table, Avatar } from 'antd'
const columns = [
  {
    dataIndex: 'number',
    key: 'number',
    align: 'center'
  },
  {
    title: 'Who',
    dataIndex: 'Who',
    key: 'Who',
    align: 'center',
    // render: text => <div>{text}</div>
    render: text => (
      <div style={{ height: '0.15rem' }}>
        <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
        <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/5f54b8b788776e92" />
      </div>
    )
  },
  {
    title: 'Need',
    dataIndex: 'Need',
    key: 'Need',
    align: 'center'
  },
  {
    title: 'Provide',
    dataIndex: 'Provide',
    key: 'Provide',
    align: 'center'
  },
  {
    title: 'Deposited',
    dataIndex: 'Deposited',
    key: 'Deposited',
    align: 'center'
  }
]
const data = [
  {
    key: '1',
    number: '1',
    Who: 'John Brown',
    Need: 'I want a basketball, like myco jodon...',
    Provide: 'i will provide a baseball. just you see...',
    Deposited: '10.5USDT'
  },
  {
    key: '2',
    number: '2',
    Who: 'Jim Green',
    Need: 'I want a basketball, like myco jodon...',
    Provide: 'i will provide a baseball. just you see...',
    Deposited: '10.5USDT'
  },
  {
    key: '3',
    number: '3',
    Who: 'Joe Black',
    Need: 'I want a basketball, like myco jodon...',
    Provide: 'i will provide a baseball. just you see...',
    Deposited: '10.5USDT'
  }
]
const App = () => <Table columns={columns} dataSource={data} />
export default App
