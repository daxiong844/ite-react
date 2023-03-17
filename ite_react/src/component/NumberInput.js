import { InputNumber, Space } from 'antd'
const onChange = value => {
  console.log('changed', value)
}
const NumberInput = () => (
  <Space>
    <InputNumber size="small" min={1} max={100000} onChange={onChange} />
  </Space>
)
export default NumberInput
