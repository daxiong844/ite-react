import { Input, Layout, Space } from 'antd'
import LeftMenu from './Menu.js'
import Language from './Language.js'
const { Sider, Content, Header } = Layout

const headerStyle = {
  textAlign: 'left',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#0B0A24',
  paddingTop: '25px'
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0B0A24'
}
const siderStyle = {
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#201E43'
}

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%'
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider style={siderStyle}>
        <LeftMenu></LeftMenu>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Input placeholder="Search..." style={{ width: 500, background: '#201E43', outline: 'none', border: 0, color: '#727191', marginRight: '150px', height: '40px' }}></Input>
          <Language></Language>
        </Header>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout>
  </Space>
)
export default App
