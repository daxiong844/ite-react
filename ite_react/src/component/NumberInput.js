import { InputNumber, Space } from 'antd'
import React, { useState } from 'react'
import { PlusCircleFilled } from '@ant-design/icons'

function NumberInput(props) {
  const [value, setValue] = useState(props.children)

  const onChange = newValue => {
    console.log('changed', newValue)
    setValue(newValue)
    // 调用父组件传递的onChange函数，将数值传递给父组件
    props.onChange(newValue)
  }

  const handleInputChange = newValue => {
    setValue(newValue)
    onChange(newValue)
  }

  const onPlusClick = () => {
    const newValue = parseFloat(value) + 1
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <Space>
      <div style={{ position: 'relative' }}>
        <InputNumber controls={false} style={{ background: 'rgba(32, 30, 67, 1)', border: 'none' }} value={value} onChange={handleInputChange} />
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: '-0.05rem',
            width: '0.3rem',
            height: '0.17rem',
            lineHeight: '0.2rem',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: 'red'
          }}
          onClick={onPlusClick}
        >
          USDT
          <PlusCircleFilled style={{ marginLeft: '0.01rem', marginTop: '-0.01rem' }} />
        </span>
      </div>
    </Space>
  )
}

export default NumberInput
