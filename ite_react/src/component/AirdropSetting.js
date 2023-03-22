import { Form, Input, Button, Avatar } from 'antd'
import { TwitterOutlined, InstagramOutlined, GlobalOutlined, CopyOutlined, InfoCircleOutlined } from '@ant-design/icons'

import { useTranslation } from 'react-i18next'

function AirdropSetting() {
  const { t } = useTranslation()

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
              <Input type="textArea" style={{ width: '2.4rem', height: '0.2rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }} placeholder={t('Airdrop.Enter username')} />
            </Form.Item>
            <Form.Item label={t('Airdrop.Bio')} name={t('Airdrop.Bio')} style={{ marginTop: '-0.05rem' }}>
              <TextArea style={{ width: '2.4rem', height: '0.3rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem', paddingBottom: '0.15rem' }} placeholder={t('Airdrop.Tell the World your story!')} />
            </Form.Item>
            <Form.Item label={t('Airdrop.Email Address')} name={t('Airdrop.Email Address')} style={{ marginTop: '-0.05rem' }}>
              <Input type="textArea" style={{ width: '2.4rem', height: '0.2rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'RGBA(32, 30, 68, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }} placeholder={t('Airdrop.Enter email')} />
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
              <p className="AirdropSettingWalletP" style={{ width: '2.34rem', height: '0.2rem', backgroundColor: 'RGBA(39, 38, 72, 1)', color: 'rgba(236, 235, 246, 0.80)', borderRadius: '0.06rem' }}>
                0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
                <CopyOutlined style={{ marginLeft: '0.4rem' }} />
              </p>
            </Form.Item>
            <Form.Item style={{ marginTop: '-0.08rem' }}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'RGBA(37, 129, 226, 1)', width: '0.35rem', height: '0.2rem' }}>
                {t('Airdrop.Save')}
              </Button>
            </Form.Item>
          </div>
          {/* Setting页面的右侧代码 */}
          <div className="AirdropSettingRight" style={{ width: '3.025rem', height: '1rem', position: 'absolute', top: '0rem', left: '2.6rem', paddingTop: '0.2rem' }}>
            <Form.Item label={t('Airdrop.Profile Image')} name={t('Airdrop.Profile Image')}>
              <InfoCircleOutlined style={{ position: 'absolute', top: '-0.14rem', left: '0.6rem', color: 'RGBA(139, 147, 155, 1)' }} />
              <Avatar size={100} src={'https://i03piccdn.sogoucdn.com/5f54b8b788776e92'} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AirdropSetting
