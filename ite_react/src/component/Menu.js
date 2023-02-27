import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
const items = [getItem('Dashboard', '1', <MailOutlined />), getItem('List', '2', <MailOutlined />), getItem('Deal', '3', <MailOutlined />), getItem('PROFILE', 'grp', null, [getItem('My Portfolio', '13'), getItem('My Items', '14'), getItem('My Deal', '15'), getItem('Airdrop', '16')], 'group')]

const LeftMenu = () => {
  const onClick = e => {
    console.log('click ', e)
  }
  return (
    <Menu
      onClick={onClick}
      style={{
        // width: 256
        background: '#201E43',
        marginTop: '125px'
      }}
      mode="inline"
      items={items}
    />
  )
}
export default LeftMenu
