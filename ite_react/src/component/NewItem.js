import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Upload, Button, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import NewItemText from './NewItemText'

import Web3 from 'web3'
// 合约地址
const contractAddress = '0x0B306BF915C4d645ff596e518fAf3F9669b97016'
// 合约ABI
const marginDepositABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Deposit',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256'
      }
    ],
    name: 'depositDeposit',
    outputs: [],
    stateMutability: 'payable',
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
    name: 'deposits',
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
        name: 'requestId',
        type: 'uint256'
      }
    ],
    name: 'getDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
// 使用web3连接网络
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
// 实例化智能合约对象
const marginDepositContract = new web3.eth.Contract(marginDepositABI, contractAddress)

const { Option } = Select

const NewItem = () => {
  const { t } = useTranslation()

  const finish = async values => {
    const amount = await values
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    console.log(amount['价值'])
    console.log(amount['Value'])

    if (amount['价值']) {
      // 将输入的金额转为以太币
      const marginAmount = web3.utils.toWei(amount['价值'], 'ether')
      // 存入保证金
      marginDepositContract.methods
        .depositDeposit(1)
        .send({ value: marginAmount, from: accounts[0] })
        .on('receipt', receipt => {
          console.log('depositDeposit successful')
        })
        .on('error', error => {
          console.error(error)
        })
    } else {
      // 将输入的金额转为以太币
      const marginAmount = web3.utils.toWei(amount['Value'], 'ether')
      // 存入保证金
      marginDepositContract.methods
        .depositDeposit(1)
        .send({ value: marginAmount, from: accounts[0] })
        .on('receipt', receipt => {
          console.log('存入保证金成功!')
        })
        .on('error', error => {
          console.error(error)
        })
    }
    // 查询保证金
    marginDepositContract.methods
      .getDeposit(1)
      .call()
      .then(deposit => {
        console.log(`您的保证金余额是:${deposit}`)
      })
      .catch(error => {
        console.error(error)
      })

    // 合约中的Deposit事件
    marginDepositContract.events.Deposit({}, (error, event) => {
      if (error) console.log(error)
      else {
        console.log(event.returnValues)
      }
    })
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
        onFinish={finish}
      >
        <div className="newItemLeft" style={{ width: '2.92rem', height: '3.2rem' }}>
          <Form.Item
            label={t('newItemCard.Input')}
            name={t('newItemCard.Input')}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input
              type="textArea"
              style={{ width: '2.8rem', height: '0.8rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)', paddingBottom: '0.65rem', color: 'rgba(236, 235, 246, 0.80)' }}
              placeholder="input something that you need. eg:i want to get a baseketball...."
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
            label={t('newItemCard.Provide')}
            name={t('newItemCard.Provide')}
            rules={[
              {
                required: true
              }
            ]}
            style={{ marginTop: '-0.1rem' }}
            className="newItemProvide"
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
              {t('newItemCard.CREATE')}
            </Button>
          </Form.Item>
        </div>
        <div className="newItemRight" style={{ position: 'absolute', top: '0.1rem', right: '0.1rem', width: '2.25rem', height: '3.05rem', paddingTop: '0.14rem', paddingLeft: '0.1rem' }}>
          <div style={{ width: '100%', height: '0.35rem', display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item
              label={t('newItemCard.Value')}
              name={t('newItemCard.Value')}
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginTop: '-0.13rem' }}
            >
              <Input type="textArea" style={{ width: '1.95rem', height: '0.25rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the value of that you will provide" />
            </Form.Item>
            <span style={{ display: 'block', width: '0.22rem', color: 'rgba(236, 235, 246, 0.60)', fontSize: '0.08rem', position: 'absolute', top: '0.23rem', left: '2.12rem' }}>USDT</span>
          </div>
          <Form.Item
            label={t('newItemCard.Language')}
            name={t('newItemCard.Language')}
            rules={[
              {
                required: true
              }
            ]}
            labelCol={{
              span: 8
            }}
            className="newItemLanguage"
          >
            <Select placeholder={t('newItemCard.select')} className="newItemSelect">
              <Option value="en" className="newItemSelectOption">
                {t('newItemCard.en-US')}
              </Option>
              <Option value="zh" className="newItemSelectOption">
                {t('newItemCard.zh-CN')}
              </Option>
            </Select>
            {/* <Dropdown overlay={menu}>
              <Button className="newItemButton" style={{ background: 'RGBA(20, 20, 20, 1)', width: '1rem', height: '0.2rem', color: '#ECEBF6', fontSize: '0.07rem' }}>
                {t('newItemCard.select')}
                <DownOutlined style={{ fontSize: '0.05rem' }} />
              </Button>
            </Dropdown> */}
          </Form.Item>
          <Form.Item label={t('newItemCard.Location')} style={{ marginTop: '-0.1rem' }}>
            <Input style={{ width: '2.24rem', height: '0.25rem', borderColor: 'rgba(196, 196, 196, 0.40)', backgroundColor: 'rgba(22, 22, 29, 1)' }} placeholder="input the location where you will provide in" />
          </Form.Item>
          <Form.Item style={{ marginTop: '-0.1rem' }}>
            <NewItemText></NewItemText>
          </Form.Item>
        </div>
      </Form>
    </>
  )
}
export default NewItem
