import axios from 'axios'
import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Upload, Button, Select, InputNumber, message } from 'antd'
import { useTranslation } from 'react-i18next'
import NewItemText from './NewItemText'
import React from 'react'
const { ethers } = require('ethers')

const { Option } = Select

const NewItem = ({ onCreate }) => {
  // 创建一个 ethers.js 提供程序实例
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

  // 合约地址
  const demandListAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
  const whiteListAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
  const iteTokenAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
  // 合约ABI
  const demandListABI = [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'iteTokenAddress',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
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
          indexed: false,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'deposit',
          type: 'uint256'
        }
      ],
      name: 'DemandCreated',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'demandId',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'creatorDeposit',
          type: 'uint256'
        }
      ],
      name: 'addDemand',
      outputs: [],
      stateMutability: 'nonpayable',
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
      name: 'demands',
      outputs: [
        {
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'deposit',
          type: 'uint256'
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
  // 实例化智能合约对象
  const demandList = new ethers.Contract(demandListAddress, demandListABI, provider)
  const whiteList = new ethers.Contract(whiteListAddress, whiteListABI, provider)
  const iteToken = new ethers.Contract(iteTokenAddress, iteTokenABI, provider)

  const { t } = useTranslation()

  const finish = async values => {
    // 检查用户是否已连接到以太坊网络
    if (window.ethereum && window.ethereum.selectedAddress) {
      // 使用 MetaMask 或类似的钱包提供商
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // 获取网络信息
      const network = await provider.getNetwork()
      console.log('网络名称:', network.name)
      console.log('网络ID:', network.chainId)
      console.log(123)
      console.log(456)
      console.log(123)

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
      const contractWithSigner = iteToken.connect(signer)
      const contractWithSigner2 = whiteList.connect(provider2.getSigner(firstAccount))
      const contractWithSigner3 = demandList.connect(signer)
      try {
        const amount = await values

        // 判断demandListAddress是否在白名单中
        const isWhitelisted = await contractWithSigner2.whitelist(demandListAddress)
        console.log(isWhitelisted)

        if (isWhitelisted) {
          if (amount['价值']) {
            // 将输入的金额转为以太币
            const creatorDeposit = amount['价值'].toString()

            // 获取存储的变量
            const myToken = JSON.parse(localStorage.getItem('myToken'))
            console.log(myToken)
            console.log(values)

            // 设置自定义请求头
            const customHeaders = {
              Authorization: 'Bearer ' + myToken // 示例：添加授权头
            }
            // 创建一个包含自定义头的axios实例
            const axiosInstance = axios.create({
              baseURL: 'https://ite.haowugou.store/api/v1/requests', // 替换成你的API地址
              headers: customHeaders
            })
            // 要发送的数据
            const postData = {
              need: values.输入,
              provide: values.提供,
              margin: values.价值,
              lang: values.语言,
              location: values.位置
            }
            // 发送POST请求
            axiosInstance
              .post('https://ite.haowugou.store/api/v1/requests', postData)
              .then(async response => {
                // 处理从服务器返回的数据
                console.log(response.data)
                console.log(response.data.data.uuid)

                const demandId = response.data.data.uuid

                // 调用智能合约的addDemand方法
                const nonce3 = await provider.getTransactionCount(selectedAddress)

                const transaction3 = await contractWithSigner3.addDemand(demandId, ethers.utils.parseEther(creatorDeposit), {
                  gasLimit: 200000,
                  gasPrice: ethers.utils.parseUnits('5000', 'gwei'),
                  nonce: nonce3
                })
                await transaction3.wait()
                console.log('addDemand 调用成功')

                // 过滤器
                const filter = demandList.filters.DemandCreated()

                // 监听事件
                demandList.on(filter, (demandId, creator, deposit) => {
                  console.log('DemandCreated event received:')
                  console.log('Demand ID:', demandId.toString())
                  console.log('Creator:', creator)
                  console.log('Deposit:', deposit)
                })
                message.success('成功创建需求单!')
              })
              .catch(error => {
                // 处理请求错误
                console.error('请求失败', error)
              })
          } else {
            // 将输入的金额转为以太币
            const creatorDeposit = amount['Value'].toString()

            // 获取存储的变量
            const myToken = JSON.parse(localStorage.getItem('myToken'))
            console.log(myToken)
            console.log(values)

            // 设置自定义请求头
            const customHeaders = {
              Authorization: 'Bearer ' + myToken // 示例：添加授权头
            }
            // 创建一个包含自定义头的axios实例
            const axiosInstance = axios.create({
              baseURL: 'https://ite.haowugou.store/api/v1/requests', // 替换成你的API地址
              headers: customHeaders
            })
            // 要发送的数据
            const postData = {
              need: values.Input,
              provide: values.Provide,
              margin: values.Value,
              lang: values.Language,
              location: values.Location
            }
            // 发送POST请求
            axiosInstance
              .post('https://ite.haowugou.store/api/v1/requests', postData)
              .then(async response => {
                // 处理从服务器返回的数据
                console.log(response.data)

                const demandId = response.data.data.uuid

                // 调用智能合约的addDemand方法
                const nonce3 = await provider.getTransactionCount(selectedAddress)

                const transaction3 = await contractWithSigner3.addDemand(demandId, creatorDeposit, {
                  gasLimit: 200000,
                  gasPrice: ethers.utils.parseUnits('5000', 'gwei'),
                  nonce: nonce3
                })
                await transaction3.wait()
                console.log('addDemand 调用成功')

                // 过滤器
                const filter = demandList.filters.DemandCreated()

                // 监听事件
                demandList.on(filter, (demandId, creator, deposit) => {
                  console.log('DemandCreated event received:')
                  console.log('Demand ID:', demandId.toString())
                  console.log('Creator:', creator)
                  console.log('Deposit:', deposit.toString())
                })
                message.success('Successfully created a demand!')
              })
              .catch(error => {
                // 处理请求错误
                console.error('请求失败', error)
              })
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner.setWhitelistContract(whiteListAddress, {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('5000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(demandListAddress, {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('5000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()
          if (amount['价值']) {
            // 将输入的金额转为以太币
            const creatorDeposit = amount['价值'].toString()

            // 获取存储的变量
            const myToken = JSON.parse(localStorage.getItem('myToken'))
            console.log(myToken)
            console.log(values)
            // 设置自定义请求头
            const customHeaders = {
              Authorization: 'Bearer ' + myToken // 示例：添加授权头
            }
            // 创建一个包含自定义头的axios实例
            const axiosInstance = axios.create({
              baseURL: 'https://ite.haowugou.store/api/v1/requests', // 替换成你的API地址
              headers: customHeaders
            })
            // 要发送的数据
            const postData = {
              need: values.输入,
              provide: values.提供,
              margin: values.价值,
              lang: values.语言,
              location: values.位置
            }
            // 发送POST请求
            axiosInstance
              .post('https://ite.haowugou.store/api/v1/requests', postData)
              .then(async response => {
                // 处理从服务器返回的数据
                console.log(response.data)

                const demandId = response.data.data.uuid

                // 将字符串转换为 uint256 类型
                // const uintValue = ethers.utils.parseUnits(creatorDeposit, 0)

                // 调用智能合约的addDemand方法
                const nonce3 = await provider.getTransactionCount(selectedAddress)

                const transaction3 = await contractWithSigner3.addDemand(demandId, creatorDeposit, {
                  gasLimit: 200000,
                  gasPrice: ethers.utils.parseUnits('5000', 'gwei'),
                  nonce: nonce3
                })
                await transaction3.wait()
                console.log('addDemand 调用成功')
                console.log(123)

                // 过滤器
                const filter = demandList.filters.DemandCreated()

                // 监听事件
                demandList.on(filter, (demandId, creator, deposit) => {
                  console.log('DemandCreated event received:')
                  console.log('Demand ID:', demandId.toString())
                  console.log('Creator:', creator)
                  console.log('Deposit:', deposit)
                })
                message.success('成功创建需求单!')
              })
              .catch(error => {
                // 处理请求错误
                console.error('请求失败', error)
              })
          } else {
            // 将输入的金额转为以太币
            const creatorDeposit = amount['Value'].toString()

            // 获取存储的变量
            const myToken = JSON.parse(localStorage.getItem('myToken'))
            console.log(myToken)
            console.log(values)

            // 设置自定义请求头
            const customHeaders = {
              Authorization: 'Bearer ' + myToken // 示例：添加授权头
            }
            // 创建一个包含自定义头的axios实例
            const axiosInstance = axios.create({
              baseURL: 'https://ite.haowugou.store/api/v1/requests', // 替换成你的API地址
              headers: customHeaders
            })
            // 要发送的数据
            const postData = {
              need: values.Input,
              provide: values.Provide,
              margin: values.Value,
              lang: values.Language,
              location: values.Location
            }
            // 发送POST请求
            axiosInstance
              .post('https://ite.haowugou.store/api/v1/requests', postData)
              .then(async response => {
                // 处理从服务器返回的数据
                console.log(response.data)

                const demandId = response.data.data.uuid

                // 调用智能合约的addDemand方法
                const transaction3 = await contractWithSigner3.addDemand(demandId, creatorDeposit, {
                  gasLimit: 200000,
                  gasPrice: ethers.utils.parseUnits('5000', 'gwei')
                })
                await transaction3.wait()
                console.log('addDemand 调用成功')

                // 过滤器
                const filter = demandList.filters.DemandCreated()

                // 监听事件
                demandList.on(filter, (demandId, creator, deposit) => {
                  console.log('DemandCreated event received:')
                  console.log('Demand ID:', demandId.toString())
                  console.log('Creator:', creator)
                  console.log('Deposit:', deposit.toString())
                })
                message.success('Successfully created a demand!')
              })
              .catch(error => {
                // 处理请求错误
                console.error('请求失败', error)
              })
          }
        }
      } catch (error) {
        console.log('addDemand 调用失败:', error)
        // 调用父组件传递的回调函数，隐藏Modal
        onCreate()
        message.error('创建需求单失败!')
      }
    } else {
      console.log('未连接到以太坊网络')
    }

    // 调用父组件传递的回调函数，隐藏Modal
    onCreate()
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="vertical"
        disabled={false}
        style={{
          maxWidth: 600,
          marginLeft: '0.1rem'
        }}
        onFinish={finish}
      >
        <div className="newItemLeft" style={{ width: '2.92rem', height: '3.2rem' }}>
          <Form.Item
            label={t('newItemCard.Input')}
            name={t('newItemCard.Input')}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              type="textArea"
              style={{ width: '2.8rem', height: '0.8rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)', paddingBottom: '0.65rem', color: 'rgba(236, 235, 246, 0.80)' }}
              placeholder="input something that you need. eg:i want to get a baseketball...."
            />
          </Form.Item>
          <Form.Item valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined style={{ color: 'rgba(196, 196, 196, 0.40)', fontSize: '0.15rem' }} />
                <div
                  style={{
                    marginTop: 0
                  }}
                ></div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            label={t('newItemCard.Provide')}
            name={t('newItemCard.Provide')}
            rules={[
              {
                required: true
              }
            ]}
            style={{ marginTop: '-0.1rem' }}
            className="newItemProvide"
          >
            <Input
              type="textArea"
              style={{ width: '2.8rem', height: '0.8rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)', paddingBottom: '0.65rem', color: 'rgba(236, 235, 246, 0.80)' }}
              placeholder="input something that you will provide. eg:i will get you a baseketball...."
            />
          </Form.Item>
          <Form.Item valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined style={{ color: 'rgba(196, 196, 196, 0.40)', fontSize: '0.15rem' }} />
                <div
                  style={{
                    marginTop: 0
                  }}
                ></div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'RGBA(86, 57, 255, 1)', width: '2.8rem' }}>
              {t('newItemCard.CREATE')}
            </Button>
          </Form.Item>
        </div>
        <div className="newItemRight" style={{ position: 'absolute', top: '0.1rem', right: '0.1rem', width: '2.25rem', height: '3.05rem', paddingTop: '0.14rem', paddingLeft: '0.1rem' }}>
          <div style={{ width: '100%', height: '0.35rem', display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item
              label={t('newItemCard.Value')}
              name={t('newItemCard.Value')}
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginTop: '-0.13rem' }}
            >
              <InputNumber size="large" min={1} max={100000} style={{ width: '1.95rem', height: '0.22rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the value of that you will provide" />
            </Form.Item>
            <span style={{ display: 'block', width: '0.22rem', color: 'rgba(236, 235, 246, 0.60)', fontSize: '0.08rem', position: 'absolute', top: '0.23rem', left: '2.12rem' }}>USDT</span>
          </div>
          <Form.Item
            label={t('newItemCard.Language')}
            name={t('newItemCard.Language')}
            rules={[
              {
                required: true
              }
            ]}
            labelCol={{
              span: 8
            }}
            className="newItemLanguage"
          >
            <Select placeholder={t('newItemCard.select')} className="newItemSelect">
              <Option value="en" className="newItemSelectOption">
                {t('newItemCard.en-US')}
              </Option>
              <Option value="zh" className="newItemSelectOption">
                {t('newItemCard.zh-CN')}
              </Option>
            </Select>
            {/* <Dropdown overlay={menu}>
              <Button className="newItemButton" style={{ background: 'RGBA(20, 20, 20, 1)', width: '1rem', height: '0.2rem', color: '#ECEBF6', fontSize: '0.07rem' }}>
                {t('newItemCard.select')}
                <DownOutlined style={{ fontSize: '0.05rem' }} />
              </Button>
            </Dropdown> */}
          </Form.Item>
          <Form.Item
            label={t('newItemCard.Location')}
            name={t('newItemCard.Location')}
            style={{ marginTop: '-0.1rem' }}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input style={{ width: '2.24rem', height: '0.25rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the location where you will provide in" />
          </Form.Item>
          <Form.Item style={{ marginTop: '-0.1rem' }}>
            <NewItemText></NewItemText>
          </Form.Item>
        </div>
      </Form>
    </>
  )
}
export default NewItem
