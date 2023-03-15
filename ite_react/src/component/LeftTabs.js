// import { Tabs } from 'antd'
// import { useState } from 'react'
// const App = () => {
//   const [tabPosition] = useState('left')
//   // const changeTabPosition = e => {
//   //   setTabPosition(e.target.value)
//   // }
//   return (
//     <Tabs
//       tabPosition={tabPosition}
//       items={new Array(8).fill(null).map((_, i) => {
//         const id = String(i + 1)
//         return {
//           label: `Tab ${id}`,
//           key: id,
//           children: `Content of Tab ${id}`
//         }
//       })}
//     />
//   )
// }
// export default App
import { Tabs } from 'antd'
import { AppstoreOutlined, SettingOutlined, StarOutlined, WalletOutlined, UnorderedListOutlined, FileOutlined, FileDoneOutlined } from '@ant-design/icons'
import React from 'react'
import Dashboard from '../menu/Dashboard'
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
                {/* <table className="tableRight">
                  <span style={{ marginRight: '-1rem' }}>|</span>
                </table> */}
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
            Content of List
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
            Content of Deal
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
            Content of My Portfolio
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
            Content of My Items
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
            Content of My Deal
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
            Content of Airdrop
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default LeftTabs = withTranslation()(LeftTabs)
