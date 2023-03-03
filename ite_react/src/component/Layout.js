import React from 'react'
import { Col, Row, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Language from './Language'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'

function LayoutTop() {
  const { t } = useTranslation()
  return (
    <Row>
      <Col span={4} style={{ backgroundColor: '#201E43', position: 'relative' }}>
        <span style={{ background: '#201E43', display: 'block', textAlign: 'left', paddingLeft: '0.34rem', color: '#F5F4FB', marginTop: '0.255rem', marginBottom: '0.24rem', fontSize: '0.12rem' }}>Integrity</span>
        {/* <span style={{ color: '#727191', position: 'fixed', top: '1.7rem', left: '0.3rem', zIndex: '999' }}>PROFILE</span> */}
      </Col>
      <Col span={20} style={{ backgroundColor: '#0B0A24', position: 'relative' }}>
        <Input
          placeholder={t('layoutTop.Search...')}
          prefix={<SearchOutlined style={{ marginLeft: '0.05rem', marginRight: '0.025rem' }} />}
          style={{ width: '2.915rem', background: '#201E43', outline: 'none', border: 0, color: '#727191', height: '0.24rem', position: 'absolute', top: '0.245rem', left: '0.19rem' }}
        />
        <Language></Language>
        <Button type="link" style={{ position: 'absolute', top: '0.28rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>
          <CreditCardOutlined style={{ marginRight: '-0.02rem' }} />
          {t('layoutTop.Connect a wallet')}
        </Button>
      </Col>
    </Row>
  )
}

export default LayoutTop
