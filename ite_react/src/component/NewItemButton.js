import { Button, Modal } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NewItem from './NewItem'

function NewItemButton() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleCreate = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginTop: '0.18rem', width: '1.34rem', height: '0.25rem', border: 'none', borderRadius: '0.04rem', color: 'RGBA(24, 112, 248, 1)', fontSize: '0.08rem', backgroundColor: '#fff' }}>
        {t('Dashboard.NEW ITEM')}
      </Button>
      <Modal footer={null} centered width="5.61rem" maskStyle={{ backgroundColor: 'rgba(196, 196, 196, 0.40)' }} bodyStyle={{ height: '3.2rem' }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose="true">
        {/* 传递给子组件NewItem一个onCreate方法，使得点击创建按钮时，隐藏Modal */}
        <NewItem onCreate={handleCreate} />
      </Modal>
    </>
  )
}

export default NewItemButton
