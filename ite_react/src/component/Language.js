import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import i18n from 'i18next'
import { Trans } from 'react-i18next'

const changeLanguage = val => {
  i18n.changeLanguage(val) // val入参值为'en'或'zh'
}

const handleMenuClick = e => {
  console.log(e.key)
  if (e.key === 1) {
    changeLanguage('zh')
  } else {
    changeLanguage('en')
  }
}
const items = [
  {
    label: 'zh-CN',
    key: '1'
  },
  {
    label: 'en-US',
    key: '2'
  }
]
const menuProps = {
  items,
  onClick: handleMenuClick
}

const Language = WithTranslation => (
  <Space wrap style={{ position: 'absolute', top: '0.3rem', right: '2.12rem' }}>
    <Dropdown menu={menuProps}>
      <Button style={{ background: '#201E43', border: 0, height: '0.15rem' }}>
        <Space style={{ background: '#201E43', color: '#ECEBF6', fontSize: '0.07rem' }}>
          <Trans>home.Language</Trans>
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
)
export default Language
