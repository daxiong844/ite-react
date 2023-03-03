import { Button } from 'antd'
import React from 'react'
import ItemCard from '../component/Item'
import DealList from '../component/Deal'
import EarningCard from '../component/Earning'
import CreatorsCard from '../component/Creators'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'

class Dashboard extends React.Component {
  render() {
    const { t } = this.props
    return (
      <div className="DashboardContent" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="DashboardLeftContent" style={{ marginLeft: '-0.2rem' }}>
          <div style={{ width: '4rem', display: 'flex', justifyContent: 'space-between', marginBottom: '0.06rem' }}>
            <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem' }}>{t('Dashboard.Trending Item')}</span>
            <div style={{ width: '1.7rem', textAlign: 'right', marginRight: '-0.06rem', paddingTop: '0.02rem' }}>
              <Button type="link" style={{ color: 'rgba(183, 171, 255, 1)', fontSize: '9px' }}>
                C2c
              </Button>
              <Button type="link" style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '9px' }}>
                {t('Dashboard.Music')}
              </Button>
              <Button type="link" style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '9px' }}>
                {t('Dashboard.Collectibles')}
              </Button>
              <Button type="link" style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '9px' }}>
                {t('Dashboard.See more')}
                <hr style={{ marginTop: '-0.02rem', width: '0.3rem', color: 'rgba(236, 235, 246, 0.62)', background: 'rgba(236, 235, 246, 0.62)', height: '0.001rem', border: 'none' }} />
              </Button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '4rem' }}>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
          </div>
          <div style={{ marginTop: '0.21rem', width: '4rem', display: 'flex', justifyContent: 'space-between', marginBottom: '0.06rem' }}>
            <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.12rem' }}>{t('Dashboard.Top Deal')}</span>
            <div style={{ width: '1.7rem', textAlign: 'right', marginRight: '-0.06rem', paddingTop: '0.02rem' }}>
              <Button type="link" style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '9px' }}>
                {t('Dashboard.See more')}
              </Button>
            </div>
          </div>
          <DealList></DealList>
        </div>
        <div className="DashboardRightContent">
          <div style={{ marginTop: '-0.05rem' }}>
            <EarningCard></EarningCard>
          </div>
          <div style={{ marginTop: '0.16rem' }}>
            <CreatorsCard></CreatorsCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard = withTranslation()(Dashboard)
