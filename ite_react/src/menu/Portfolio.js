import { Tabs } from 'antd'
import React from 'react'
import AirdropSetting from '../component/AirdropSetting'
import AirdropDesposit from '../component/AirdropDesposit'
import AirdropEarning from '../component/AirdropEarning'
import { useTranslation } from 'react-i18next'

function Protfolio() {
  const { t } = useTranslation()

  return (
    <Tabs defaultActiveKey="1" className="AirdropTabs">
      <Tabs.TabPane tab={t('Airdrop.Setting')} key="1">
        <AirdropSetting></AirdropSetting>
      </Tabs.TabPane>
      <Tabs.TabPane tab={t('Airdrop.Desposit')} key="2">
        <AirdropDesposit></AirdropDesposit>
      </Tabs.TabPane>
      <Tabs.TabPane tab={t('Airdrop.Earning')} key="3">
        <AirdropEarning></AirdropEarning>
      </Tabs.TabPane>
    </Tabs>
  )
}

export default Protfolio
