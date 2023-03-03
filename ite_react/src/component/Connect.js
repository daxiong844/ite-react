import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Button } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'

const chains = [arbitrum, mainnet, polygon]

// Wagmi client
const { provider } = configureChains(chains, [walletConnectProvider({ projectId: '<YOUR_PROJECT_ID>' })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: '<YOUR_PROJECT_ID>',
    version: '1', // or "2"
    appName: 'web3Modal',
    chains
  }),
  provider
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)

function Connect() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        {/* <HomePage /> */}
        <Button type="link" style={{ position: 'absolute', top: '0.28rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>
          <CreditCardOutlined style={{ marginRight: '-0.02rem' }} />
          Connect a wallet
        </Button>
      </WagmiConfig>
      <Web3Modal projectId="<YOUR_PROJECT_ID>" ethereumClient={ethereumClient} />
    </>
  )
}

export default Connect
