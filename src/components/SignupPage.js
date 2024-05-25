import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const SignupPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values) => {

  };

  return (
    <div>
        <Form form={form} onFinish={handleSignup}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bio"
            name="bio"
            rules={[{ required: true, message: 'Please enter your bio' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Profile Picture URL"
            name="profilePicUrl"
            rules={[{ required: true, message: 'Please enter your profile picture URL' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Signup
            </Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default SignupPage;
