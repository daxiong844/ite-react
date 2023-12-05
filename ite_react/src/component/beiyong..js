// import axios from 'axios'
// import { Button, Table, Checkbox, Modal, Tag, List } from 'antd'
// import { useTranslation } from 'react-i18next'
// import { useEffect, useState } from 'react'
// import React from 'react'
// import NumberInput from './NumberInput'
// import { TrophyFilled, CrownFilled, EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'

// function MyTrendingItem({ selectedTag }) {
//   const { t } = useTranslation()

//   useEffect(() => {
//     // 在组件挂载后发送请求
//     // 获取存储的变量
//     const myToken = JSON.parse(localStorage.getItem('myToken'))
//     console.log(myToken)
//     // 设置自定义请求头
//     const customHeaders = {
//       Authorization: 'Bearer ' + myToken // 示例：添加授权头
//     }
//     // 创建一个包含自定义头的axios实例
//     const axiosInstance = axios.create({
//       baseURL: 'https://ite.haowugou.store/api/v1/me/requests', // 替换成你的API地址
//       headers: customHeaders
//     })
//     // 定义查询参数
//     const queryParams = {
//       page: '',
//       pagesize: ''
//     }
//     // 发送带查询参数的GET请求
//     axiosInstance
//       .get('https://ite.haowugou.store/api/v1/me/requests', { params: queryParams })
//       .then(response => {
//         // 处理从服务器返回的数据
//         console.log(response.data)
//         console.log(response.data.data.data)
//         setData(response.data.data.data)
//       })
//       .catch(error => {
//         // 处理请求错误
//         console.error('请求失败', error)
//       })
//   }, []) // 空数组作为第二个参数确保只在组件挂载时发送一次请求

//   const [editedData, setEditedData] = useState({})
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isview, SetIsview] = useState(false)
//   const [selectedRow, setSelectedRow] = useState(null)

//   const listData = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.']

//   const showModal = () => {
//     setIsModalOpen(true)
//   }
//   const handleOk = () => {
//     setIsModalOpen(false)
//   }
//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }
//   const viewClick = () => {
//     if (isview) {
//       SetIsview(false)
//     } else {
//       SetIsview(true)
//     }
//   }
//   // Modal的显示与隐藏
//   // const handleRowClick = record => {
//   //   setSelectedRow(record.key)
//   //   showModal()
//   // }

//   // 修改保证金，已改
//   const handleNumberChange = (newValue, record) => {
//     const newData = [...data]
//     const index = newData.findIndex(item => record.uuid === item.uuid)
//     if (index > -1) {
//       newData[index] = { ...newData[index], margin: newValue }
//       setData(newData)
//       console.log('aaaaaaaaaa')
//       console.log(data)
//     }
//   }

//   const ButtonClick = record => {
//     const newData = { ...editedData }
//     if (newData[record.key]) {
//       newData[record.key].isEdited = !newData[record.key].isEdited
//     } else {
//       newData[record.key] = { isEdited: true }
//     }
//     setEditedData(newData)
//     console.log(12)
//     console.log(record)
//     console.log(12)

//     // 获取存储的变量
//     const myToken = JSON.parse(localStorage.getItem('myToken'))
//     console.log(myToken)

//     // 设置自定义请求头
//     const customHeaders = {
//       Authorization: 'Bearer ' + myToken // 示例：添加授权头
//     }
//     // 创建一个包含自定义头的axios实例
//     const axiosInstance = axios.create({
//       baseURL: 'https://ite.haowugou.store/api/v1/requests/edit', // 替换成你的API地址
//       headers: customHeaders
//     })
//     // 要发送的数据
//     const postData = {
//       uuid: record.uuid,
//       need: record.need,
//       provide: record.provide,
//       margin: record.margin,
//       lang: record.lang,
//       location: record.location
//     }
//     // 发送POST请求
//     axiosInstance
//       .post('https://ite.haowugou.store/api/v1/requests/edit', postData)
//       .then(async response => {
//         // 处理从服务器返回的数据
//         console.log(response.data)
//       })
//       .catch(error => {
//         // 处理请求错误
//         console.error('请求失败', error)
//       })
//   }

