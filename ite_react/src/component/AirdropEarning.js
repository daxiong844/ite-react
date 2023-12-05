import { Statistic, Card, Button, Modal, Form, InputNumber } from 'antd'
import AirdropRecordsEarning from './AirdropRecordsEarning'
import { useTranslation } from 'react-i18next'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

function AirdropEarning() {
  const { t } = useTranslation()

  // 创建一个 ethers.js 提供程序实例
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

  // 合约地址
  const iteTokenAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
  const profitContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const destroyFundAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

  // 合约ABI
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
  const profitContractABI = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_platform',
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
          name: 'platformAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'profitAmount',
          type: 'uint256'
        }
      ],
      name: 'PlatformProfitWithdrawn',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'userAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'shareAmount',
          type: 'uint256'
        }
      ],
      name: 'ProfitShareAdded',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'userAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'profitAmount',
          type: 'uint256'
        }
      ],
      name: 'UserProfitWithdrawn',
      type: 'event'
    },
    {
      inputs: [],
      name: 'SharesTotal',
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
          name: 'userAddress',
          type: 'address'
        }
      ],
      name: 'addProfitShare',
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
      name: 'addressToShare',
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
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'addresses',
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
      inputs: [],
      name: 'platform',
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
      inputs: [],
      name: 'platformProfit',
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
      name: 'profitAssignRule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'usersProfit',
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
      name: 'withdrawPlatformProfit',
      outputs: [],
      stateMutability: 'nonpayable',
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
      name: 'withdrawUserProfit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      stateMutability: 'payable',
      type: 'receive'
    }
  ]
  const destroyFundABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'userAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'shareAmount',
          type: 'uint256'
        }
      ],
      name: 'DestroyShareAdded',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'userAddress',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'profitAmount',
          type: 'uint256'
        }
      ],
      name: 'UserDestroyProfitWithdrawn',
      type: 'event'
    },
    {
      inputs: [],
      name: 'FundAssignRule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'userAddress',
          type: 'address'
        }
      ],
      name: 'addDestroyShare',
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
      name: 'addressToDestroyShare',
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
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'addresses',
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
      inputs: [],
      name: 'destroySharesTotal',
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
      name: 'tokenDestroyProfit',
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
      name: 'userDestroyProfit',
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
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'withdrawUserDestroyProfit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      stateMutability: 'payable',
      type: 'receive'
    }
  ]

  // 创建合约实例
  const iteToken = new ethers.Contract(iteTokenAddress, iteTokenABI, provider)
  const profitContract = new ethers.Contract(profitContractAddress, profitContractABI, provider)
  const destroyFund = new ethers.Contract(destroyFundAddress, destroyFundABI, provider)

  const [totalIte, setTotalIte] = useState(0)
  const [total, setTotal] = useState(0)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

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

  useEffect(() => {
    const fetchTotalDeposit = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const selectedAddress = await signer.getAddress()
        // 计算Ite的余额
        const totalItes = await iteToken.balanceOf(selectedAddress)
        const totalItess = totalItes.toString()
        // 计算份额利润的总量
        const usersProfitProfitContract = await profitContract.usersProfit()
        const SharesTotalProfitContract = await profitContract.SharesTotal()
        const addressToShareProfitContract = await profitContract.addressToShare(selectedAddress)
        const totalProfitContract = usersProfitProfitContract.div(SharesTotalProfitContract).mul(addressToShareProfitContract)
        // 计算摧毁利润的总量
        const userDestroyProfit = await destroyFund.userDestroyProfit()
        const destroySharesTotal = await destroyFund.destroySharesTotal()
        const addressToDestroyShare = await destroyFund.addressToDestroyShare(selectedAddress)
        const totalDestroyFund = userDestroyProfit.div(destroySharesTotal).mul(addressToDestroyShare)
        // 计算总收益
        const totals = totalProfitContract.add(totalDestroyFund)
        const totalss = ethers.utils.formatEther(totals)

        setTotalIte(totalItess)
        setTotal(totalss)
      }
    }

    fetchTotalDeposit()
  })

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

      // 连接到以太坊测试网络
      const provider2 = ethers.getDefaultProvider('http://localhost:8545')

      // 获取账号列表
      const accounts = await provider2.listAccounts()

      // 获取第一个账号
      const firstAccount = accounts[0]

      console.log('当前选定地址:', selectedAddress)
      console.log('第一个地址:', firstAccount)
      // 创建具有签名者的合约实例
      const contractWithSigner = iteToken.connect(provider2.getSigner(firstAccount))

      try {
        const amount = await values
        const amounts = amount['Ite'].toString()
        console.log(amounts)

        const balance = await iteToken.balanceOf(selectedAddress)
        console.log('账户余额:', balance.toString())

        // 调用智能合约的转账方法
        const transaction = await contractWithSigner.transfer(selectedAddress, ethers.utils.parseEther(amounts))
        await transaction.wait()

        const totalItes = await iteToken.balanceOf(selectedAddress)
        const totalItess = totalItes.toString()
        setTotalIte(totalItess)
        console.log('提现成功！')
      } catch (error) {
        console.log('提现失败！', error)
      }
    } else {
      console.log('未连接到以太坊网络')
    }
  }
  return (
    <div>
      <div className="AirDropDesposit" style={{ backgroundColor: 'RGBA(32, 30, 68, 1)', border: '0', width: '5.46rem', height: '1.55rem', borderRadius: '0.1rem', marginTop: '0rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Total Earning of Ite')} value={totalIte} suffix="Ite" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }} onClick={showModal2}>
            {t('Airdrop.Withdraw')}
          </Button>
          <Modal className="AirdropDepositModal" title={t('Airdrop.withdrawnIte')} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} footer={null} destroyOnClose="true">
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
                label="Ite"
                name="Ite"
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
        <Card style={{ width: '1.3rem', height: '0.9rem' }}>
          <Statistic title={t('Airdrop.Total Earning of USDT')} value={total} suffix="USDT" valueStyle={{ color: '#fff', fontSize: '0.12rem', marginLeft: '-0.02rem' }} />
          <Button style={{ width: '1.05rem', height: '0.2rem', marginLeft: '-0.02rem', marginTop: '0.05rem', color: 'RGBA(84, 52, 255, 1)', fontSize: '0.01rem' }}>{t('Airdrop.Withdraw')}</Button>
        </Card>
        <Card style={{ width: '1.3rem', height: '0.9rem', opacity: '0' }}></Card>
      </div>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '1.75rem' }}>{t('Airdrop.Records')}</span>
      <AirdropRecordsEarning></AirdropRecordsEarning>
    </div>
  )
}

export default AirdropEarning
