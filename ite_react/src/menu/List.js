import React from 'react'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'
import CreateTag from '../component/CreateTag'
import TrendingItem from '../component/TrendingItem'
import { Col, Row } from 'antd'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTag: null
    }
  }

  handleTagClick = tag => {
    this.setState({ selectedTag: tag })
  }
  render() {
    const { t } = this.props
    const { selectedTag } = this.state

    return (
      <>
        <Row>
          <Col span={24}>
            <div className="DealContent" style={{ marginLeft: '0.06rem', position: 'relative' }}>
              <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem', display: 'block', marginBottom: '0.1rem' }}>{t('Dashboard.Trending Item')}</span>
              <CreateTag onTagClick={this.handleTagClick}></CreateTag>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="DealContent" style={{ marginLeft: '0.06rem', position: 'relative' }}>
              <TrendingItem selectedTag={selectedTag}></TrendingItem>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default List = withTranslation()(List)