//   //让底部复选框可以绑定每行的复选框
//   const [selectedRowKeys, setSelectedRowKeys] = useState([])

//   const onSelectAll = (selected, selectedRows, changeRows) => {
//     const keys = selectedRows.map(item => item.key)
//     setSelectedRowKeys(selected ? keys : [])
//   }

//   const onSelect = (record, selected) => {
//     const keys = [...selectedRowKeys]
//     if (selected) {
//       keys.push(record.key)
//     } else {
//       const index = keys.indexOf(record.key)
//       if (index > -1) {
//         keys.splice(index, 1)
//       }
//     }
//     setSelectedRowKeys(keys)
//   }

//   const columns = [
//     {
//       title: t('List.No'),
//       dataIndex: 'uuid',
//       key: 'No',
//       width: '0.5rem',
//       align: 'center',
//       className: 'TrendingItemNo',
//       // Modal 的显示与隐藏
//       onCell: record => {
//         return {
//           onClick: () => {
//             setSelectedRow(record.key)
//             showModal()
//           }
//         }
//       }
//     },
//     {
//       title: t('Dashboard.Need'),
//       dataIndex: 'need',
//       key: 'dashboardNeed',
//       width: '1.1rem',
//       align: 'center',
//       onCell: record => {
//         return {
//           onClick: () => {
//             setSelectedRow(record.key)
//             showModal()
//           }
//         }
//       }
//     },
//     {
//       title: t('Dashboard.Provide'),
//       dataIndex: 'provide',
//       key: 'dashboardProvide',
//       width: '1.1rem',
//       align: 'center',
//       onCell: record => {
//         return {
//           onClick: () => {
//             setSelectedRow(record.key)
//             showModal()
//           }
//         }
//       }
//     },
//     {
//       title: t('Dashboard.Deposited'),
//       dataIndex: 'margin',
//       key: 'dashboardDeposited',
//       width: '0.5rem',
//       align: 'center',
//       className: 'TrendingItemDeposited',
//       render: (text, record) => {
//         if (editedData[record.key]?.isEdited) {
//           return <NumberInput onChange={value => handleNumberChange(value, record)}>{record.margin}</NumberInput>
//         }
//         return <span>{text}USDT</span>
//       }
//     },
//     {
//       title: t('Deal.Time'),
//       dataIndex: 'updated_at',
//       key: 'dealTime',
//       align: 'center',
//       onCell: record => {
//         return {
//           onClick: () => {
//             setSelectedRow(record.key)
//             showModal()
//           }
//         }
//       }
//     },
//     {
//       title: t('List.Surplus Times'),
//       dataIndex: 'times',
//       key: 'dealLocation',
//       align: 'center',
//       onCell: record => {
//         return {
//           onClick: () => {
//             setSelectedRow(record.key)
//             showModal()
//           }
//         }
//       }
//     },
//     {
//       title: '',
//       dataIndex: 'action',
//       key: 'action',
//       width: '0.1rem',
//       align: 'center',
//       render: (text, record) => (
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem', borderColor: '#fff' }} onClick={() => ButtonClick(record)}>
//             {t('List.Edit')}
//           </Button>
//           <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem' }}>
//             {t('List.Deal')}
//           </Button>
//           <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: 'rgba(121, 120, 141, 1)', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.0942rem', borderColor: 'rgba(121, 120, 141, 1)' }} onClick={handleDelete}>
//             {t('List.Del')}
//           </Button>
//         </div>
//       )
//     }
//   ]

//   const [data, setData] = useState([
//     {
//       key: '1',
//       No: '#A0D18TD2',
//       dashboardNeed: 'I want a basketball, like myco jodon...',
//       dashboardProvide: 'i will provide a baseball. just you see...',
//       dashboardDeposited: '10.5',
//       dealTime: '01/01/2023 10:10:10',
//       dealLocation: '9/10k+'
//     }
//   ])
//   // 点击Del按钮删除选中的行
//   const handleDelete = () => {
//     const newData = data.filter(item => !selectedRowKeys.includes(item.key))
//     setData(newData)
//     setSelectedRowKeys([])
//   }

