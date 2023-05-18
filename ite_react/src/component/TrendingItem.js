import { Button, Table, Avatar, Modal, Tag, Timeline, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import React from 'react'
import { Col, Row } from 'antd'
import { TrophyFilled, CrownFilled, EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'

function TrendingItem() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isview, SetIsview] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

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
  const handleRowClick = record => {
    setSelectedRow(record.key)
    showModal()
  }

  const columns = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      width: '0.1rem',
      align: 'center',
      render: (text, record, index) => index + 1
    },
    {
      title: t('List.Who'),
      dataIndex: 'Who',
      key: 'Who',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemWho',
      render: (text, record) => (
        <div style={{ height: '0.15rem' }}>
          <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar1} />
        </div>
      )
    },
    {
      title: t('Dashboard.Need'),
      dataIndex: 'dashboardNeed',
      key: 'dashboardNeed',
      width: '1.1rem',
      align: 'center'
    },
    {
      title: t('Dashboard.Provide'),
      dataIndex: 'dashboardProvide',
      key: 'dashboardProvide',
      width: '1.1rem',
      align: 'center'
    },
    {
      title: t('Dashboard.Deposited'),
      dataIndex: 'dashboardDeposited',
      key: 'dashboardDeposited',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemDeposited'
    },

    {
      title: t('Deal.Time'),
      dataIndex: 'dealTime',
      key: 'dealTime',
      align: 'center'
    },
    {
      title: t('List.Location'),
      dataIndex: 'dealLocation',
      key: 'dealLocation',
      align: 'center'
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '0.1rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" style={{ backgroundColor: 'RGBA(122, 65, 252, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', border: '0', marginRight: '0.04rem', borderColor: '#fff' }}>
            {t('List.accept')}
          </Button>
        </div>
      )
    }
  ]

  const [data] = useState([
    {
      key: '1',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '3',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '4',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '5',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '6',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '7',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '8',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '9',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '10',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '11',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '12',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    },
    {
      key: '13',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: 'shijiazhuang hebei China'
    }
    // add more data here
  ])

  return (
    <Row>
      <Col span={24}>
        {' '}
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 8 }}
          style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}
          rowClassName={record => (record.key === selectedRow ? 'selected-row' : '')}
          onRow={record => ({
            onClick: () => handleRowClick(record)
          })}
        />
      </Col>
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
        <span style={{ color: 'RGBA(210, 210, 212, 1)', position: 'relative', top: '0.55rem', left: '-2.5rem', fontWeight: '700', marginLeft: '0.08rem', marginTop: '0.05rem' }}>{t('Portfolio.ACTIVITY')}</span>
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
    </Row>
  )
}

export default TrendingItem

// import { Button, Table, Modal, Tag } from 'antd'
// import { useTranslation } from 'react-i18next'
// import { useState } from 'react'
// import React from 'react'
// import { Col, Row } from 'antd'
// import { TrophyFilled } from '@ant-design/icons'

// function TrendingItem() {
//   const { t } = useTranslation()
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedRow, setSelectedRow] = useState(null)

//   const showModal = () => {
//     setIsModalOpen(true)
//   }
//   const handleOk = () => {
//     setIsModalOpen(false)
//   }
//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }
//   const handleRowClick = record => {
//     setSelectedRow(record.key)
//     showModal()
//   }

//   const columns = [
//     {
//       title: '',
//       dataIndex: 'index',
//       key: 'index',
//       width: '0.1rem',
//       align: 'center',
//       render: (text, record, index) => index + 1
//     },
//     {
//       title: '',
//       dataIndex: 'action',
//       key: 'action',
//       width: '0.1rem',
//       align: 'center',
//       render: (text, record) => (
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button size="small" style={{ backgroundColor: 'RGBA(122, 65, 252, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', border: '0', marginRight: '0.04rem', borderColor: '#fff' }} onClick={() => handleRowClick(record)}>
//             {t('List.accept')}
//           </Button>
//         </div>
//       )
//     }
//   ]

//   const [data] = useState([
//     {
//       key: '1'
//     },
//     {
//       key: '2'
//     }
//   ])

//   return (
//     <Row>
//       <Col span={24}>
//         {' '}
//         <Table
//           columns={columns}
//           dataSource={data}
//           pagination={{ pageSize: 8 }}
//           style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}
//           rowClassName={record => (record.key === selectedRow ? 'selected-row' : '')}
//           onRow={record => ({
//             onClick: () => handleRowClick(record)
//           })}
//         />
//       </Col>
//       <Modal className="PortfolioModal" title={t('Portfolio.Social Posting Bounty')} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
//         <Tag icon={<TrophyFilled />} color="#55acee" style={{ backgroundColor: 'RGBA(215, 161, 58, 1)', width: '0.6rem', marginTop: '0.06rem' }}>
//           Twitter
//         </Tag>
//       </Modal>
//     </Row>
//   )
// }

// export default TrendingItem
