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
import React from 'react'

const { TabPane } = Tabs

export default class LeftTabs extends React.Component {
  state = {
    tabPosition: 'left'
  }

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition })
  }

  onTabClick = e => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Dashboard" key="1">
            Content of Dashboard
          </TabPane>
          <TabPane tab="List" key="2">
            Content of List
          </TabPane>
          <TabPane tab="Deal" key="3">
            Content of Deal
          </TabPane>
          <TabPane tab="PROFILE"></TabPane>
          <TabPane tab="My Portfolio" key="4">
            Content of My Portfolio
          </TabPane>
          <TabPane tab="My Items" key="5">
            Content of My Items
          </TabPane>
          <TabPane tab="My Deal" key="6">
            Content of My Deal
          </TabPane>
          <TabPane tab="Airdrop" key="7">
            Content of Airdrop
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
