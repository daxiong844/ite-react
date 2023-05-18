import { Avatar, Button, Table } from 'antd'
import { useTranslation } from 'react-i18next'

function DealHistory() {
  const { t } = useTranslation()
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
      title: t('Dashboard.Deposited'),
      dataIndex: 'dashboardDeposited',
      key: 'dashboardDeposited',
      width: '0.5rem',
      align: 'center'
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
      render: (text, record) => {
        switch (record.buttonType) {
          case 'done':
            return (
              <Button className="dealHistoryButton" size="small" style={{ backgroundColor: '#05CD99', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
                {t('Dashboard.Done')}
              </Button>
            )
          case 'doing':
            return (
              <Button className="dealHistoryButton" size="small" style={{ backgroundColor: 'RGBA(136, 90, 248, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
                {t('Dashboard.Doing')}
              </Button>
            )
          case 'ruin':
            return (
              <Button className="dealHistoryButton" size="small" style={{ backgroundColor: 'RGBA(129, 142, 155, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
                {t('Dashboard.Ruin')}
              </Button>
            )
          default:
            return null
        }
      }
    }
  ]

  const data = [
    {
      key: '1',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'done'
    },
    {
      key: '2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'doing'
    },
    {
      key: '3',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'ruin'
    },
    {
      key: '4',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'done'
    },
    {
      key: '5',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'doing'
    },
    {
      key: '6',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'ruin'
    },
    {
      key: '7',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'done'
    },
    {
      key: '8',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'doing'
    },
    {
      key: '9',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'ruin'
    },
    {
      key: '10',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'done'
    },
    {
      key: '11',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'doing'
    },
    {
      key: '12',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'ruin'
    },
    {
      key: '13',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      buttonType: 'done'
    }
    // add more data here
  ]

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}></Table>
}

export default DealHistory
