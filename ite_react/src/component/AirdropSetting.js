import axios from 'axios'
import { Form, Input, Button, Upload, message } from 'antd'
import { TwitterOutlined, InstagramOutlined, GlobalOutlined, CopyOutlined, InfoCircleOutlined } from '@ant-design/icons'

import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ethers } from 'ethers'

function AirdropSetting() {
  const { t, i18n } = useTranslation()
  // 判断当前语言是否为中文
  const isChinese = i18n.language === 'zh'

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
      baseURL: 'https://ite.haowugou.store/api/v1/me', // 替换成你的API地址
      headers: customHeaders
    })

    // 发送带查询参数的GET请求
    axiosInstance
      .get('https://ite.haowugou.store/api/v1/me')
      .then(response => {
        // 处理从服务器返回的数据
        console.log(response.data)
        console.log(response.data.data.avatar)
        setImageUrl(response.data.data.avatar)
      })
      .catch(error => {
        // 处理请求错误
        console.error('请求失败', error)
      })
  }, []) // 空数组作为第二个参数确保只在组件挂载时发送一次请求

  const handleCopy = () => {
    message.success(t('Dashboard.TextCopy'))
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const [imageUrl, setImageUrl] = useState('https://i03piccdn.sogoucdn.com/5f54b8b788776e92')
  const [walletAddress, setWalletAddress] = useState('0x00000000000000000000000000000000000')
  // 收集到用户名和邮箱数据
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleButtonClick = () => {
    // 访问username和email的值，然后执行相应操作
    console.log('Username:', username)
    console.log('Email:', email)

    // 获取存储的变量
    const myToken = JSON.parse(localStorage.getItem('myToken'))
    console.log(myToken)

    // 设置自定义请求头
    const customHeaders = {
      Authorization: 'Bearer ' + myToken // 示例：添加授权头
    }
    // 创建一个包含自定义头的axios实例
    const axiosInstance = axios.create({
      baseURL: 'https://ite.haowugou.store/api/v1/me/update', // 替换成你的API地址
      headers: customHeaders
    })
    // 要发送的数据
    const postData = {
      username: username,
      email: email
    }
    // 发送POST请求
    axiosInstance
      .post('https://ite.haowugou.store/api/v1/me/update', postData)
      .then(async response => {
        // 处理从服务器返回的数据
        console.log(response.data)
        if (isChinese) {
          message.success('修改信息成功!')
        } else {
          message.success('Information modified successfully!')
        }
      })
      .catch(error => {
        // 处理请求错误
        console.error('请求失败', error)
        if (isChinese) {
          message.error('修改信息失败!')
        } else {
          message.error('Failed to modify information!')
        }
      })
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setImageUrl(url)
      })
    }
  }

  useEffect(() => {
    const fetchWalletAddress = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const walletAddress = await signer.getAddress()
        setWalletAddress(walletAddress)
      }
    }

    fetchWalletAddress()

    // Listen for wallet address changes
    const handleAccountsChanged = accounts => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0])
      }
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  const { TextArea } = Input
  return (
    <div style={{ backgroundColor: 'RGBA(32, 30, 68, 1)', border: '0', width: '6.05rem', borderRadius: '0.1rem', marginTop: '-0.2rem' }}>
      <span style={{ color: 'rgba(245, 244, 251, 1)', fontSize: '0.1rem', position: 'absolute', top: '-0.3rem' }}>{t('Dashboard.Trending Item')}</span>
      <div style={{ width: '2.5rem', height: '3.9rem' }}>
        <Form
          labelCol={{
            span: 10
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
        >
          {/* Setting页面的左侧代码 */}
          <div className="AirdropSettingLeft" style={{ marginTop: '0.2rem', paddingTop: '0.2rem', paddingLeft: '0.02rem' }}>
            <Form.Item label={t('Airdrop.Username')} name={t('Airdrop.Username')}>
              <Input
                type="textArea"
                style={{ width: '2.4rem', height: '0.2rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }}
                placeholder={t('Airdrop.Enter username')}
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item label={t('Airdrop.Bio')} name={t('Airdrop.Bio')} style={{ marginTop: '-0.05rem' }}>
              <TextArea style={{ width: '2.4rem', height: '0.3rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem', paddingBottom: '0.15rem' }} placeholder={t('Airdrop.Tell the World your story!')} />
            </Form.Item>
            <Form.Item label={t('Airdrop.Email Address')} name={t('Airdrop.Email Address')} style={{ marginTop: '-0.05rem' }}>
              <Input
                type="textArea"
                style={{ width: '2.4rem', height: '0.2rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }}
                placeholder={t('Airdrop.Enter email')}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Item>
            <p style={{ color: '#fff', fontWeight: '700', marginTop: '0rem' }}>{t('Airdrop.Social Connections')}</p>
            <p style={{ color: 'rgba(236, 235, 246, 0.80)', marginTop: '-0.08rem' }}>{t('Airdrop.Help collectors verify your account by connecting social accounts')}</p>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.1rem' }}>
              <span style={{ color: '#fff', display: 'flex', alignItems: 'center', fontSize: '0.08rem' }}>
                <TwitterOutlined style={{ color: 'rgba(236, 235, 246, 0.80)', marginRight: '0.05rem' }} />
                Twitter
              </span>
              <Button style={{ borderRadius: '0.05rem', border: '0', backgroundColor: 'RGBA(37, 129, 226, 1)', color: '#fff', fontWeight: '700' }}>{t('Airdrop.Connect')}</Button>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-0.05rem' }}>
              <span style={{ color: '#fff', display: 'flex', alignItems: 'center', fontSize: '0.08rem' }}>
                <InstagramOutlined style={{ color: 'rgba(236, 235, 246, 0.80)', marginRight: '0.05rem' }} />
                Instagram
              </span>
              <Button style={{ borderRadius: '0.05rem', border: '0', backgroundColor: 'RGBA(37, 129, 226, 1)', color: '#fff', fontWeight: '700' }}>{t('Airdrop.Connect')}</Button>
            </p>
            <Form.Item label={t('Airdrop.Links')} name={t('Airdrop.Links')} style={{ marginTop: '0.08rem' }}>
              <Input
                type="textArea"
                prefix={<GlobalOutlined style={{ marginRight: '0.04rem' }} />}
                style={{ width: '2.4rem', height: '0.2rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }}
                placeholder={t('Airdrop.yoursite.io')}
              />
            </Form.Item>
            <Form.Item label={t('Airdrop.Wallet Address')} name={t('Airdrop.Wallet Address')} style={{ marginTop: '-0.05rem' }}>
              <CopyToClipboard text={walletAddress} onCopy={handleCopy}>
                <p className="AirdropSettingWalletP" style={{ width: '2.34rem', height: '0.2rem', backgroundColor: 'RGBA(39, 38, 72, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem', display: 'flex', alignItems: 'center' }}>
                  {walletAddress}
                  <CopyOutlined style={{ marginLeft: '0.4rem', cursor: 'pointer' }} />
                </p>
              </CopyToClipboard>
            </Form.Item>
            <Form.Item style={{ marginTop: '-0.08rem' }}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'RGBA(37, 129, 226, 1)', width: '0.35rem', height: '0.2rem' }} onClick={handleButtonClick}>
                {t('Airdrop.Save')}
              </Button>
            </Form.Item>
          </div>
          {/* Setting页面的右侧代码 */}
          <div className="AirdropSettingRight" style={{ width: '3.025rem', height: '1rem', position: 'absolute', top: '0rem', left: '2.6rem', paddingTop: '0.2rem' }}>
            <Form.Item label={t('Airdrop.Profile Image')} name={t('Airdrop.Profile Image')}>
              <InfoCircleOutlined style={{ position: 'absolute', top: '-0.14rem', left: '0.6rem', color: 'RGBA(139, 147, 155, 1)' }} />
              {/* <Avatar size={100} src={'https://i03piccdn.sogoucdn.com/5f54b8b788776e92'} /> */}
              <Upload name="avatar" className="airdropUploader" showUploadList={false} action={imageUrl} beforeUpload={beforeUpload} onChange={handleChange}>
                <img
                  className="avatar-uploader-img"
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                    borderRadius: '50%'
                  }}
                />
              </Upload>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AirdropSetting
