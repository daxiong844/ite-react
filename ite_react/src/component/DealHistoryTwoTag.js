import { Space, Tag } from 'antd'
const log = e => {
  console.log(e)
}

const DealHistoryTwoTag = () => (
  <Space size={[0, 8]} wrap className="DealHistoryTwoTag">
    <Tag className="TagOne">waiting you carry out</Tag>
    <Tag closable onClose={log} className="TagTwo">
      waiting others carry out
    </Tag>
    <Tag closable onClose={log} className="TagThree">
      Done
    </Tag>
    <Tag className="TagFour">others apply for cancel</Tag>
    <Tag className="TagFive">Cancel</Tag>
    <Tag className="TagSix">Ruind</Tag>
    <Tag closable onClose={log} className="TagSeven">
      others unagree cancel
    </Tag>
  </Space>
)
export default DealHistoryTwoTag
