import axios from 'axios'
import { Button, Table, Avatar, Modal, Tag, Timeline, Input, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import React from 'react'
import { Col, Row } from 'antd'
import { TrophyFilled, CrownFilled, EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons'
import { ethers } from 'ethers'

function TrendingItem({ selectedTag }) {
  const { t, i18n } = useTranslation()
  // 判断当前语言是否为中文
  const isChinese = i18n.language === 'zh'

  // 创建一个 ethers.js 提供程序实例
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

  // 合约地址
  const transactionContractAddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6'
  const whiteListAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
  const iteTokenAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'

  // 合约ABI
  const transactionContractABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8'
        }
      ],
      name: 'Initialized',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'acceptor',
          type: 'address'
        }
      ],
      name: 'TransactionCancelled',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'acceptor',
          type: 'address'
        }
      ],
      name: 'TransactionCreated',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'acceptor',
          type: 'address'
        }
      ],
      name: 'TransactionDestroyed',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'acceptor',
          type: 'address'
        }
      ],
      name: 'TransactionFulfilled',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        }
      ],
      name: 'cancelTransaction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        }
      ],
      name: 'createTransaction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'destroyFund',
      outputs: [
        {
          internalType: 'contract DestroyFundInterface',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        }
      ],
      name: 'destroyTransaction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        }
      ],
      name: 'fulfillTransaction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'demandListAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'marginContractAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'iteTokenAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'profitContractAddress',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'destroyFundAddress',
          type: 'address'
        }
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'profitContract',
      outputs: [
        {
          internalType: 'contract ProfitContractInterface',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      name: 'transactions',
      outputs: [
        {
          internalType: 'address',
          name: 'acceptor',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'creatorLockDeposit',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'acceptorLockDeposit',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: 'isCreatorFulfilled',
          type: 'bool'
        },
        {
          internalType: 'bool',
          name: 'isAcceptorFulfilled',
          type: 'bool'
        },
        {
          internalType: 'bool',
          name: 'isCreatorCancelled',
          type: 'bool'
        },
        {
          internalType: 'bool',
          name: 'isAcceptorCancelled',
          type: 'bool'
        },
        {
          internalType: 'enum TransactionContract.TransactionStatus',
          name: 'status',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
  const whiteListABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'AddressAdded',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'AddressRemoved',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'addAllowedContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'isWhitelist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'removeAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'whitelist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
  const iteTokenABI = [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'burner',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newAmount',
          type: 'uint256'
        }
      ],
      name: 'IteTokenBurned',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'TokensSent',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        }
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'ammount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'burnIteToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256'
        }
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256'
        }
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        }
      ],
      name: 'sendTokens',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'whiteListAddress',
          type: 'address'
        }
      ],
      name: 'setWhitelistContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'whiteListContract',
      outputs: [
        {
          internalType: 'contract WhiteList',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
  // 创建合约实例
  const transactionContract = new ethers.Contract(transactionContractAddress, transactionContractABI, provider)
  const whiteList = new ethers.Contract(whiteListAddress, whiteListABI, provider)
  const iteToken = new ethers.Contract(iteTokenAddress, iteTokenABI, provider)

  useEffect(() => {
    // 在组件挂载后发送请求
    // 获取存储的变量
    const myToken = JSON.parse(localStorage.getItem('myToken'))
    console.log(myToken)
    console.log(myToken)
    // 设置自定义请求头
    const customHeaders = {
      Authorization: 'Bearer ' + myToken // 示例：添加授权头
    }
    // 创建一个包含自定义头的axios实例
    const axiosInstance = axios.create({
      baseURL: 'https://ite.haowugou.store/api/v1/tags/requests', // 替换成你的API地址
      headers: customHeaders
    })
    // 定义查询参数
    const queryParams = {
      page: '',
      pagesize: '',
      tagids: ''
    }
    // 发送带查询参数的GET请求
    axiosInstance
      .get('https://ite.haowugou.store/api/v1/tags/requests', { params: queryParams })
      .then(response => {
        // 处理从服务器返回的数据
        console.log(response.data)
        console.log(response.data.data.data[0])
        setData(response.data.data.data)
      })
      .catch(error => {
        // 处理请求错误
        console.error('请求失败', error)
      })
  }) // 空数组作为第二个参数确保只在组件挂载时发送一次请求

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isview, SetIsview] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

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
  // Modal 的显示与隐藏
  const handleRowClick = record => {
    setSelectedRow(record.key)
    showModal()
    // console.log(record.creator.avatar)
  }

  // 创建交易单的点击事件
  const createTransactionClick = async record => {
    // console.log(record)
    // 获取当前点击的需求单号
    const demandId = record.No
    console.log(demandId)

    // 检查用户是否已连接到以太坊网络
    if (window.ethereum && window.ethereum.selectedAddress) {
      // 使用 MetaMask 或类似的钱包提供商
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // 获取网络信息
      const network = await provider.getNetwork()
      console.log('网络名称:', network.name)
      console.log('网络ID:', network.chainId)

      // 获取区块号
      const blockNumber = await provider.getBlockNumber()
      console.log('当前区块号:', blockNumber)

      // 获取当前选定的地址
      const signer = provider.getSigner()
      const selectedAddress = await signer.getAddress()

      // 连接到以太坊测试网络
      const provider2 = ethers.getDefaultProvider('http://localhost:8545')

      // 获取账号列表
      const accounts = await provider2.listAccounts()

      // 获取第一个账号
      const firstAccount = accounts[0]

      console.log('当前选定地址:', selectedAddress)
      console.log('第一个地址:', firstAccount)

      // 创建具有签名者的合约实例
      const contractWithSigner = transactionContract.connect(signer)
      const contractWithSigner2 = whiteList.connect(provider2.getSigner(firstAccount))
      const contractWithSigner3 = iteToken.connect(signer)
      try {
        // 判断demandListAddress是否在白名单中
        const isWhitelisted = await contractWithSigner2.whitelist(transactionContractAddress)
        console.log(isWhitelisted)

        const demandId = 88

        if (isWhitelisted) {
          // 创建交易单（接受需求单）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.createTransaction(demandId, {
            gasLimit: 2000000,
            gasPrice: ethers.utils.parseUnits('100000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          if (isChinese) {
            message.success('成功创建交易单!')
          } else {
            message.success('Successfully created transaction!')
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('100000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('100000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 创建交易单（接受需求单）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.createTransaction(demandId, {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('100000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()
          if (isChinese) {
            message.success('成功创建交易单!')
          } else {
            message.success('Successfully created transaction!')
          }
        }
      } catch (error) {
        console.log('createTransaction 调用失败:', error)

        if (isChinese) {
          message.error('创建交易单失败!')
        } else {
          message.error('Failed to create transaction!')
        }
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

  const [data, setData] = useState([
    // {
    //   key: 'data',
    //   avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
    //   dashboardNeed: 'I want a basketball, like myco jodon...',
    //   dashboardProvide: 'i will provide a baseball. just you see...',
    //   dashboardDeposited: '10.5 USDT',
    //   dealTime: '01/01/2023 10:10:10',
    //   dealLocation: 'shijiazhuang hebei China'
    // }
  ])

  const filteredData = selectedTag ? data.filter(item => item.need.includes(selectedTag) || item.provide.includes(selectedTag)) : data

  const columns = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
      width: '0.1rem',
      align: 'center',
      render: (text, record, index) => index + 1
    },
    {
      title: t('List.Who'),
      dataIndex: 'creator.avatar',
      key: 'Who',
      width: '0.5rem',
      align: 'center',
      className: 'TrendingItemWho',
      render: (text, record) => (
        <div style={{ height: '0.15rem' }}>
          <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar1} onClick={() => handleRowClick(record)} />
        </div>
      )
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
      title: t('List.Location'),
      dataIndex: 'location',
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
          <Button size="small" style={{ backgroundColor: 'RGBA(122, 65, 252, 1)', color: '#fff', textAlign: 'center', fontSize: '0.06rem', borderRadius: '0.12rem', border: '0', marginRight: '0.04rem', borderColor: '#fff' }} onClick={() => createTransactionClick(record)}>
            {t('List.accept')}
          </Button>
        </div>
      )
    }
  ]

  return (
    <Row>
      <Col span={24}>
        {' '}
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 8 }}
          style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}
          rowClassName={record => (record.key === selectedRow ? 'selected-row' : '')}
        />
      </Col>
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
        <span style={{ color: 'RGBA(210, 210, 212, 1)', position: 'relative', top: '0.55rem', left: '-2.5rem', fontWeight: '700', marginLeft: '0.08rem', marginTop: '0.05rem' }}>{t('Portfolio.ACTIVITY')}</span>
        <Timeline
          style={{ marginTop: '0.6rem', marginLeft: '0.15rem', color: 'RGBA(206, 206, 209, 1)' }}
          items={[
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ width: '4.25rem', marginLeft: '0.1rem', height: '0.2rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Idun created this task</span>
                  <span>Feb 17, 2023 5:50 PM</span>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.4rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>kingweekend</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    4 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>can i work on this</p>
                  <p style={{ marginTop: '-0.08rem', color: 'RGBA(69, 181, 248, 1)' }}>@ifun</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.3rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>Deimos|Breakda</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    4 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>done</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <div style={{ backgroundColor: 'RGBA(43, 44, 56, 1)', width: '4.15rem', height: '0.3rem', marginLeft: '0.1rem', padding: '0.05rem', borderRadius: '0.03rem' }}>
                  <span>amosjvd</span>
                  <span style={{ marginLeft: '0.06rem', color: 'RGBA(124, 125, 131, 1)' }}>
                    2 <span>{t('Portfolio.days ago')}</span>
                  </span>
                  <p style={{ marginTop: '-0.02rem' }}>Submitted</p>
                </div>
              )
            },
            {
              dot: <Avatar src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />,
              children: (
                <>
                  <Input placeholder={t('Portfolio.Write a comment...')} style={{ background: 'RGBA(43, 44, 56, 1)', border: '0', marginLeft: '0.1rem', padding: '0.05rem', width: '4.25rem', height: '0.45rem', borderRadius: '0.03rem', paddingBottom: '0.25rem', color: '#fff' }} />
                </>
              )
            }
          ]}
        />
      </Modal>
    </Row>
  )
}

export default TrendingItem
