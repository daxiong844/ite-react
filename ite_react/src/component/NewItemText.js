import { Select } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'

const options = []

options.push({
  value: '色彩设计的原理',
  label: '色彩设计的原理'
})
options.push({
  value: '写给大家看的设计书',
  label: '写给大家看的设计书'
})

const handleChange = value => {
  console.log(`selected ${value}`)
}

const NewItemText = () => (
  <>
    <Select
      mode="tags"
      style={{
        width: '100%'
      }}
      onChange={handleChange}
      options={options}
      dropdownStyle={{ width: '500px' }}
    ></Select>
    <CaretUpOutlined style={{ color: 'rgba(196, 196, 196, 0.40)', position: 'absolute', top: '0.45rem', left: '2.05rem', fontSize: '0.1rem' }} />
  </>
)
export default NewItemText
