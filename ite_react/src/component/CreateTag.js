import { PlusSquareOutlined, EllipsisOutlined } from '@ant-design/icons'
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
  const [isEllipsisClicked, setIsEllipsisClicked] = useState(false)
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
  const spaceStyle = {
    width: '5.92rem',
    minHeight: '0.3rem',
    height: isEllipsisClicked ? '' : '0.3rem',
    overflow: isEllipsisClicked ? '' : 'hidden',
    whiteSpace: isEllipsisClicked ? '' : 'nowrap'
  }
  const iconStyle = {
    fontSize: '0.2rem',
    color: 'RGBA(63, 95, 228, 1)',
    position: 'absolute',
    top: '0.42rem',
    right: '0.3rem',
    zIndex: '99999999999'
  }
  const handleEllipsisClick = () => {
    setIsEllipsisClicked(!isEllipsisClicked)
  }
  return (
    <Space size={[0, 8]} wrap>
      <Space size={[0, 8]} wrap style={spaceStyle}>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return <Input ref={editInputRef} key={tag} size="small" style={tagInputStyle} value={editInputValue} onChange={handleEditInputChange} onBlur={handleEditInputConfirm} onPressEnter={handleEditInputConfirm} />
          }
          const isLongTag = tag.length > 20
          const tagElem = (
            <Tag
              key={tag}
              className="CreatrTag"
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
        <EllipsisOutlined style={iconStyle} onClick={handleEllipsisClick} />
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

// import { PlusOutlined } from '@ant-design/icons'
// import { Input, Space, Tag, theme, Tooltip } from 'antd'
// import { useEffect, useRef, useState } from 'react'
// const CreateTag = () => {
//   const { token } = theme.useToken()
//   const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3'])
//   const [inputVisible, setInputVisible] = useState(false)
//   const [inputValue, setInputValue] = useState('')
//   const [editInputIndex, setEditInputIndex] = useState(-1)
//   const [editInputValue, setEditInputValue] = useState('')
//   const inputRef = useRef(null)
//   const editInputRef = useRef(null)
//   useEffect(() => {
//     if (inputVisible) {
//       inputRef.current?.focus()
//     }
//   }, [inputVisible])
//   useEffect(() => {
//     editInputRef.current?.focus()
//   }, [inputValue])
//   const handleClose = removedTag => {
//     const newTags = tags.filter(tag => tag !== removedTag)
//     console.log(newTags)
//     setTags(newTags)
//   }
//   const showInput = () => {
//     setInputVisible(true)
//   }
//   const handleInputChange = e => {
//     setInputValue(e.target.value)
//   }
//   const handleInputConfirm = () => {
//     if (inputValue && tags.indexOf(inputValue) === -1) {
//       setTags([...tags, inputValue])
//     }
//     setInputVisible(false)
//     setInputValue('')
//   }
//   const handleEditInputChange = e => {
//     setEditInputValue(e.target.value)
//   }
//   const handleEditInputConfirm = () => {
//     const newTags = [...tags]
//     newTags[editInputIndex] = editInputValue
//     setTags(newTags)
//     setEditInputIndex(-1)
//     setInputValue('')
//   }
//   const tagInputStyle = {
//     width: 78,
//     verticalAlign: 'top'
//   }
//   const tagPlusStyle = {
//     background: token.colorBgContainer,
//     borderStyle: 'dashed'
//   }
//   return (
//     <Space size={[0, 8]} wrap>
//       <Space size={[0, 8]} wrap>
//         {tags.map((tag, index) => {
//           if (editInputIndex === index) {
//             return <Input ref={editInputRef} key={tag} size="small" style={tagInputStyle} value={editInputValue} onChange={handleEditInputChange} onBlur={handleEditInputConfirm} onPressEnter={handleEditInputConfirm} />
//           }
//           const isLongTag = tag.length > 20
//           const tagElem = (
//             <Tag
//               key={tag}
//               closable={true}
//               style={{
//                 userSelect: 'none'
//               }}
//               onClose={() => handleClose(tag)}
//             >
//               <span
//                 onDoubleClick={e => {
//                   if (index !== 0) {
//                     setEditInputIndex(index)
//                     setEditInputValue(tag)
//                     e.preventDefault()
//                   }
//                 }}
//               >
//                 {isLongTag ? `${tag.slice(0, 20)}...` : tag}
//               </span>
//             </Tag>
//           )
//           return isLongTag ? (
//             <Tooltip title={tag} key={tag}>
//               {tagElem}
//             </Tooltip>
//           ) : (
//             tagElem
//           )
//         })}
//       </Space>
//       {inputVisible ? (
//         <Input ref={inputRef} type="text" size="small" style={tagInputStyle} value={inputValue} onChange={handleInputChange} onBlur={handleInputConfirm} onPressEnter={handleInputConfirm} />
//       ) : (
//         <Tag style={tagPlusStyle} onClick={showInput}>
//           <PlusOutlined /> New Tag
//         </Tag>
//       )}
//     </Space>
//   )
// }
// export default CreateTag
