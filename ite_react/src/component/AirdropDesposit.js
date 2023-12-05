import { Statistic, Card, Button, Modal, Form, InputNumber, message } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import AirdropRecords from './AirdropRecords'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import React, { useMemo } from 'react'

function AirdropDesposit() {
  const { t, i18n } = useTranslation()

  // 判断当前语言是否为中文
  const isChinese = i18n.language === 'zh'

  // 创建一个 ethers.js 提供程序实例
  const provider = useMemo(() => new ethers.providers.JsonRpcProvider('http://localhost:8545'), [])

  // 合约地址
  const marginContractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'

  const marginContractABI = useMemo(
    () => [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'profitContractAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'destroyFundAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'whiteListAddress',
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
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'DepositAdded',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'DepositLocked',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'DepositUnlocked',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'DepositWithdrawn',
        type: 'event'
      },
      {
        inputs: [],
        name: 'addDeposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'destroyFund',
        outputs: [
          {
            internalType: 'address payable',
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
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'lockDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'profitContract',
        outputs: [
          {
            internalType: 'address payable',
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
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'setUserWithdrawableProfit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'account',
            type: 'uint256'
          }
        ],
        name: 'transferToDestroyFund',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'account',
            type: 'uint256'
          }
        ],
        name: 'transferToProfitContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'unlockDeposit',
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
        name: 'userLockProfit',
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
            name: '',
            type: 'address'
          }
        ],
        name: 'userWithdrawableProfit',
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
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'withdrawDeposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    []
  )

  const marginContract = useMemo(() => {
    return new ethers.Contract(marginContractAddress, marginContractABI, provider)
  }, [marginContractAddress, marginContractABI, provider])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const [totalDeposit, setTotalDeposit] = useState(0)
  const [totalLockDeposit, settotalLockDeposit] = useState(0)
  const [totalUnLockDeposit, settotalUnLockDeposit] = useState(0)

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
  const showModal2 = () => {
    setIsModalOpen2(true)
  }
  const handleOk2 = () => {
    setIsModalOpen2(false)
  }
  const handleCancel2 = () => {
    setIsModalOpen2(false)
  }
  const handleCreate2 = () => {
    setIsModalOpen2(false)
  }

  const finish = async values => {
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
      console.log(123)

      // 获取当前选定的地址
      const signer = provider.getSigner()
      const selectedAddress = await signer.getAddress()

      console.log('当前选定地址:', selectedAddress)
      // 创建具有签名者的合约实例
      const contractWithSigner = marginContract.connect(signer)

      // // 检查选择的币种是否为USDT
      // const currency = 'ETH' // 定义所需的币种为USDT
      // if (values.currency !== currency) {
      //   if (isChinese) {
      //     message.error('请选择正确的币种！')
      //   } else {
      //     message.error('请选择正确的币种！')
      //   }
      //   return
      // }

      try {
        const amount = values

        // 将输入的金额转为以太币
        const Deposit = amount['ETH'].toString()
        console.log(Deposit)

        // 添加保证金
        const transaction = await contractWithSigner.addDeposit({
          value: ethers.utils.parseEther(Deposit),
          gasLimit: 200000,
          gasPrice: ethers.utils.parseUnits('5000', 'gwei')
        })

        // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
        // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
        await transaction.wait()
        console.log('addDeposit 调用成功')

        // // 调用 userWithdrawableProfit 函数
        const withdrawableProfit = await marginContract.userWithdrawableProfit(selectedAddress)
        const withdrawableProfitInEther = ethers.utils.formatEther(withdrawableProfit)
        console.log('当前地址对应的可提取利润:', withdrawableProfitInEther)
        setTotalDeposit(withdrawableProfit)
        // 调用 userLockProfit 函数
        const LockProfit = await marginContract.userLockProfit(selectedAddress)
        const LockProfitInEther = ethers.utils.formatEther(LockProfit)
        console.log('当前地址对应的总锁定的保证金:', LockProfitInEther)
        settotalLockDeposit(withdrawableProfitInEther)
        // 计算下总的解锁的保证金数
        const totalUnlock = withdrawableProfitInEther - LockProfitInEther
        settotalUnLockDeposit(totalUnlock)

        if (isChinese) {
          message.success('成功添加保证金!')
        } else {
          message.success('Successfully added the deposit!')
        }
      } catch (error) {
        console.log('addDeposit 调用失败:', error)
        if (isChinese) {
          message.error('添加保证金失败!')
        } else {
          message.error('Failed to add deposit!')
        }
      }
    } else {
      console.log('未连接到以太坊网络')
    }

    // 隐藏Modal
    handleCreate()
  }
  const finish2 = async values => {
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

      console.log('当前选定地址:', selectedAddress)
      // 创建具有签名者的合约实例
      const contractWithSigner = marginContract.connect(signer)
      try {
        const amount = values
        if (amount['ETH']) {
          // 将输入的金额转为以太币
          const Deposit = amount['ETH'].toString()
          console.log(Deposit)

          // 提取保证金
          const transaction = await contractWithSigner.withdrawDeposit(ethers.utils.parseEther(Deposit), {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('5000', 'gwei')
          })

          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('withdrawDeposit 调用成功')

          // 调用 userWithdrawableProfit 函数
          const withdrawableProfit = await marginContract.userWithdrawableProfit(selectedAddress)
          const withdrawableProfitInEther = ethers.utils.formatEther(withdrawableProfit)
          console.log('当前地址对应的总保证金:', withdrawableProfitInEther)
          setTotalDeposit(withdrawableProfitInEther)
          // 调用 userLockProfit 函数
          const LockProfit = await marginContract.userLockProfit(selectedAddress)
          const LockProfitInEther = ethers.utils.formatEther(LockProfit)
          console.log('当前地址对应的总锁定的保证金:', LockProfitInEther)
          settotalLockDeposit(withdrawableProfitInEther)
          // 计算下总的解锁的保证金数
          const totalUnlock = withdrawableProfitInEther - LockProfitInEther
          settotalUnLockDeposit(totalUnlock)

          message.success('Successfully withdrawn the deposit!')
        } else {
          // 将输入的金额转为以太币
          const Deposit = amount['以太币'].toString()
          console.log(Deposit)

          // 提取保证金
          const transaction = await contractWithSigner.withdrawDeposit(ethers.utils.parseEther(Deposit), {
            gasLimit: 200000,
            gasPrice: ethers.utils.parseUnits('5000', 'gwei')
          })

          // 当发送一个交易后，它会被广播到网络上的节点进行处理和确认
          // transaction.wait() 方法会使代码等待交易被确认，直到交易被打包到一个区块中，并且达到你指定的确认要求
          await transaction.wait()
          console.log('withdrawDeposit 调用成功')

          // 调用 userWithdrawableProfit 函数
          const withdrawableProfit = await marginContract.userWithdrawableProfit(selectedAddress)
          const withdrawableProfitInEther = ethers.utils.formatEther(withdrawableProfit)
          console.log('当前地址对应的总保证金:', withdrawableProfitInEther)
          setTotalDeposit(withdrawableProfitInEther)
          // 调用 userLockProfit 函数
          const LockProfit = await marginContract.userLockProfit(selectedAddress)
          const LockProfitInEther = ethers.utils.formatEther(LockProfit)
          console.log('当前地址对应的总锁定的保证金:', LockProfitInEther)
          settotalLockDeposit(withdrawableProfitInEther)
          // 计算下总的解锁的保证金数
          const totalUnlock = withdrawableProfitInEther - LockProfitInEther
          settotalUnLockDeposit(totalUnlock)

          message.success('成功提取保证金!')
        }
      } catch (error) {
        console.log('withdrawDeposit 调用失败:', error)
        message.error('提取保证金失败!')
      }
    } else {
      console.log('未连接到以太坊网络')
    }

    // 隐藏Modal
    handleCreate()
  }

  // 用来计算各个存款，用于渲染页面
  useEffect(() => {
    const fetchTotalDeposit = async () => {
      // 检查用户是否已连接到以太坊网络
      if (window.ethereum && window.ethereum.selectedAddress) {
        // 使用 MetaMask 或类似的钱包提供商
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // 获取当前选定的地址
        const signer = provider.getSigner()
        const selectedAddress = await signer.getAddress()

        const withdrawableProfit = await marginContract.userWithdrawableProfit(selectedAddress)
        const withdrawableProfitInEther = ethers.utils.formatEther(withdrawableProfit)
        setTotalDeposit(withdrawableProfitInEther)

        const LockProfit = await marginContract.userLockProfit(selectedAddress)
        const LockProfitInEther = ethers.utils.formatEther(LockProfit)
        settotalLockDeposit(LockProfitInEther)
        // 计算下总的解锁的保证金数
        const totalUnlock = withdrawableProfitInEther - LockProfitInEther
        settotalUnLockDeposit(totalUnlock)
      } else {
        console.log('未连接到以太坊网络')
      }
    }

    fetchTotalDeposit()
  })

  return (
    <div>
      <div className="AirDropDesposit" style={{ backgroundColor: 'RGBA(32, 30, 68, 1)', border: '0', width: '5.46rem', height: '1.55rem', borderRadius: '0.1rem', marginTop: '0rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Your Total Desposit')} value={totalDeposit} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }} onClick={showModal}>
            {t('Airdrop.Add')}
          </Button>
          <Modal className="AirdropDepositModal" title={t('Airdrop.addedETH')} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} destroyOnClose="true">
            <Form
              className="AirfropDespositFrom"
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
              <Form.Item
                label="ETH"
                name="ETH"
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <InputNumber size="large" min={1} max={100000} style={{ width: '1.95rem', height: '0.2rem', borderColor: '#000', marginLeft: '-0.1rem', marginTop: '-0.1rem' }} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'RGBA(86, 57, 255, 1)', marginLeft: '2rem' }} onClick={handleCreate}>
                  {t('Airdrop.Add')}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Card>
        <Card className="AirDropDespositCardTwo" style={{ width: '1.3rem', height: '0.9rem' }}>
          <QuestionCircleOutlined style={{ color: 'RGBA(166, 57, 176, 1)', position: 'absolute', top: '0.15rem', left: '0.65rem' }} />
          <Statistic title={t('Airdrop.Lock Desposit')} value={totalLockDeposit} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
        </Card>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Unlock Desposit')} value={totalUnLockDeposit} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }} onClick={showModal2}>
            {t('Airdrop.Withdraw')}
          </Button>
          <Modal className="AirdropDepositModal" title={t('Airdrop.withdrawnETH')} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} footer={null} destroyOnClose="true">
            <Form
              className="AirfropDespositFrom"
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
              onFinish={finish2}
            >
              <Form.Item
                label={t('Airdrop.ETH')}
                name={t('Airdrop.ETH')}
                rules={[
                  {
                    required: true
                  }
                ]}
              >
                <InputNumber size="large" min={1} max={100000} style={{ width: '1.95rem', height: '0.2rem', borderColor: '#000', marginLeft: '-0.1rem', marginTop: '-0.1rem' }} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'RGBA(86, 57, 255, 1)', marginLeft: '2rem' }} onClick={handleCreate2}>
                  {t('Airdrop.Withdraw')}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </div>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '-0.3rem' }}>{t('Airdrop.Info')}</span>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '1.75rem' }}>{t('Airdrop.Records')}</span>
      <AirdropRecords></AirdropRecords>
    </div>
  )
}

export default AirdropDesposit
