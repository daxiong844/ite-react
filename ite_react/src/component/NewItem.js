import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Upload, Button, Select } from 'antd'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const NewItem = () => {
  const { t } = useTranslation()

  const changeLanguage = val => {
    i18n.changeLanguage(val) // val入参值为'en'或'zh'
  }

  function handleMenuClick(e) {
    console.log('click', e)
    if (e.key === '1') {
      changeLanguage('en')
    } else if (e.key === '2') {
      changeLanguage('zh')
    }
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
      >
        <Form.Item
          label={t('Input')}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input
            type="textArea"
            style={{ width: '2.8rem', height: '0.8rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)', paddingBottom: '0.65rem', color: 'rgba(236, 235, 246, 0.80)' }}
            placeholder={t('input something that you need. eg:i want to get a baseketball....')}
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
          label="Provide"
          rules={[
            {
              required: true
            }
          ]}
          style={{ marginTop: '-0.1rem' }}
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
            CREATE
          </Button>
        </Form.Item>
        <div className="newItemRight" style={{ position: 'absolute', top: '0.1rem', right: '0.1rem', width: '2.25rem', height: '3.2rem', paddingTop: '0.14rem', paddingLeft: '0.1rem' }}>
          <div style={{ width: '100%', height: '0.35rem', display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item
              label="Value"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginTop: '-0.13rem' }}
            >
              <Input style={{ width: '1.95rem', height: '0.25rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the value of that you will provide" />
              <span style={{ display: 'block', width: '0.22rem', color: 'rgba(236, 235, 246, 0.60)', fontSize: '0.08rem', position: 'absolute', top: '0.06rem', left: '2rem' }}>USDT</span>
            </Form.Item>
          </div>
          <Form.Item label="Language">
            <Select onSelect={handleMenuClick}>
              <Select.Option value="en-US" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
                en-US
              </Select.Option>
              <Select.Option value="zh-CN" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
                zh-CN
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Location"
            rules={[
              {
                required: true
              }
            ]}
            style={{ marginTop: '-0.1rem' }}
          >
            <Input style={{ width: '2.24rem', height: '0.25rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the location where you will provide in" />
          </Form.Item>
        </div>
      </Form>
    </>
  )
}
export default NewItem
