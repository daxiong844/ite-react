import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, message, Space } from 'antd'
import React from 'react'

const handleMenuClick = e => {
  message.info('Click on menu item.')
  console.log('click', e)
}
const items = [
  {
    label: 'zh-CN',
    key: '1'
    // icon: <UserOutlined />
  },
  {
    label: 'en-US',
    key: '2'
    // icon: <UserOutlined />
  }
]
const menuProps = {
  items,
  onClick: handleMenuClick
}
const Language = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button style={{ background: '#201E43', border: 0, height: '30px' }}>
        <Space style={{ background: '#201E43', color: '#ECEBF6', fontSize: '10px' }}>
          Language
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
)
export default Language
