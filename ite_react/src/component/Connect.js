import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createClient } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
// import { Button } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Web3Button } from '@web3modal/react'

const chains = [arbitrum, mainnet, polygon]

// Wagmi Core Client
const { provider } = configureChains(chains, [walletConnectProvider({ projectId: '0a0053b31b98ce424792891e45247291' })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: '0a0053b31b98ce424792891e45247291',
    version: '1', // or "2"
    appName: 'web3Modal',
    chains
  }),
  provider
})

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)
new Web3Modal({ projectId: '0a0053b31b98ce424792891e45247291' }, ethereumClient)

function Connect() {
  const { t } = useTranslation()

  const res = true

  return (
    <div style={{ position: 'relative' }}>
      {res ? (
        // <Button type="link" style={{ position: 'absolute', top: '0.28rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>
        <div>
          <CreditCardOutlined style={{ marginRight: '-0.02rem' }} />

          <Web3Button label={t('layoutTop.Connect a wallet')} style={{ position: 'absolute', top: '0.27rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}></Web3Button>
        </div>
      ) : (
        // </Button>
        <div>
          <Avatar style={{ position: 'absolute', top: '0.25rem', right: '1.5rem', width: '0.24rem', height: '0.24rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
          <p style={{ position: 'absolute', top: '0.2rem', right: '0.94rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>Adelaide Perry</p>
          <w3m-core-button style={{ opacity: 0, width: '0.7rem', height: '0.1rem', position: 'absolute', top: '0.25rem', right: '0.75rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}></w3m-core-button>
          <DownOutlined style={{ position: 'absolute', top: '0.285rem', right: '0.75rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }} />
          <p style={{ position: 'absolute', top: '0.3rem', right: '1.17rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>Creator</p>
          <p className="messageP" style={{ position: 'absolute', top: '0.18rem', right: '0.35rem', width: '0.24rem', height: '0.24rem', borderRadius: '50%' }}></p>
        </div>
      )}
      {/* <Button type="link" style={{ position: 'absolute', top: '0.28rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>
        <CreditCardOutlined style={{ marginRight: '-0.02rem' }} />
        {t('layoutTop.Connect a wallet')}
        <w3m-core-button label={t('layoutTop.Connect a wallet')} style={{ position: 'absolute', top: '0rem', right: '0rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}></w3m-core-button>
      </Button>
      <div>
        <Avatar style={{ position: 'absolute', top: '0.25rem', right: '1.5rem', width: '0.24rem', height: '0.24rem' }} src="https://i03piccdn.sogoucdn.com/4c3a3d0b5f62a8ca" />
        <p style={{ position: 'absolute', top: '0.2rem', right: '0.94rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>Adelaide Perry</p>
        <DownOutlined style={{ position: 'absolute', top: '0.285rem', right: '0.75rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }} />
        <p style={{ position: 'absolute', top: '0.3rem', right: '1.17rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>Creator</p>
        <p className="messageP" style={{ position: 'absolute', top: '0.18rem', right: '0.35rem', width: '0.24rem', height: '0.24rem', borderRadius: '50%' }}></p>
      </div> */}
    </div>
  )
}

export default Connect
