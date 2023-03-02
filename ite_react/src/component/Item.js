import { Card, Avatar } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

const { Meta } = Card
const ItemCard = () => (
  <Card
    hoverable
    style={{
      width: '1.26rem',
      height: '1.645rem',
      backgroundColor: '#201E43',
      borderColor: '#201E43',
      position: 'relative',
      borderRadius: '0.08rem'
    }}
    cover={<img alt="example" src="https://photo69.mac89.com/2019/05/27/JPG-190527_12/7fvyidEiH8_small.jpg" style={{ width: '1.165rem', height: '0.595rem', borderBottomLeftRadius: '0.05rem', borderBottomRightRadius: '0.05rem', marginLeft: '0.0475rem', marginTop: '0.03rem' }} />}
  >
    <Meta
      avatar={<Avatar src="https://static.foodtalks.cn/image/post/b303adcc37c86e8d65785464c4b514d48a37.jpg" />}
      title="Abstrac Girl"
      // description="I will provide a baseball, and i Want a baskerball. Do you understant my mean. If you accept the i will first lvyue, hope you honers, do think same as me. you are well goods......"
      style={{ position: 'absolute', top: '0.68rem', left: '0rem' }}
    />
    <span className="content" style={{ position: 'absolute', top: '0.8rem', left: '0.075rem', width: '1.1rem', height: '0.65rem', color: '#817D7D', fontSize: '0.07rem' }}>
      I will provide a baseball, and i Want a baskerball. Do you understant my mean. If you accept the i will first lvyue, hope you honers, do think same as me. you are well goods.I will provide a baseball, and i Want a baskerball. Do you understant my mean. If you accept the i will first lvyue,
      hope you honers, do think same as me. you are well goods.
    </span>
    <div style={{ position: 'absolute', top: '1.48rem', left: '0.05rem', width: '1.15rem', height: '0.14rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: '#ECEBF6', fontSize: '0.06rem' }}>Deposited</span>
      <span style={{ color: '#B7ABFF', fontSize: '0.07rem' }}>0.99 USDT</span>
      <span style={{ color: '#D3D1E0', fontsize: '0.05rem' }}>3 day left</span>
    </div>
    <span className="contentTop" style={{ position: 'absolute', top: '0.18rem', left: '0.22rem', width: '0.8rem', height: '0.3rem', color: '#fff', fontSize: '0.09rem' }}>
      I want a baseketball of new bought itmI want a baseketball of new bought itmI want a baseketball of new bought itm
    </span>
    <span className="like" style={{ position: 'absolute', top: '0.08rem', right: '0.07rem', width: '0.15rem', height: '0.15rem' }}>
      <HeartOutlined style={{ fontSize: '0.08rem' }} />
    </span>
  </Card>
)
export default ItemCard
