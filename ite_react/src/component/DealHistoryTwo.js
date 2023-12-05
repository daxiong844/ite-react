import { Avatar, Button, Table, message } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ethers } from 'ethers'

function DealHistoryTwo({ selectedTag }) {
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

  // 跟踪同意按钮的点击与否
  const [agreeClicked, setAgreeClicked] = useState(false)

  const handleAgree = async record => {
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
      console.log('第一个地址:11111')
      console.log('第一个地址:111')

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
          // 接受交易单（甲或者乙接收）
          // const nonce3 = await provider.getTransactionCount(selectedAddress)

          try {
            const transaction3 = await contractWithSigner.fulfillTransaction(demandId, {
              gasLimit: 3000000,
              gasPrice: ethers.utils.parseUnits('1000000', 'gwei')
              // nonce: nonce3
            })

            await transaction3.wait()

            // 按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'waiting you carry out',
                  showBtn1: false,
                  showBtn2: false
                }
              }
              return d
            })
            setData(updatedData)
            setAgreeClicked(true) // 设置同意按钮点击标志为true
            console.log(updatedData)

            if (isChinese) {
              message.success('需求单的创建者成功履行交易单!')
            } else {
              message.success('The creator has successfully fulfilled the transaction for the demand order!')
            }
          } catch {
            if (isChinese) {
              message.error('需求单的创建者履行交易单失败!')
            } else {
              message.error('The creator failed to fulfill the transaction for the demand order!')
            }
          }

          // // 获取交易单的结构体
          // const transaction4 = await transactionContract.transactions(demandId)
          // // 获取 Transaction 结构体中的各个字段值
          // const status = transaction4.status
          // // 如果交易单状态为甲方已履约
          // if (status === 0) {
          //   // 按钮的显示与隐藏
          //   const updatedData = data.map(d => {
          //     if (d.key === record.key) {
          //       return {
          //         ...d,
          //         dashboardStatus: 'waiting you carry out',
          //         showBtn1: false,
          //         showBtn2: false
          //       }
          //     }
          //     return d
          //   })
          //   setData(updatedData)
          //   setAgreeClicked(true) // 设置同意按钮点击标志为true
          //   console.log(updatedData)

          //   if (isChinese) {
          //     message.success('需求单的创建者成功履行交易单!')
          //   } else {
          //     message.success('The creator has successfully fulfilled the transaction for the demand order!')
          //   }
          // } else {
          //   if (isChinese) {
          //     message.error('需求单的创建者履行交易单失败!')
          //   } else {
          //     message.error('The creator failed to fulfill the transaction for the demand order!')
          //   }
          // }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 接受交易单（甲或者乙接收）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.fulfillTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const status = transaction4.isCreatorFulfilled
          // 如果交易单状态为甲方已履约
          if (status === true) {
            // 按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'waiting you carry out',
                  showBtn1: false,
                  showBtn2: false
                }
              }
              return d
            })
            setData(updatedData)
            setAgreeClicked(true) // 设置同意按钮点击标志为true

            if (isChinese) {
              message.success('需求单的创建者成功履行交易单!')
            } else {
              message.success('The creator has successfully fulfilled the transaction for the demand order!')
            }
          } else {
            if (isChinese) {
              message.error('需求单的创建者履行交易单失败!')
            } else {
              message.error('The creator failed to fulfill the transaction for the demand order!')
            }
          }
        }
      } catch (error) {
        console.log('fulfillTransaction 调用失败:', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

  const handleUnagree = async record => {
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
          // 取消交易单（甲或者乙取消）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.cancelTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const isCreatorCancelled = transaction4.isCreatorCancelled
          const isAcceptorCancelled = transaction4.isAcceptorCancelled

          // 如果交易单状态为甲方已履约
          if (isCreatorCancelled || isAcceptorCancelled) {
            // 控制不同意按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'others apply for cancel',
                  showBtn1: false,
                  showBtn2: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('一方取消交易单成功!')
            } else {
              message.success('One party has successfully canceled the transaction!')
            }
          } else {
            if (isChinese) {
              message.error('一方取消交易单失败!')
            } else {
              message.error('One party failed to cancel the transaction!')
            }
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 取消交易单（甲或者乙取消）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.cancelTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const isCreatorCancelled = transaction4.isCreatorCancelled
          const isAcceptorCancelled = transaction4.isAcceptorCancelled

          // 如果交易单状态为甲方已履约
          if (isCreatorCancelled || isAcceptorCancelled) {
            // 控制不同意按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'others apply for cancel',
                  showBtn1: false,
                  showBtn2: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('一方取消交易单成功!')
            } else {
              message.success('One party has successfully canceled the transaction!')
            }
          } else {
            if (isChinese) {
              message.error('一方取消交易单失败!')
            } else {
              message.error('One party failed to cancel the transaction!')
            }
          }
        }
      } catch (error) {
        console.log('fulfillTransaction 调用失败:', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

  const handleCarryOut = async record => {
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
          // 接受交易单（甲或者乙接收）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.fulfillTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const status = transaction4.status
          // 如果交易单状态为已完成
          if (status === 1) {
            // 判断必须先甲方点击了同意按钮之后，乙方才可以点击执行按钮
            if (agreeClicked) {
              // 控制按钮的显示与隐藏
              const updatedData = data.map(d => {
                if (d.key === record.key) {
                  return {
                    ...d,
                    dashboardStatus: 'Done',
                    showBtn1: false,
                    showBtn2: false,
                    showBtn3: false,
                    showBtn4: false,
                    showBtn5: false
                  }
                }
                // 如果未找到匹配的记录，则继续保持原样
                return d
              })
              setData(updatedData)
            } else {
              if (isChinese) {
                message.error('创建者还未点击同意交易单!')
              } else {
                message.error('The creator has not yet agreed to the transaction!')
              }
            }

            if (isChinese) {
              message.success('需求单的接受者成功履行交易单!')
            } else {
              message.success('The acceptor has successfully fulfilled the transaction for the demand order!')
            }
          } else {
            if (isChinese) {
              message.error('需求单的接收者履行交易单失败!')
            } else {
              message.error('The acceptor failed to fulfill the transaction for the demand order!')
            }
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 接受交易单（甲或者乙接收）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.fulfillTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const status = transaction4.status
          // 如果交易单状态为已完成
          if (status === 1) {
            // 判断必须先甲方点击了同意按钮之后，乙方才可以点击执行按钮
            if (agreeClicked) {
              // 控制按钮的显示与隐藏
              const updatedData = data.map(d => {
                if (d.key === record.key) {
                  return {
                    ...d,
                    dashboardStatus: 'Done',
                    showBtn1: false,
                    showBtn2: false,
                    showBtn3: false,
                    showBtn4: false,
                    showBtn5: false
                  }
                }
                // 如果未找到匹配的记录，则继续保持原样
                return d
              })
              setData(updatedData)
            } else {
              if (isChinese) {
                message.error('创建者还未点击同意交易单!')
              } else {
                message.error('The creator has not yet agreed to the transaction!')
              }
            }

            if (isChinese) {
              message.success('需求单的接受者成功履行交易单!')
            } else {
              message.success('The acceptor has successfully fulfilled the transaction for the demand order!')
            }
          } else {
            if (isChinese) {
              message.error('需求单的接收者履行交易单失败!')
            } else {
              message.error('The acceptor failed to fulfill the transaction for the demand order!')
            }
          }
        }
      } catch (error) {
        console.log('fulfillTransaction 调用失败:', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

  const handleCancel = async record => {
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
          // 取消交易单（甲或者乙取消）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.cancelTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const isCreatorCancelled = transaction4.isCreatorCancelled
          const isAcceptorCancelled = transaction4.isAcceptorCancelled

          // 如果交易单状态为甲乙都取消
          if (isCreatorCancelled && isAcceptorCancelled) {
            // 控制取消按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'Cancel',
                  showBtn1: false,
                  showBtn2: false,
                  showBtn3: false,
                  showBtn4: false,
                  showBtn5: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('成功取消交易单!')
            } else {
              message.success('The transaction has been successfully canceled!')
            }
          } else {
            if (isChinese) {
              message.error('取消交易单失败!')
            } else {
              message.error('Failed to cancel the transaction!')
            }
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 取消交易单（甲或者乙取消）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.cancelTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const isCreatorCancelled = transaction4.isCreatorCancelled
          const isAcceptorCancelled = transaction4.isAcceptorCancelled

          // 如果交易单状态为甲乙都取消
          if (isCreatorCancelled && isAcceptorCancelled) {
            // 控制取消按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'Cancel',
                  showBtn1: false,
                  showBtn2: false,
                  showBtn3: false,
                  showBtn4: false,
                  showBtn5: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('成功取消交易单!')
            } else {
              message.success('The transaction has been successfully canceled!')
            }
          } else {
            if (isChinese) {
              message.error('取消交易单失败!')
            } else {
              message.error('Failed to cancel the transaction!')
            }
          }
        }
      } catch (error) {
        console.log('fulfillTransaction 调用失败:', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

  const handleRuin = async record => {
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
          // 摧毁交易单（甲或者乙摧毁）
          const nonce3 = await provider.getTransactionCount(selectedAddress)

          const transaction3 = await contractWithSigner.destroyTransaction(demandId, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce3
          })

          await transaction3.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const status = transaction4.status

          // 如果交易单状态为摧毁
          if (status === 3) {
            // 控制摧毁按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'Ruind',
                  showBtn1: false,
                  showBtn2: false,
                  showBtn3: false,
                  showBtn4: false,
                  showBtn5: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('成功摧毁交易单!')
            } else {
              message.success('The transaction has been successfully Ruind!')
            }
          } else {
            if (isChinese) {
              message.error('摧毁交易单失败!')
            } else {
              message.error('Failed to Ruind the transaction!')
            }
          }
        } else {
          // 获得一下whiteList合约的实例
          const nonce1 = await provider.getTransactionCount(firstAccount)

          const transaction = await contractWithSigner3.setWhitelistContract(whiteListAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce1
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('setWhitelistContract 调用成功')

          // 将creator添加到白名单中
          const nonce2 = await provider.getTransactionCount(firstAccount)

          const transaction2 = await contractWithSigner2.addAllowedContract(transactionContractAddress, {
            gasLimit: 3000000,
            gasPrice: ethers.utils.parseUnits('1000000', 'gwei'),
            nonce: nonce2
          })
          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction2.wait()

          // 获取交易单的结构体
          const transaction4 = await transactionContract.transactions(demandId)
          // 获取 Transaction 结构体中的各个字段值
          const status = transaction4.status

          // 如果交易单状态为摧毁
          if (status === 3) {
            // 控制摧毁按钮的显示与隐藏
            const updatedData = data.map(d => {
              if (d.key === record.key) {
                return {
                  ...d,
                  dashboardStatus: 'Ruind',
                  showBtn1: false,
                  showBtn2: false,
                  showBtn3: false,
                  showBtn4: false,
                  showBtn5: false
                }
              }
              return d
            })
            setData(updatedData)

            if (isChinese) {
              message.success('成功摧毁交易单!')
            } else {
              message.success('The transaction has been successfully Ruind!')
            }
          } else {
            if (isChinese) {
              message.error('摧毁交易单失败!')
            } else {
              message.error('Failed to Ruind the transaction!')
            }
          }
        }
      } catch (error) {
        console.log('destroyTransaction 调用失败:', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }

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
      title: t('Dashboard.Who'),
      dataIndex: 'who',
      key: 'who',
      width: '0.5rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ height: '0.15rem' }}>
          <Avatar style={{ marginLeft: '-0.01rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar1} />
          <Avatar style={{ marginLeft: '-0.05rem', width: '0.15rem', height: '0.15rem' }} src={record.avatar2} />
        </div>
      )
    },
    {
      title: t('Dashboard.Need'),
      dataIndex: 'dashboardNeed',
      key: 'dashboardNeed',
      width: '1.1rem',
      align: 'center'
    },
    {
      title: t('Dashboard.Provide'),
      dataIndex: 'dashboardProvide',
      key: 'dashboardProvide',
      width: '1.1rem',
      align: 'center'
    },
    {
      title: t('DealHistoryTwo.Status'),
      dataIndex: 'dashboardStatus',
      key: 'dashboardStatus',
      width: '0.5rem',
      align: 'center',
      className: 'DealHistoryTwoStatus',
      render: text => {
        let color
        if (text === 'waiting you carry out') {
          color = 'rgba(248, 48, 5, 1)'
        } else if (text === 'others apply for cancel') {
          color = 'RGBA(213, 45, 16, 1)'
        } else if (text === 'Done') {
          color = 'RGBA(46, 212, 122, 1)'
        } else if (text === 'Cancel') {
          color = 'rgba(136, 90, 248, 1)'
        } else {
          color = 'rgba(129, 142, 155, 1)'
        }
        return <span style={{ color }}>{text}</span>
      }
    },
    {
      title: t('Deal.Time'),
      dataIndex: 'dealTime',
      key: 'dealTime',
      align: 'center'
    },
    {
      title: t('Deal.Earning'),
      dataIndex: 'dealEarning',
      key: 'dealEarning',
      align: 'center'
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: '0.1rem',
      align: 'center',
      render: (text, record) => (
        <div style={{ display: 'flex' }}>
          {record.showBtn1 && (
            <Button className="dealHistoryTwoButton" size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleAgree(record)}>
              {t('DealHistoryTwo.Agree')}
            </Button>
          )}
          {record.showBtn2 && (
            <Button className="dealHistoryTwoButton" size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleUnagree(record)}>
              {t('DealHistoryTwo.Unagree')}
            </Button>
          )}
          {record.showBtn3 && (
            <Button className="dealHistoryTwoButton" size="small" style={{ backgroundColor: 'RGBA(248, 48, 5, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleCarryOut(record)}>
              {t('DealHistoryTwo.carry out')}
            </Button>
          )}
          {record.showBtn4 && (
            <Button className="dealHistoryTwoButton" size="small" style={{ backgroundColor: 'RGBA(136, 90, 248, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem', marginRight: '0.05rem' }} onClick={() => handleCancel(record)}>
              {t('DealHistoryTwo.Cancel')}
            </Button>
          )}
          {record.showBtn5 && (
            <Button className="dealHistoryTwoButton" size="small" style={{ backgroundColor: 'RGBA(129, 142, 155, 1)', color: '#fff', border: 'none', textAlign: 'center', fontSize: '0.06rem' }} onClick={() => handleRuin(record)}>
              {t('DealHistoryTwo.Ruin')}
            </Button>
          )}
        </div>
      )
    }
  ]

  const [data, setData] = useState([
    {
      key: '1',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '2',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '3',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '4',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '5',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '6',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '7',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '8',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '9',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '10',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '11',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '12',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    },
    {
      key: '13',
      avatar1: 'https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca',
      avatar2: 'https://i03piccdn.sogoucdn.com/5f54b8b788776e92',
      dashboardNeed: 'I want a basketball, like myco jodon...',
      dashboardProvide: 'i will provide a baseball. just you see...',
      dashboardStatus: '  ',
      dealTime: '01/01/2023 10:10:10',
      dealEarning: '100 Ite',
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true
    }
    // add more data here
  ])

  const filteredData = selectedTag ? data.filter(item => item.dashboardStatus.includes(selectedTag)) : data
  // const filteredData = selectedTag ? data.filter(item => item.dashboardStatus.props.children.includes(selectedTag)) : data

  return <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 8 }} style={{ position: 'relative', marginTop: '0.07rem', width: '5.94rem', borderRadius: '0.1rem', background: '#201E43', textAlign: 'center', fontSize: '0.07rem', padding: '0.08rem' }}></Table>
}

export default DealHistoryTwo
