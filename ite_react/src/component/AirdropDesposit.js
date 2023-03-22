import { Statistic, Card, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import AirdropRecords from './AirdropRecords'
import { useTranslation } from 'react-i18next'

function AirdropDesposit() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="AirDropDesposit" style={{ backgroundColor: 'RGBA(32, 30, 68, 1)', border: '0', width: '5.46rem', height: '1.55rem', borderRadius: '0.1rem', marginTop: '0rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Your Total Desposit')} value={100000000} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }}>{t('Airdrop.Add')}</Button>
        </Card>
        <Card className="AirDropDespositCardTwo" style={{ width: '1.3rem', height: '0.9rem' }}>
          <QuestionCircleOutlined style={{ color: 'RGBA(166, 57, 176, 1)', position: 'absolute', top: '0.15rem', left: '0.65rem' }} />
          <Statistic title={t('Airdrop.Lock Desposit')} value={100000000} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
        </Card>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Unlock Desposit')} value={100000000} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }}>{t('Airdrop.Withdraw')}</Button>
        </Card>
      </div>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '-0.3rem' }}>{t('Airdrop.Info')}</span>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '1.75rem' }}>{t('Airdrop.Records')}</span>
      <AirdropRecords></AirdropRecords>
    </div>
  )
}

export default AirdropDesposit
