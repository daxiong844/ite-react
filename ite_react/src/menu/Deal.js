import React from 'react'
import DealHistoryTwo from '../component/DealHistoryTwo'
import DealHistoryTwoTag from '../component/DealHistoryTwoTag'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'

class Deal extends React.Component {
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
        <div className="DealContent" style={{ marginLeft: '0.06rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem' }}>{t('Deal.Deal History')}</span>
          <DealHistoryTwoTag onTagClick={this.handleTagClick}></DealHistoryTwoTag>
        </div>
        <DealHistoryTwo selectedTag={selectedTag}></DealHistoryTwo>
      </>
    )
  }
}

export default Deal = withTranslation()(Deal)
