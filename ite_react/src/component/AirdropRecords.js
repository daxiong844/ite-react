import { Table } from 'antd'
import { useTranslation } from 'react-i18next'

function AirdropRecords() {
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
      title: t('Airdrop.No'),
      dataIndex: 'No',
      key: 'No',
      align: 'center',
      render: text => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</div>
    },
    {
      title: t('Airdrop.Action'),
      dataIndex: 'Action',
      key: 'Action',
      align: 'center',
      render: text => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</div>
    },
    {
      title: t('Airdrop.Amount'),
      dataIndex: 'Amount',
      key: 'Amount',
      align: 'center',
      render: text => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</div>
    },
    {
      title: t('Airdrop.After Amount'),
      dataIndex: 'AfterAmount',
      key: 'AfterAmount',
      align: 'center',
      render: text => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</div>
    },
    {
      title: t('Airdrop.Time'),
      dataIndex: 'Time',
      key: 'Time',
      align: 'center',
      render: text => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</div>
    }
  ]

  const data = [
    {
      key: '1',
      No: '#00000001892',
      Action: 'deposited',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    },
    {
      key: '2',
      No: '#00000001892',
      Action: 'locked',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    },
    {
      key: '3',
      No: '#00000001892',
      Action: 'unlocked',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    },
    {
      key: '4',
      No: '#00000001892',
      Action: 'withdraw',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    },
    {
      key: '5',
      No: '#00000001892',
      Action: 'deposited',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    },
    {
      key: '6',
      No: '#00000001892',
      Action: 'locked',
      Amount: '1 000 000 USDT',
      AfterAmount: '20000005 USDT',
      Time: '01/02/03 10:11:11'
    }

    // add more data here
  ]

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} style={{ marginTop: '0.5rem', width: '5.46rem', borderRadius: '0.1rem', background: '#201E43', fontSize: '0.07rem', padding: '0.08rem' }}></Table>
}

export default AirdropRecords
