import { Card, Button } from 'antd'
const EarningCard = () => (
  <Card
    style={{
      width: '1.6rem',
      height: '1.95rem',
      backgroundColor: '#201E43',
      border: 'none',
      borderRadius: '0.1rem'
    }}
  >
    <div className="earningTop" style={{ height: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.05rem' }}>
      <p style={{ color: '#ECEBF6', fontSize: '0.1rem' }}>Earning</p>
      <Button type="link" style={{ color: 'rgba(207,203,230,0.62)', fontSize: '0.07rem', marginRight: '0.1rem' }}>
        See all
      </Button>
    </div>
    <div className="earningMiddle" style={{ paddingLeft: '0.1rem', position: 'relative', marginTop: '0rem' }}>
      <div style={{ position: 'absolute', top: '0.1rem' }}>
        <p style={{ color: '#ECEBF6', fontSize: '0.08rem', marginBottom: '-0.15rem' }}>Your Earning</p>
        <p style={{ color: '#ECEBF6', fontSize: '0.12rem' }}>0 ITE</p>
      </div>
      <Button style={{ position: 'absolute', top: '0.55rem', width: '1.15rem', height: '0.2rem', backgroundColor: '#fff', color: 'RGBA(137, 137, 140, 1)', fontSize: '0.07rem', border: 'none' }}>Withdraw</Button>
    </div>
    <Button style={{ marginTop: '0.18rem', width: '1.34rem', height: '0.25rem', border: 'none', borderRadius: '0.04rem', color: 'RGBA(24, 112, 248, 1)', fontSize: '0.08rem' }}>NEW ITEM</Button>
  </Card>
)
export default EarningCard
