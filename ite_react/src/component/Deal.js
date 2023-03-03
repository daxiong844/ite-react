import { Avatar, Button } from 'antd'
import { useTranslation } from 'react-i18next'

function DealList() {
  const { t } = useTranslation()
  return (
    <table style={{ position: 'relative', marginTop: '0.07rem', width: '4rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}>
      <thead>
        <tr>
          <th></th>
          <th
            style={{
              color: 'rgba(236,235,246,0.62)'
            }}
          >
            {t('Dashboard.Who')}
          </th>
          <th
            style={{
              color: 'rgba(236,235,246,0.62)'
            }}
          >
            {t('Dashboard.Need')}
          </th>
          <th
            style={{
              color: 'rgba(236,235,246,0.62)'
            }}
          >
            {t('Dashboard.Provide')}
          </th>
          <th
            style={{
              color: 'rgba(236,235,246,0.62)'
            }}
          >
            {t('Dashboard.Deposited')}
          </th>
          <th></th>
        </tr>
      </thead>
      <hr style={{ position: 'absolute', top: '0.18rem', left: '0.1rem', width: '3.8rem', color: 'red', background: '#030229', height: '0.01rem', opacity: '0.08', border: 'none' }} />
      <tbody style={{ cursor: 'pointer' }}>
        <tr>
          <td style={{ width: '0.1rem', height: '0.25rem' }}>1</td>
          <td style={{ width: '0.4rem', height: '0.25rem' }}>
            <div style={{ height: '0.15rem' }}>
              <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
              <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/5f54b8b788776e92" />
            </div>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>I want a basketball, like myco jodon...</span>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>i will provide a baseball. just you see...</span>
          </td>
          <td style={{ width: '0.5rem', height: '0.25rem' }}>10.5USDT</td>
          <td>
            <Button size="small" style={{ backgroundColor: '#05CD99', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
              {t('Dashboard.Done')}
            </Button>
          </td>
        </tr>
      </tbody>
      <tbody style={{ cursor: 'pointer' }}>
        <tr>
          <td style={{ width: '0.1rem', height: '0.25rem' }}>2</td>
          <td style={{ width: '0.4rem', height: '0.25rem' }}>
            <div style={{ height: '0.15rem' }}>
              <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
              <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/5f54b8b788776e92" />
            </div>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>I want a basketball, like myco jodon...</span>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>i will provide a baseball. just you see...</span>
          </td>
          <td style={{ width: '0.5rem', height: '0.25rem' }}>10.5USDT</td>
          <td>
            <Button size="small" style={{ backgroundColor: '#5639FF', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
              {t('Dashboard.Doing')}
            </Button>
          </td>
        </tr>
      </tbody>
      <tbody style={{ cursor: 'pointer' }}>
        <tr>
          <td style={{ width: '0.1rem', height: '0.25rem' }}>3</td>
          <td style={{ width: '0.4rem', height: '0.25rem' }}>
            <div style={{ height: '0.15rem' }}>
              <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
              <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/5f54b8b788776e92" />
            </div>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>I want a basketball, like myco jodon...</span>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>i will provide a baseball. just you see...</span>
          </td>
          <td style={{ width: '0.5rem', height: '0.25rem' }}>10.5USDT</td>
          <td>
            {' '}
            <Button size="small" style={{ backgroundColor: '#05CD99', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
              {t('Dashboard.Done')}
            </Button>
          </td>
        </tr>
      </tbody>
      <tbody style={{ cursor: 'pointer' }}>
        <tr>
          <td style={{ width: '0.1rem', height: '0.25rem' }}>4</td>
          <td style={{ width: '0.4rem', height: '0.25rem' }}>
            <div style={{ height: '0.15rem' }}>
              <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
              <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src="https://i03piccdn.sogoucdn.com/5f54b8b788776e92" />
            </div>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>I want a basketball, like myco jodon...</span>
          </td>
          <td style={{ width: '1.1rem' }}>
            <span style={{ display: 'block', width: '0.8rem', textAlign: 'left', marginLeft: '0.15rem' }}>i will provide a baseball. just you see...</span>
          </td>
          <td style={{ width: '0.5rem', height: '0.25rem' }}>10.5USDT</td>
          <td>
            <Button size="small" style={{ backgroundColor: '#5639FF', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }}>
              {t('Dashboard.Doing')}
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DealList
