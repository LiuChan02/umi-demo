import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import router from 'umi/router';
import { FormComponentProps } from 'antd/lib/form';

function Login({ form }: FormComponentProps) {
  function toLogin() {
    form.validateFields((err, values) => {
      if(err) return;
      const { user } = values;
      router.push(`/welcome/${user}`)
    })
  }
  return (
    <Form style={{ marginLeft: "40%" }}>
      <Form.Item>
        {form.getFieldDecorator("user", {
          // initialValue: "admin",
          rules: [{ required: true, message: "请输入用户名" },
                  { pattern: /^admin$/, message: "用户名不正确" }]
        })(
          <Input
            style={{ width: 300 }}
            placeholder="用户名：admin"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("psw", {
          // initialValue: "",
          rules: [{ required: true, message: "请输入密码" },
            { pattern: /^123$/, message: "用户名不正确" }]
        })(
          <Input
            style={{ width: 300 }}
            placeholder="密码：123"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" style={{ width: 300 }} onClick={toLogin}>登录</Button>
      </Form.Item>
    </Form>
  );
}

export default Form.create()(Login);