import React from 'react'
import { Col, Row, Input } from 'antd'
import Language from './Language'
import { SearchOutlined } from '@ant-design/icons'

function LayoutTop() {
  return (
    <Row>
      <Col span={4} style={{ backgroundColor: '#201E43' }}>
        <span style={{ background: '#201E43', display: 'block', textAlign: 'left', paddingLeft: '0.34rem', color: '#F5F4FB', marginTop: '0.255rem', marginBottom: '0.24rem', fontSize: '0.12rem' }}>Integrity</span>
        {/* <span style={{ background: '#201E43', display: 'block', textAlign: 'left', paddingLeft: '0.14rem', color: 'rgba(114,113,145,0.76)', marginTop: '0.24rem', marginBottom: '0.125rem' }}>PROFILE</span> */}
      </Col>
      <Col span={20} style={{ backgroundColor: '#0B0A24' }}>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined style={{ marginLeft: '0.05rem', marginRight: '0.025rem' }} />}
          style={{ width: '2.915rem', background: '#201E43', outline: 'none', border: 0, color: '#727191', marginRight: '0.795rem', marginLeft: '0.36rem', height: '0.24rem', marginTop: '0.245rem' }}
        />
        <Language></Language>
      </Col>
    </Row>
  )
}

export default LayoutTop
