import { Collapse } from 'antd'
const { Panel } = Collapse

const ListCollapse = () => {
  const onChange = key => {
    console.log(key)
  }
  const headerTest = '123'

  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header={headerTest} key="1">
        {headerTest}
      </Panel>
    </Collapse>
  )
}
export default ListCollapse
