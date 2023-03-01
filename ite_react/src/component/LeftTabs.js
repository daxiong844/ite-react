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
import ItemCard from './Item'
import DealList from './Deal'

const { TabPane } = Tabs

export default class LeftTabs extends React.Component {
  state = {
    tabPosition: 'left'
  }

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition })
  }

  // activeKey = e => {
  //   console.log(e)
  // }

  render() {
    return (
      <div>
        <Tabs tabPosition={this.state.tabPosition} type="line">
          <TabPane
            tab={
              <span>
                <AppstoreOutlined />
                Dashboard
              </span>
            }
            key="1"
            style={{ backgroundColor: 'red' }}
          >
            Content of Dashboard
            <div style={{ backgroundColor: 'skyblue', display: 'flex', justifyContent: 'space-between', width: '4rem' }}>
              <ItemCard></ItemCard>
              <ItemCard></ItemCard>
              <ItemCard></ItemCard>
            </div>
            <DealList></DealList>
          </TabPane>
          <TabPane
            tab={
              <span>
                <UnorderedListOutlined />
                List
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
                Deal
              </span>
            }
            key="3"
          >
            Content of Deal
          </TabPane>
          <TabPane tab="PROFILE"></TabPane>
          <TabPane
            tab={
              <span>
                <StarOutlined />
                My Portfolio
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
                My Items
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
                My Deal
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
                Airdrop
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
