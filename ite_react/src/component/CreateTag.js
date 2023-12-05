import { PlusSquareOutlined, CloseOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Modal, Button } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NewItem from './NewItem'

function CreateTag({ onTagClick }) {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonStates, setButtonStates] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
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
  const handleEllipsisClick = () => {
    setIsExpanded(!isExpanded)
  }
  const handleCreate = () => {
    setIsModalOpen(false)
  }

  const buttonContents = ['Development', 'Shopping', 'Exchange', 'Design', 'Money', 'House', 'Exchange', 'Design', 'Money', 'House', 'Development', 'Exchange', 'Design', 'Money', 'House', 'Exchange', 'Design', 'Money', 'basketball']

  return (
    <>
      <div onClick={showModal} style={{ borderStyle: 'dashed', position: 'absolute', top: '0.04rem', right: '0.6rem', border: 'none', backgroundColor: 'RGBA(11, 10, 36, 1)', color: '#fff', fontSize: '0.05rem' }}>
        <PlusSquareOutlined style={{ color: '#fff', fontSize: '0.08rem' }} /> {t('List.New')}
      </div>
      <Modal footer={null} centered width="5.61rem" maskStyle={{ backgroundColor: 'rgba(196, 196, 196, 0.40)' }} bodyStyle={{ height: '3.2rem' }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose="true">
        {/* 传递给子组件NewItem一个onCreate方法，使得点击创建按钮时，隐藏Modal */}
        <NewItem onCreate={handleCreate} />
      </Modal>
      <div className="createTag" style={{ height: isExpanded ? '' : '0.4rem' }}>
        {buttonContents.map((content, index) => (
          <Button key={index} className="createTagButton" onClick={() => handleClick(index)} style={{ backgroundColor: buttonStates[index] ? 'RGBA(66, 99, 235, 1)' : '', color: buttonStates[index] ? '#fff' : '', marginRight: '0.1rem', marginBottom: '0.08rem' }}>
            {content}
            {buttonStates[index] && <CloseOutlined style={{ width: '0.08rem', height: '0.08rem', fontSize: '0.05rem', backgroundColor: '#fff', borderRadius: '50%', color: 'RGBA(66, 99, 235, 1)', lineHeight: '0.1rem', marginLeft: '0.05rem' }} onClick={handleClose} />}
          </Button>
        ))}
        <EllipsisOutlined style={{ color: 'rgba(69, 105, 250, 0.90)', fontSize: '0.2rem', position: 'absolute', top: '0.52rem', right: '0.2rem', zIndex: '99999' }} onClick={handleEllipsisClick} />
      </div>
    </>
  )
}

export default CreateTag
