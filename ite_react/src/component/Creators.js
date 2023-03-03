import { Card, Button, Avatar } from 'antd'
import { useTranslation } from 'react-i18next'

function CreatorsCard() {
  const { t } = useTranslation()
  return (
    <Card
      style={{
        width: '1.6rem',
        height: '1.7rem',
        backgroundColor: '#201E43',
        border: 'none',
        borderRadius: '0.1rem'
      }}
    >
      <div className="earningTop" style={{ height: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.05rem' }}>
        <p style={{ color: '#ECEBF6', fontSize: '0.1rem' }}>{t('Dashboard.Top Creators')}</p>
        <Button type="link" style={{ color: 'rgba(207,203,230,0.62)', fontSize: '0.07rem', marginRight: '0.1rem' }}>
          {t('Dashboard.See all')}
        </Button>
      </div>
      <div style={{ width: '1.34rem', height: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.1rem' }}>
        <Avatar style={{ width: '0.25rem', height: '0.25rem', marginLeft: '0rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
        <div style={{ marginLeft: '-0.3rem' }}>
          <p style={{ color: 'rgba(236, 235, 246, 1)', fontSize: '0.07rem', marginTop: '0.06rem' }}>Joe Yates</p>
          <p style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '0.05rem', marginTop: '-0.08rem' }}>@joe-y25</p>
        </div>
        <Button style={{ width: '0.4rem', color: 'rgba(205, 198, 249, 1)', fontSize: '0.06rem', backgroundColor: 'rgba(130, 112, 235, 0.20)', border: 'none' }}>{t('Dashboard.Follow')}</Button>
      </div>
      <div style={{ width: '1.34rem', height: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.1rem' }}>
        <Avatar style={{ width: '0.25rem', height: '0.25rem', marginLeft: '0rem' }} src="https://ipfs.io/ipfs/QmQ6VgRFiVTdKbiebxGvhW3Wa3Lkhpe6SkWBPjGnPkTttS/1484.png" />
        <div style={{ marginLeft: '-0.3rem' }}>
          <p style={{ color: 'rgba(236, 235, 246, 1)', fontSize: '0.07rem', marginTop: '0.06rem' }}>Joe Yates</p>
          <p style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '0.05rem', marginTop: '-0.08rem' }}>@joe-y25</p>
        </div>
        <Button style={{ width: '0.4rem', color: 'rgba(205, 198, 249, 1)', fontSize: '0.06rem', backgroundColor: 'rgba(130, 112, 235, 0.20)', border: 'none' }}>{t('Dashboard.Follow')}</Button>
      </div>
      <div style={{ width: '1.34rem', height: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.1rem' }}>
        <Avatar style={{ width: '0.25rem', height: '0.25rem', marginLeft: '0rem' }} src="https://i01piccdn.sogoucdn.com/073414785ce5856c" />
        <div style={{ marginLeft: '-0.3rem' }}>
          <p style={{ color: 'rgba(236, 235, 246, 1)', fontSize: '0.07rem', marginTop: '0.06rem' }}>Joe Yates</p>
          <p style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '0.05rem', marginTop: '-0.08rem' }}>@joe-y25</p>
        </div>
        <Button style={{ width: '0.4rem', color: 'rgba(205, 198, 249, 1)', fontSize: '0.06rem', backgroundColor: 'rgba(130, 112, 235, 0.20)', border: 'none' }}>{t('Dashboard.Follow')}</Button>
      </div>
      <div style={{ width: '1.34rem', height: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.1rem' }}>
        <Avatar style={{ width: '0.25rem', height: '0.25rem', marginLeft: '0rem' }} src="https://i01piccdn.sogoucdn.com/2cfa0c4ddb3b244d" />
        <div style={{ marginLeft: '-0.3rem' }}>
          <p style={{ color: 'rgba(236, 235, 246, 1)', fontSize: '0.07rem', marginTop: '0.06rem' }}>Joe Yates</p>
          <p style={{ color: 'rgba(236, 235, 246, 0.62)', fontSize: '0.05rem', marginTop: '-0.08rem' }}>@joe-y25</p>
        </div>
        <Button style={{ width: '0.4rem', color: 'rgba(205, 198, 249, 1)', fontSize: '0.06rem', backgroundColor: 'rgba(130, 112, 235, 0.20)', border: 'none' }}>{t('Dashboard.Follow')}</Button>
      </div>
    </Card>
  )
}
export default CreatorsCard
