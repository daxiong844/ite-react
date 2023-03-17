import { Button, Table } from 'antd'
import { useTranslation } from 'react-i18next'
import NumberInput from './NumberInput'

function TrendingItem() {
  const { t } = useTranslation()
  const columns = [
    {
      title: t('List.No'),
      dataIndex: 'No',
      key: 'No',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemNo'
      // render: (text, record) => (
      //   <div style={{ height: '0.15rem' }}>
      //     <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar1} />
      //   </div>
      // )
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
      className: 'TrendingItemDeposited',
      render: (text, record) => <NumberInput></NumberInput>
    },
    {
      title: t('Deal.Time'),
      dataIndex: 'dealTime',
      key: 'dealTime',
      align: 'center'
    },
    {
      title: t('List.Surplus Times'),
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
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem', borderColor: '#fff' }}>
            {t('List.Edit')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem' }}>
            {t('List.Deal')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: 'rgba(121, 120, 141, 1)', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.0942rem', borderColor: 'rgba(121, 120, 141, 1)' }}>
            {t('List.Del')}
          </Button>
        </div>
      )
    }
  ]

  const data = [
    {
      key: '1',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '2',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '3',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '4',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '5',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '6',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '7',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '8',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '9',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '10',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '11',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '12',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    },
    {
      key: '13',
      No: '#A0D18TD2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5USDT',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    }
    // add more data here
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: record => ({
      // Column configuration not to be checked
      name: record.name
    })
  }

  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 8 }} style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}></Table>
}

export default TrendingItem
