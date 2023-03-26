import { Button, Modal, Tag, Timeline, Avatar, Input } from 'antd'
import { TrophyFilled, CrownFilled, EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ModalBounty = () => {
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isview, SetIsview] = useState(false)

  // const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.']

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const viewClick = () => {
    if (isview) {
      SetIsview(false)
    } else {
      SetIsview(true)
    }
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal className="PortfolioModal" title={t('Portfolio.Social Posting Bounty')} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Tag icon={<TrophyFilled />} color="#55acee" style={{ backgroundColor: 'RGBA(215, 161, 58, 1)', width: '0.6rem', marginTop: '0.06rem' }}>
          Twitter
        </Tag>
        <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.2rem', backgroundColor: 'RGBA(136, 104, 34, 1)', position: 'absolute', left: '0.53rem', top: '0.355rem' }}>
          10
        </Tag>
        <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.5rem', backgroundColor: 'RGBA(255, 255, 255, 1)', color: '#000' }}>
          $20 in UDO
        </Tag>
        {!isview ? (
          <div className="PortfolioTextOne" style={{ paddingLeft: '0.08rem' }}>
            <p style={{ color: '#fff' }}>Task Detial</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
            <p style={{ color: '#fff' }}>Delivery&Application</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
          </div>
        ) : (
          <div className="PortfolioTextTwo" style={{ paddingLeft: '0.08rem' }}>
            <p style={{ color: '#fff' }}>Task Detial</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
            <p style={{ color: '#fff' }}>Delivery&Application</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
          </div>
        )}
        <Button style={{ backgroundColor: 'RGBA(29, 29, 39, 1)', border: '0', color: 'RGBA(133, 134, 137, 1)', marginLeft: '2rem' }} onClick={viewClick}>
          {t('Portfolio.View more...')}
        </Button>
        <div style={{ position: 'absolute', left: '0.2rem', marginTop: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Button style={{ backgroundColor: 'RGBA(134, 113, 228, 1)', border: '0', color: '#fff', borderRadius: '0.02rem' }}>
            {' '}
            <EditOutlined style={{ marginLeft: '-0.01rem' }} />
            {t('Portfolio.Submit Work')}
          </Button>
          <InstagramFilled style={{ color: 'RGBA(88, 101, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
          <TwitterOutlined style={{ color: 'RGBA(29, 161, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
        </div>
        {/* <List
          size="small"
          style={{ marginTop: '0.4rem' }}
          header={<div style={{ color: 'RGBA(210, 210, 212, 1)', fontWeight: '700', marginLeft: '0.08rem' }}>ACTIVITY</div>}
          dataSource={data}
          renderItem={item => (
            <List.Item style={{ color: 'RGBA(210, 210, 212, 1)', border: '0', display: 'flex' }}>
              {item} <div>Apr 25, 2022 4 25</div>
            </List.Item>
          )}
        /> */}
        <span style={{ color: 'RGBA(210, 210, 212, 1)', position: 'absolute', top: '2rem', left: '0.15rem', fontWeight: '700', marginLeft: '0.08rem', marginTop: '0.05rem' }}>{t('Portfolio.ACTIVITY')}</span>
        <Timeline
          style={{ marginTop: '0.6rem', marginLeft: '0.15rem', color: 'RGBA(206, 206, 209, 1)' }}
          items={[
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ width: '4.25rem', marginLeft: '0.1rem', height: '0.2rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Idun created this task</span>
                  <span>Feb 17, 2023 5:50 PM</span>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.4rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>kingweekend</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    4 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>can i work on this</p>
                  <p style={{ marginTop: '-0.08rem', color: 'RGBA(69, 181, 248, 1)' }}>@ifun</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.3rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>Deimos|Breakda</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    4 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>done</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.3rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>amosjvd</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    2 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>Submitted</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <>
                  <Input placeholder={t('Portfolio.Write a comment...')} style={{ background: 'RGBA(43, 44, 56, 1)', border: '0', marginLeft: '0.1rem', padding: '0.05rem', width: '4.25rem', height: '0.45rem', borderRadius: '0.03rem', paddingBottom: '0.25rem', color: '#fff' }} />
                </>
              )
            }
          ]}
        />
      </Modal>
    </>
  )
}
export default ModalBounty
