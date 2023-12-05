import axios from 'axios'
import { message } from 'antd'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createClient } from '@wagmi/core'
import { mainnet, localhost } from '@wagmi/core/chains'
// import { Button } from 'antd'
// import { CreditCardOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
// import { Web3Button } from '@web3modal/react'
import Web3 from 'web3'
import React, { useState } from 'react'
// const { ethers } = require('ethers')

const chains = [mainnet, localhost]

// Wagmi Core Client
// 实例化web3
const provider = configureChains(chains, [walletConnectProvider({ projectId: '0a0053b31b98ce424792891e45247291' })])

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

// // Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)
new Web3Modal({ projectId: '0a0053b31b98ce424792891e45247291' }, ethereumClient)

const Connect = () => {
  const web3 = new Web3(Web3.currentProvider || 'http://localhost:8545')

  const [account, setAccount] = useState('') // 初始化空字符串
  const [signatures, setSignature] = useState('') // 初始化空字符串

  try {
    web3.eth.getAccounts().then(accounts => {
      web3.eth.getBalance(accounts[0]).then(console.log)
    })
  } catch (e) {
    console.log(e)
    console.log('Error-------')
  }
  const { t } = useTranslation()

  // 存储下来用户的头像和名字
  const [avatar, setAvatar] = useState(null)
  const [username, setUsername] = useState('未登录')
  const [Email, setEmail] = useState('暂无邮箱信息')

  const res = false

  const handleW3mCoreButtonClick = async () => {
    // 在这里添加您的点击事件处理逻辑
    console.log('w3m-core-button 被点击了！')
    const ethereum = window.ethereum
    // 连接 MetaMask
    try {
      if (ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' })
        const web3 = new Web3(ethereum)
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0]) // 使用 useState 设置账户值
      } else {
        console.error('No web3 detected. Falling back to http://127.0.0.1:8545.')
        const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
        await ethereum.request({ method: 'eth_requestAccounts' })

        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0]) // 使用 useState 设置账户值
      }

      // 要签名的消息
      const message = 'hello,world'
      // 将消息转换为十六进制格式
      const messageHex = web3.utils.utf8ToHex(message)

      // 使用私钥对消息进行签名
      const signature = await web3.eth.sign(messageHex, account)

      console.log(account)

      console.log('Signature:', signature)
      setSignature(signature)
    } catch (error) {
      console.error('Error:', error)
    }

    // // 使用公钥和消息验证签名并获取签名者地址
    // const signerAddress = web3.eth.accounts.recover(signature)
    // console.log('Signer Address:', signerAddress)

    // 发送POST请求
    axios
      .post('https://ite.haowugou.store/api/v1/login', { address: account, sign: signatures })
      .then(async response => {
        // 处理从服务器返回的数据
        console.log(response.data)
        if (response.data.code === 200) {
          // 将token存储下来
          message.success('111')
          await localStorage.setItem('myToken', JSON.stringify(response.data.data.token))

          setAvatar(response.data.data.user.avatar)
          setUsername(response.data.data.user.user_name)
          setEmail(response.data.data.user.email)
        } else if (response.data.code === '500') {
          message.error('The given data was invalid.')
        }
      })
      .catch(error => {
        // 处理请求错误
        console.log('请求失败', error)
        // console.error('请求失败', error)
      })

    console.log('运行到这里了')
    console.log(avatar)
    console.log(username)
  }

  return (
    <div className="connectBig">
      {res ? (
        // <Button type="link" style={{ position: 'absolute', top: '0.28rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>
        <div className="w3mCoreButton">
          {/* <CreditCardOutlined style={{ marginRight: '-0.02rem' }} /> */}

          <w3m-core-button className="Web3Button" icon="null" label={t('layoutTop.Connect a wallet')} style={{ color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }} onClick={handleW3mCoreButtonClick}></w3m-core-button>
        </div>
      ) : (
        // </Button>
        <div>
          <Avatar style={{ position: 'absolute', top: '0.018rem', right: '1rem', width: '0.24rem', height: '0.24rem' }} src={avatar} />
          <p style={{ position: 'absolute', top: '0.1rem', right: '0.45rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>{Email}</p>
          <w3m-core-button onClick={handleW3mCoreButtonClick} style={{ opacity: 0, width: '0.7rem', height: '0.1rem', position: 'absolute', top: '0rem', right: '0.7rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}></w3m-core-button>
          <DownOutlined style={{ position: 'absolute', top: '0.1rem', right: '0.3rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }} />
          <p style={{ position: 'absolute', top: '-0.05rem', right: '0.53rem', color: 'rgba(255, 255, 255, 1)', fontSize: '0.07rem' }}>{username}</p>
          <p className="messageP" style={{ position: 'absolute', top: '-0.05rem', right: '0rem', width: '0.24rem', height: '0.24rem', borderRadius: '50%' }}></p>
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
