import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import i18n from 'i18next'
// import { Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next'

const changeLanguage = val => {
  i18n.changeLanguage(val) // val入参值为'en'或'zh'
}

function handleMenuClick(e) {
  console.log('click', e)
  if (e.key === '1') {
    changeLanguage('en')
  } else if (e.key === '2') {
    changeLanguage('zh')
  }
}

function Language() {
  const { t } = useTranslation()
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
        {t('layoutTop.en-US')}
      </Menu.Item>
      <Menu.Item key="2" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
        {t('layoutTop.zh-CN')}
      </Menu.Item>
    </Menu>
  )
  return (
    <div id="components-dropdown-demo-dropdown-button" style={{ position: 'absolute', top: '0.3rem', right: '2.12rem' }}>
      <Dropdown overlay={menu}>
        <Button className="languageButton" style={{ background: '#201E43', border: 0, height: '0.15rem', color: '#ECEBF6', fontSize: '0.07rem' }}>
          {t('layoutTop.Language')}
          <DownOutlined style={{ fontSize: '0.05rem' }} />
        </Button>
      </Dropdown>
    </div>
  )
}

export default Language
