import { Tabs } from 'antd'
import { AppstoreOutlined, SettingOutlined, StarOutlined, WalletOutlined, UnorderedListOutlined, FileOutlined, FileDoneOutlined } from '@ant-design/icons'
import React from 'react'
import Dashboard from '../menu/Dashboard'
import Deal from '../menu/Deal'
import List from '../menu/List'
import MyDeal from '../menu/MyDeal'
import MyItem from '../menu/MyItem'
import Airdrop from '../menu/Airdrop'
import ModalBounty from '../menu/Portfolio'
// 引入HOC高阶函数withTranslation 和 i18n的ts类型定义WithTranslation
import { withTranslation } from 'react-i18next'

const { TabPane } = Tabs

class LeftTabs extends React.Component {
  state = {
    tabPosition: 'left'
  }

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition })
  }

  activeKey = e => {
    console.log(e)
  }

  render() {
    const { t } = this.props

    return (
      <div style={{ position: 'relative' }}>
        <Tabs tabPosition={this.state.tabPosition} type="line" tabBarStyle={{ position: 'relative' }}>
          <TabPane
            tab={
              <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AppstoreOutlined />
                {t('menuLeft.Dashboard')}
              </span>
            }
            key="1"
            style={{ position: 'relative' }}
          >
            <Dashboard></Dashboard>
          </TabPane>
          <TabPane
            tab={
              <span>
                <UnorderedListOutlined />
                {t('menuLeft.List')}
              </span>
            }
            key="2"
          >
            <List></List>
          </TabPane>
          <TabPane
            tab={
              <span>
                <FileDoneOutlined />
                {t('menuLeft.Deal')}
              </span>
            }
            key="3"
          >
            <Deal></Deal>
          </TabPane>
          <Tabs disabled tab={t('menuLeft.PROFILE')}></Tabs>
          <TabPane
            tab={
              <span>
                <StarOutlined />
                {t('menuLeft.My Portfolio')}
              </span>
            }
            key="4"
          >
            <ModalBounty></ModalBounty>
          </TabPane>
          <TabPane
            tab={
              <span>
                <FileOutlined />
                {t('menuLeft.My Items')}
              </span>
            }
            key="5"
          >
            <MyItem></MyItem>
          </TabPane>
          <TabPane
            tab={
              <span>
                <WalletOutlined />
                {t('menuLeft.My Deal')}
              </span>
            }
            key="6"
          >
            <MyDeal></MyDeal>
          </TabPane>
          <TabPane
            tab={
              <span>
                <SettingOutlined />
                {t('menuLeft.Airdrop')}
              </span>
            }
            key="7"
          >
            <Airdrop></Airdrop>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default LeftTabs = withTranslation()(LeftTabs)
