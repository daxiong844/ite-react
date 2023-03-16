import { PlusSquareOutlined } from '@ant-design/icons'
import { Input, Space, Tag, Tooltip } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CreateTag = () => {
  const { t } = useTranslation()

  const [tags, setTags] = useState([])
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [editInputIndex, setEditInputIndex] = useState(-1)
  const [editInputValue, setEditInputValue] = useState('')
  const inputRef = useRef(null)
  const editInputRef = useRef(null)
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])
  useEffect(() => {
    editInputRef.current?.focus()
  }, [inputValue])
  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag)
    console.log(newTags)
    setTags(newTags)
  }
  const showInput = () => {
    setInputVisible(true)
  }
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }
  const handleEditInputChange = e => {
    setEditInputValue(e.target.value)
  }
  const handleEditInputConfirm = () => {
    const newTags = [...tags]
    newTags[editInputIndex] = editInputValue
    setTags(newTags)
    setEditInputIndex(-1)
    setInputValue('')
  }
  const tagInputStyle = {
    width: 78,
    verticalAlign: 'top',
    position: 'absolute',
    top: '0.04rem',
    right: '0.6rem',
    borderRadius: '0.11rem',
    backgroundColor: 'RGBA(11, 10, 36, 1)',
    color: '#fff'
  }
  const tagPlusStyle = {
    borderStyle: 'dashed',
    position: 'absolute',
    top: '0.04rem',
    right: '0.6rem',
    border: 'none',
    backgroundColor: 'RGBA(11, 10, 36, 1)',
    color: '#fff',
    fontSize: '0.05rem'
  }
  return (
    <Space size={[0, 8]} wrap>
      <Space size={[0, 8]} wrap>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return <Input ref={editInputRef} key={tag} size="small" style={tagInputStyle} value={editInputValue} onChange={handleEditInputChange} onBlur={handleEditInputConfirm} onPressEnter={handleEditInputConfirm} />
          }
          const isLongTag = tag.length > 20
          const tagElem = (
            <Tag
              key={tag}
              closable
              style={{
                userSelect: 'none'
              }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={e => {
                  if (index !== 0) {
                    setEditInputIndex(index)
                    setEditInputValue(tag)
                    e.preventDefault()
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          )
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          )
        })}
      </Space>
      {inputVisible ? (
        <Input ref={inputRef} type="text" size="small" style={tagInputStyle} value={inputValue} onChange={handleInputChange} onBlur={handleInputConfirm} onPressEnter={handleInputConfirm} />
      ) : (
        <Tag style={tagPlusStyle} onClick={showInput}>
          <PlusSquareOutlined style={{ color: '#fff', fontSize: '0.08rem' }} /> {t('List.New')}
        </Tag>
      )}
    </Space>
  )
}
export default CreateTag
