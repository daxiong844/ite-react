import React from 'react'
import DealHistoryTwo from '../component/DealHistoryTwo'
import DealHistoryTwoTag from '../component/DealHistoryTwoTag'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'

class Deal extends React.Component {
  render() {
    const { t } = this.props

    return (
      <>
        <div className="DealContent" style={{ marginLeft: '0.06rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem' }}>{t('Deal.Deal History')}</span>
          <DealHistoryTwoTag></DealHistoryTwoTag>
        </div>
        <DealHistoryTwo></DealHistoryTwo>
      </>
    )
  }
}

export default Deal = withTranslation()(Deal)
