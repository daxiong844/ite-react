import { Avatar, Button, Table } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function DealHistoryTwo() {
  const { t } = useTranslation()

  const handleAgree = record => {
    const updatedData = data.map(d => {
      if (d.key === record.key) {
        return {
          ...d,
          dashboardStatus: 'waiting you carry out'
        }
      }
      return d
    })
    setData(updatedData)
  }

  const handleUnagree = record => {
    const updatedData = data.map(d => {
      if (d.key === record.key) {
        return {
          ...d,
          dashboardStatus: 'waiting others carry out'
        }
      }
      return d
    })
    setData(updatedData)
  }

  const handleCarryOut = record => {
    const updatedData = data.map(d => {
      if (d.key === record.key) {
        return {
          ...d,
          dashboardStatus: 'others apply for cancel'
        }
      }
      return d
    })
    setData(updatedData)
  }

  const handleCancel = record => {
    const updatedData = data.map(d => {
      if (d.key === record.key) {
        return {
          ...d,
          dashboardStatus: 'Cancel'
        }
      }
      return d
    })
    setData(updatedData)
  }

  const handleRuin = record => {
    const updatedData = data.map(d => {
      if (d.key === record.key) {
        return {
          ...d,
          dashboardStatus: 'Ruind'
        }
      }
      return d
    })
    setData(updatedData)
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
      title: t('Dashboard.Who'),
      dataIndex: 'who',
      key: 'who',
      width: '0.5rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ height: '0.15rem' }}>
          <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar1} />
          <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar2} />
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
      title: t('DealHistoryTwo.Status'),
      dataIndex: 'dashboardStatus',
      key: 'dashboardStatus',
      width: '0.5rem',
      align: 'center',
      className: 'DealHistoryTwoStatus'
    },
    {
      title: t('Deal.Time'),
      dataIndex: 'dealTime',
      key: 'dealTime',
      align: 'center'
    },
    {
      title: t('Deal.Earning'),
      dataIndex: 'dealEarning',
      key: 'dealEarning',
      align: 'center'
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '0.1rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ display: 'flex' }}>
          <Button size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleAgree(record)}>
            {t('DealHistoryTwo.Agree')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleUnagree(record)}>
            {t('DealHistoryTwo.Unagree')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleCarryOut(record)}>
            {t('DealHistoryTwo.carry out')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(136, 90, 248, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleCancel(record)}>
            {t('DealHistoryTwo.Cancel')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(129, 142, 155, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }} onClick={() => handleRuin(record)}>
            {t('DealHistoryTwo.Ruin')}
          </Button>
        </div>
      )
    }
  ]

  const [data, setData] = useState([
    {
      key: '1',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'waiting you carry out',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'waiting others carry out',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '3',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'Done',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '4',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'others apply for cancel',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '5',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'Cancel',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '6',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'Ruind',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '7',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'others unagree cancel',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '8',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: 'others apply for cancel',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '9',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '10',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '10.5 USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '11',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '12',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    },
    {
      key: '13',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite'
    }
    // add more data here
  ])

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}></Table>
}

export default DealHistoryTwo