//   const rowSelection = {
//     selectedRowKeys,
//     onSelectAll,
//     onSelect,
//     getCheckboxProps: record => ({
//       // Column configuration not to be checked
//       name: record.name
//     })
//   }

//   const filteredData = selectedTag ? data.filter(item => item.dashboardNeed.includes(selectedTag) || item.dashboardProvide.includes(selectedTag)) : data

//   return (
//     <>
//       <Table
//         rowSelection={rowSelection}
//         columns={columns}
//         dataSource={filteredData}
//         pagination={{ pageSize: 8 }}
//         style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}
//         footer={() => (
//           <Checkbox style={{ marginLeft: '-5.32rem' }} checked={selectedRowKeys.length === data.length} indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < data.length} onChange={e => onSelectAll(e.target.checked, data)}>
//             <Button style={{ width: '0.2rem', height: '0.1rem', lineHeight: '0.05rem', backgroundColor: 'rgba(32, 30, 67, 1) ', borderColor: 'RGBA(159, 161, 173, 1)', paddingLeft: '0.04rem', borderRadius: '0.04rem', color: 'RGBA(159, 161, 173, 1)' }} onClick={handleDelete}>
//               Del
//             </Button>
//           </Checkbox>
//         )}
//         rowClassName={record => (record.key === selectedRow ? 'selected-row' : '')}
//         // onRow={record => ({
//         //   onClick: () => handleRowClick(record)
//         // })}
//       />
//       <Modal className="PortfolioModal" title={t('Portfolio.Social Posting Bounty')} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
//         <Tag icon={<TrophyFilled />} color="#55acee" style={{ backgroundColor: 'RGBA(215, 161, 58, 1)', width: '0.6rem', marginTop: '0.06rem' }}>
//           Twitter
//         </Tag>
//         <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.2rem', backgroundColor: 'RGBA(136, 104, 34, 1)', position: 'absolute', left: '0.53rem', top: '0.355rem' }}>
//           10
//         </Tag>
//         <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.5rem', backgroundColor: 'RGBA(255, 255, 255, 1)', color: '#000' }}>
//           $20 in UDO
//         </Tag>
//         {!isview ? (
//           <div className="PortfolioTextOne" style={{ paddingLeft: '0.08rem' }}>
//             <p style={{ color: '#fff' }}>Task Detial</p>
//             <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
//               Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
//               https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
//               Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
//             </p>
//             <p style={{ color: '#fff' }}>Delivery&Application</p>
//             <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
//               Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
//               https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
//               Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
//             </p>
//           </div>
//         ) : (
//           <div className="PortfolioTextTwo" style={{ paddingLeft: '0.08rem' }}>
//             <p style={{ color: '#fff' }}>Task Detial</p>
//             <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
//               Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
//               https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
//               Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
//             </p>
//             <p style={{ color: '#fff' }}>Delivery&Application</p>
//             <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
//               Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
//               https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
//               Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
//             </p>
//           </div>
//         )}
//         <Button style={{ backgroundColor: 'RGBA(29, 29, 39, 1)', border: '0', color: 'RGBA(133, 134, 137, 1)', marginLeft: '2rem' }} onClick={viewClick}>
//           {t('Portfolio.View more...')}
//         </Button>
//         <div style={{ position: 'absolute', left: '0.2rem', marginTop: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
//           <Button style={{ backgroundColor: 'RGBA(134, 113, 228, 1)', border: '0', color: '#fff', borderRadius: '0.02rem' }}>
//             {' '}
//             <EditOutlined style={{ marginLeft: '-0.01rem' }} />
//             {t('Portfolio.Submit Work')}
//           </Button>
//           <InstagramFilled style={{ color: 'RGBA(88, 101, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
//           <TwitterOutlined style={{ color: 'RGBA(29, 161, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
//         </div>
//         <List
//           size="small"
//           style={{ marginTop: '0.4rem' }}
//           header={<div style={{ color: 'RGBA(210, 210, 212, 1)', fontWeight: '700', marginLeft: '0.08rem' }}>{t('Portfolio.ACTIVITY')}</div>}
//           dataSource={listData}
//           renderItem={item => (
//             <List.Item style={{ color: 'RGBA(210, 210, 212, 1)', border: '0', display: 'flex' }}>
//               {item} <div>Apr 25, 2022 4 25</div>
//             </List.Item>
//           )}
//         />
//         <span style={{ color: 'RGBA(210, 210, 212, 1)', position: 'relative', top: '0.55rem', left: '-2.5rem', fontWeight: '700', marginLeft: '0.08rem', marginTop: '0.05rem' }}>{t('Portfolio.ACTIVITY')}</span>
//       </Modal>
//     </>
//   )
// }

