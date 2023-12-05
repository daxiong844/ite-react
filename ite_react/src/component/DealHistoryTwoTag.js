import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react'

const DealHistoryTwoTag = ({ onTagClick }) => {
  const [buttonStates, setButtonStates] = useState([])

  const handleClick = index => {
    const newButtonStates = [...buttonStates]
    newButtonStates[index] = !newButtonStates[index]
    setButtonStates(newButtonStates)
    // 点击标签时调用回调函数，并将选中的标签内容传递给父组件
    const selectedTag = newButtonStates[index] ? buttonContents[index] : null
    onTagClick(selectedTag)
  }
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      setButtonStates(buttonStates.map(() => false))
    }
  }

  const buttonColors = ['RGBA(193, 39, 12, 1)', 'RGBA(249, 229, 7, 1)', 'RGBA(46, 212, 122, 1)', 'RGBA(193, 39, 12, 1)', 'RGBA(131, 86, 239, 1)', 'RGBA(129, 142, 155, 1)', 'RGBA(248, 48, 5, 1)']

  const closeButtonColors = ['#fff', '#000', '#000', '#fff', '#fff', '#000', '#fff']

  const marginTop = ['', '', '', '', '', '', '0.05rem']

  const buttonContents = ['waiting you carry out', 'waiting others carry out', 'Done', 'others apply for cancel', 'Cancel', 'Ruind', 'others unagree cancel']
  return (
    <div className="createTag" style={{ marginTop: '0.05rem' }}>
      {buttonContents.map((content, index) => (
        <Button
          key={index}
          className="createTagButton"
          style={{ marginRight: '0.05rem', marginTop: marginTop[index], color: buttonStates[index] ? closeButtonColors[index] : buttonColors[index], borderColor: buttonColors[index], backgroundColor: buttonStates[index] ? buttonColors[index] : '' }}
          onClick={() => handleClick(index)}
        >
          {content}
          {buttonStates[index] && <CloseOutlined style={{ width: '0.08rem', height: '0.08rem', fontSize: '0.05rem', backgroundColor: closeButtonColors[index], borderRadius: '50%', color: buttonColors[index], lineHeight: '0.1rem', marginLeft: '0.05rem' }} onClick={handleClose} />}
        </Button>
      ))}
    </div>
  )
}

export default DealHistoryTwoTag
