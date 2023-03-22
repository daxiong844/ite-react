import React from 'react'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'
import CreateTag from '../component/CreateTag'
import MyTrendingItem from '../component/MyTrendingItem'

class List extends React.Component {
  render() {
    const { t } = this.props
    return (
      <div className="DealContent" style={{ marginLeft: '0.06rem', position: 'relative' }}>
        <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem', display: 'block', marginBottom: '0.1rem' }}>{t('Dashboard.Trending Item')}</span>
        <CreateTag></CreateTag>
        <MyTrendingItem></MyTrendingItem>
      </div>
    )
  }
}

export default List = withTranslation()(List)