// export default MyTrendingItem

import axios from 'axios'
import { Button, Table, Checkbox, Modal, Tag, List } from 'antd'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import React from 'react'
import NumberInput from './NumberInput'
import { TrophyFilled, CrownFilled, EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'

function MyTrendingItem({ selectedTag }) {
  const { t } = useTranslation()

  useEffect(() => {
    // 在组件挂载后发送请求
    // 获取存储的变量
    const myToken = JSON.parse(localStorage.getItem('myToken'))
    console.log(myToken)
    // 设置自定义请求头
    const customHeaders = {
      Authorization: 'Bearer ' + myToken // 示例：添加授权头
    }
    // 创建一个包含自定义头的axios实例
    const axiosInstance = axios.create({
      baseURL: 'https://ite.haowugou.store/api/v1/me/requests', // 替换成你的API地址
      headers: customHeaders
    })
    // 定义查询参数
    const queryParams = {
      page: '',
      pagesize: ''
    }
    // 发送带查询参数的GET请求
    axiosInstance
      .get('https://ite.haowugou.store/api/v1/me/requests', { params: queryParams })
      .then(response => {
        // 处理从服务器返回的数据
        console.log(response.data)
        console.log(response.data.data.data)
        setData(response.data.data.data)
      })
      .catch(error => {
        // 处理请求错误
        console.error('请求失败', error)
      })
  }, []) // 空数组作为第二个参数确保只在组件挂载时发送一次请求

  const [editedData, setEditedData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isview, SetIsview] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [rowCheckboxState, setRowCheckboxState] = useState({})

  const listData = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.']

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const viewClick = () => {
    if (isview) {
      SetIsview(false)
    } else {
      SetIsview(true)
    }
  }
  // Modal的显示与隐藏
  // const handleRowClick = record => {
  //   setSelectedRow(record.key)
  //   showModal()
  // }

  // 修改保证金，已改
  const handleNumberChange = (newValue, record) => {
    const newData = [...data]
    const index = newData.findIndex(item => record.uuid === item.uuid)
    if (index > -1) {
      newData[index] = { ...newData[index], margin: newValue }
      setData(newData)
      console.log('aaaaaaaaaa')
      console.log(data)
    }
  }

  const ButtonClick = record => {
    const newData = { ...editedData }
    if (newData[record.key]) {
      newData[record.key].isEdited = !newData[record.key].isEdited
    } else {
      newData[record.key] = { isEdited: true }
    }
    setEditedData(newData)
    console.log(12)
    console.log(record)
    console.log(12)

    // 获取存储的变量
    const myToken = JSON.parse(localStorage.getItem('myToken'))
    console.log(myToken)

    // 设置自定义请求头
    const customHeaders = {
      Authorization: 'Bearer ' + myToken // 示例：添加授权头
    }
    // 创建一个包含自定义头的axios实例
    const axiosInstance = axios.create({
      baseURL: 'https://ite.haowugou.store/api/v1/requests/edit', // 替换成你的API地址
      headers: customHeaders
    })
    // 要发送的数据
    const postData = {
      uuid: record.uuid,
      need: record.need,
      provide: record.provide,
      margin: record.margin,
      lang: record.lang,
      location: record.location
    }
    // 发送POST请求
    axiosInstance
      .post('https://ite.haowugou.store/api/v1/requests/edit', postData)
      .then(async response => {
        // 处理从服务器返回的数据
        console.log(response.data)
      })
      .catch(error => {
        // 处理请求错误
        console.error('请求失败', error)
      })
  }

  const columns = [
    {
      title: t('List.No'),
      dataIndex: 'uuid',
      key: 'No',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemNo',
      // Modal 的显示与隐藏
      onCell: record => {
        return {
          onClick: () => {
            setSelectedRow(record.key)
            showModal()
          }
        }
      }
    },
    {
      title: t('Dashboard.Need'),
      dataIndex: 'need',
      key: 'dashboardNeed',
      width: '1.1rem',
      align: 'center',
      onCell: record => {
        return {
          onClick: () => {
            setSelectedRow(record.key)
            showModal()
          }
        }
      }
    },
    {
      title: t('Dashboard.Provide'),
      dataIndex: 'provide',
      key: 'dashboardProvide',
      width: '1.1rem',
      align: 'center',
      onCell: record => {
        return {
          onClick: () => {
            setSelectedRow(record.key)
            showModal()
          }
        }
      }
    },
    {
      title: t('Dashboard.Deposited'),
      dataIndex: 'margin',
      key: 'dashboardDeposited',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemDeposited',
      render: (text, record) => {
        if (editedData[record.key]?.isEdited) {
          return <NumberInput onChange={value => handleNumberChange(value, record)}>{record.margin}</NumberInput>
        }
        return <span>{text}USDT</span>
      }
    },
    {
      title: t('Deal.Time'),
      dataIndex: 'updated_at',
      key: 'dealTime',
      align: 'center',
      onCell: record => {
        return {
          onClick: () => {
            setSelectedRow(record.key)
            showModal()
          }
        }
      }
    },
    {
      title: t('List.Surplus Times'),
      dataIndex: 'times',
      key: 'dealLocation',
      align: 'center',
      onCell: record => {
        return {
          onClick: () => {
            setSelectedRow(record.key)
            showModal()
          }
        }
      }
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '0.1rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem', borderColor: '#fff' }} onClick={() => ButtonClick(record)}>
            {t('List.Edit')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', marginRight: '0.04rem' }}>
            {t('List.Deal')}
          </Button>
          <Button size="small" style={{ backgroundColor: 'RGBA(32, 30, 67, 1)', color: 'rgba(121, 120, 141, 1)', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.0942rem', borderColor: 'rgba(121, 120, 141, 1)' }} onClick={() => handleDelete(record.uuid)}>
            {t('List.Del')}
          </Button>
        </div>
      )
    }
  ]

  const handleDelete = uuid => {
    // 根据行的唯一标识 uuid 来删除数据
    const updatedData = data.filter(item => item.uuid !== uuid)
    setData(updatedData)
  }

  const [data, setData] = useState([
    {
      key: '1',
      No: '#A0D18TD2',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardDeposited: '10.5',
      dealTime: '01/01/2023 10:10:10',
      dealLocation: '9/10k+'
    }
  ])

  const handleRowCheckboxChange = (uuid, checked) => {
    setRowCheckboxState(prevState => ({
      ...prevState,
      [uuid]: checked
    }))
  }

  const rowSelection = {
    getCheckboxProps: record => ({
      checked: rowCheckboxState[record.uuid],
      onChange: e => {
        handleRowCheckboxChange(record.uuid, e.target.checked)
      }
    })
  }

  const filteredData = selectedTag ? data.filter(item => item.dashboardNeed.includes(selectedTag) || item.dashboardProvide.includes(selectedTag)) : data

  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 8 }}
        style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}
        footer={() => (
          <Checkbox style={{ marginLeft: '-5.32rem' }}>
            <Button style={{ width: '0.2rem', height: '0.1rem', lineHeight: '0.05rem', backgroundColor: 'rgba(32, 30, 67, 1) ', borderColor: 'RGBA(159, 161, 173, 1)', paddingLeft: '0.04rem', borderRadius: '0.04rem', color: 'RGBA(159, 161, 173, 1)' }}>Del</Button>
          </Checkbox>
        )}
        rowClassName={record => (record.key === selectedRow ? 'selected-row' : '')}
        // onRow={record => ({
        //   onClick: () => handleRowClick(record)
        // })}
      />
      <Modal className="PortfolioModal" title={t('Portfolio.Social Posting Bounty')} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Tag icon={<TrophyFilled />} color="#55acee" style={{ backgroundColor: 'RGBA(215, 161, 58, 1)', width: '0.6rem', marginTop: '0.06rem' }}>
          Twitter
        </Tag>
        <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.2rem', backgroundColor: 'RGBA(136, 104, 34, 1)', position: 'absolute', left: '0.53rem', top: '0.355rem' }}>
          10
        </Tag>
        <Tag icon={<CrownFilled style={{ marginLeft: '-0.01rem', marginRight: '-0.02rem' }} />} color="#55acee" style={{ width: '0.5rem', backgroundColor: 'RGBA(255, 255, 255, 1)', color: '#000' }}>
          $20 in UDO
        </Tag>
        {!isview ? (
          <div className="PortfolioTextOne" style={{ paddingLeft: '0.08rem' }}>
            <p style={{ color: '#fff' }}>Task Detial</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
            <p style={{ color: '#fff' }}>Delivery&Application</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
          </div>
        ) : (
          <div className="PortfolioTextTwo" style={{ paddingLeft: '0.08rem' }}>
            <p style={{ color: '#fff' }}>Task Detial</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
            <p style={{ color: '#fff' }}>Delivery&Application</p>
            <p style={{ color: 'RGBA(215, 215, 217, 1)' }}>
              Create original social posting content or quote Unido's tweet thighlighting the performance of Unido in the last 30 days and how this has outperformed the market using as a specific reference th te performance of the token up to the 17th February 2023(see: ortlolio
              https://www.livecoinwatch.com/price/UnidoEP-UDO).Also,th his post must provide an explanation for why we expect this positive performance to continue over the long term making specific reference to the article "Unido EP: Enterprise-Grade Digital Asset ATIV quest Management,for
              Everyone"Located on bitcoin.com mentior hing the Unido Moonshot table. 051T
            </p>
          </div>
        )}
        <Button style={{ backgroundColor: 'RGBA(29, 29, 39, 1)', border: '0', color: 'RGBA(133, 134, 137, 1)', marginLeft: '2rem' }} onClick={viewClick}>
          {t('Portfolio.View more...')}
        </Button>
        <div style={{ position: 'absolute', left: '0.2rem', marginTop: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Button style={{ backgroundColor: 'RGBA(134, 113, 228, 1)', border: '0', color: '#fff', borderRadius: '0.02rem' }}>
            {' '}
            <EditOutlined style={{ marginLeft: '-0.01rem' }} />
            {t('Portfolio.Submit Work')}
          </Button>
          <InstagramFilled style={{ color: 'RGBA(88, 101, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
          <TwitterOutlined style={{ color: 'RGBA(29, 161, 242, 1)', fontSize: '0.12rem', marginLeft: '0.05rem' }} />
        </div>
        <List
          size="small"
          style={{ marginTop: '0.4rem' }}
          header={<div style={{ color: 'RGBA(210, 210, 212, 1)', fontWeight: '700', marginLeft: '0.08rem' }}>{t('Portfolio.ACTIVITY')}</div>}
          dataSource={listData}
          renderItem={item => (
            <List.Item style={{ color: 'RGBA(210, 210, 212, 1)', border: '0', display: 'flex' }}>
              {item} <div>Apr 25, 2022 4 25</div>
            </List.Item>
          )}
        />
        <span style={{ color: 'RGBA(210, 210, 212, 1)', position: 'relative', top: '0.55rem', left: '-2.5rem', fontWeight: '700', marginLeft: '0.08rem', marginTop: '0.05rem' }}>{t('Portfolio.ACTIVITY')}</span>
      </Modal>
    </>
  )
}

export default MyTrendingItem
