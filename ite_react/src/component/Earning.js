import { Card, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import NewItemButton from './NewItemButton'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

function EarningCard() {
  const { t } = useTranslation()
  // 创建一个 ethers.js 提供程序实例
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

  // 合约地址
  const iteTokenAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'

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

  // 创建合约实例
  const iteToken = new ethers.Contract(iteTokenAddress, iteTokenABI, provider)

  const [totalIte, setTotalIte] = useState(0)

  useEffect(() => {
    const fetchTotalDeposit = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const selectedAddress = await signer.getAddress()
        const totalItes = await iteToken.balanceOf(selectedAddress)
        const totalItess = totalItes.toString()
        setTotalIte(totalItess)
      }
    }

    fetchTotalDeposit()
  })
  return (
    <Card
      style={{
        width: '1.6rem',
        height: '1.95rem',
        backgroundColor: '#201E43',
        border: 'none',
        borderRadius: '0.1rem'
      }}
    >
      <div className="earningTop" style={{ height: '0.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.05rem' }}>
        <p style={{ color: '#ECEBF6', fontSize: '0.1rem' }}>{t('Dashboard.Earning')}</p>
        <Button type="link" style={{ color: 'rgba(207,203,230,0.62)', fontSize: '0.07rem', marginRight: '0.1rem' }}>
          {t('Dashboard.See all')}
        </Button>
      </div>
      <div className="earningMiddle" style={{ paddingLeft: '0.1rem', position: 'relative', marginTop: '0rem' }}>
        <div style={{ position: 'absolute', top: '0.1rem' }}>
          <p style={{ color: '#ECEBF6', fontSize: '0.08rem', marginBottom: '-0.15rem' }}>{t('Dashboard.Your Earning')}</p>
          <p style={{ color: '#ECEBF6', fontSize: '0.12rem' }}>{totalIte} ITE</p>
        </div>
        <Button style={{ position: 'absolute', top: '0.55rem', width: '1.15rem', height: '0.2rem', backgroundColor: '#fff', color: 'RGBA(137, 137, 140, 1)', fontSize: '0.07rem', border: 'none' }}>{t('Dashboard.Withdraw')}</Button>
      </div>
      <NewItemButton></NewItemButton>
      {/* <Button style={{ marginTop: '0.18rem', width: '1.34rem', height: '0.25rem', border: 'none', borderRadius: '0.04rem', color: 'RGBA(24, 112, 248, 1)', fontSize: '0.08rem' }}>{t('Dashboard.NEW ITEM')}</Button> */}
    </Card>
  )
}
export default EarningCard
