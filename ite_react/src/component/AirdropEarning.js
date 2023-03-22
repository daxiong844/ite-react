import { Statistic, Card, Button } from 'antd'
import AirdropRecordsEarning from './AirdropRecordsEarning'
import { useTranslation } from 'react-i18next'

function AirdropEarning() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="AirDropDesposit" style={{ backgroundColor: 'RGBA(32, 30, 68, 1)', border: '0', width: '5.46rem', height: '1.55rem', borderRadius: '0.1rem', marginTop: '0rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Total Earning of Ite')} value={100000000} suffix="Ite" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }}>{t('Airdrop.Withdraw')}</Button>
        </Card>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Total Earning of USDT')} value={100000000} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }}>{t('Airdrop.Withdraw')}</Button>
        </Card>
        <Card style={{ width: '1.3rem', height: '0.9rem', opacity: '0' }}></Card>
      </div>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '1.75rem' }}>{t('Airdrop.Records')}</span>
      <AirdropRecordsEarning></AirdropRecordsEarning>
    </div>
  )
}

export default AirdropEarning
