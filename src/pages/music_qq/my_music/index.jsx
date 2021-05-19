import React, { Component } from 'react'
import { Modal, Button, Form, Input, Message } from 'shineout';

const rules = {
  qq: [
    { required: true, message: 'Please enter your QQ.' },
    { type: 'number', message: 'Please enter a valid number.' },
  ],
  password: [
    { required: true, message: 'Please enter password.' },
    { min: 7, message: 'Password must be at least {min} characters.' },
    { regExp: /[a-z]+/i, message: 'Password at least has one letter.' },
    (value, formdata, callback) => {
      if (/\d+/.test(value)) callback(true)
      else callback(new Error('Password at least has one numeral.'))
    },
  ],
}

class MyMusic extends Component {

  state = {
    visible: false,
    type: 'error',
    isLogin: false
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
    this.props.history.push('/QQmusic/home')
  }
  handleOk = () => {
    this.setState({
      isLogin: true
    })
    console.log('clicked ok!')
  }
  handleSubmit = data => {
    this.setState({
      visible: false,
    })
    Message.success(JSON.stringify(data))
  }
  renderFooter() {
    return (
      <div>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Modal.Submit>Submit</Modal.Submit>
      </div>
    )
  }

  componentDidMount() {
    const cookie = localStorage.getItem('cookie')
    if (!cookie) {
      this.setState({
        visible: true
      })
    }
  }


  render() {
    const { type, visible, isLogin } = this.state
    return (
      <div>
        <Modal
          visible={visible}
          type={type}
          width={500}
          title={`登录失效`}
          onClose={this.handleCancel}
          footer={[
            <Button key="cancel" type="secondary" onClick={this.handleCancel}>
              不登录
          </Button>,
            (
              isLogin ? <Button key="ok" type="error" onClick={this.handleSubmit}>
                提交
              </Button> : <Button key="ok" type="error" onClick={this.handleOk}>
                登陆
            </Button>
            )
          ]}
        >
          <span>注意事项: </span>
          <b>点击登录后输入qq及密码后,会使用qq自动登录</b>
          {
            this.state.isLogin ? <Form
              labelWidth={100}
              rules={rules}
              labelAlign="top"
              style={{ maxWidth: 400, textAlign: 'left', marginTop: '20px' }}
              onSubmit={this.handleSubmit}
            >
              <Form.Item required label="QQ">
                <Input name="qq" />
              </Form.Item>

              <Form.Item required label="Password">
                <Input name="password" type="password" />
              </Form.Item>
            </Form> : null
          }
        </Modal>
      </div>
    );
  }
}

export default MyMusic;