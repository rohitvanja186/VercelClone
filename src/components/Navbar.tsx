import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox, Form, Typography } from 'antd';
import { MoonOutlined } from '@ant-design/icons';
import logo from '../assets/gulf.svg';

const { Text, Link } = Typography;

const NavBar: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  const showLoginModal = () => setIsLoginModalVisible(true);
  const showRegisterModal = () => setIsRegisterModalVisible(true);
  const handleCancel = () => {
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
  };

  return (
    <nav className="bg-white shadow-md p-5 flex justify-between items-center font-poppins">
      <div className="flex items-center ml-4">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-4" />
      </div>
      <div className="flex items-center mr-4">
        <Button
          type="default"
          onClick={showLoginModal}
          className="mr-4 text-lg px-5 py-5 rounded-lg"
        >
          Login
        </Button>
        <Button
          type="primary"
          onClick={showRegisterModal}
          className="mr-4 text-lg px-5 py-5 rounded-lg"
        >
          Register
        </Button>
        <Button
          type="default"
          shape="circle"
          icon={<MoonOutlined style={{ fontSize: '15px' }} />}
          className="text-lg px-4 py-2"
        />
      </div>

      <Modal title="Login" visible={isLoginModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="flex justify-between items-center mb-4">
            <Link href="#">Forgot password</Link>
            <Checkbox>Remember me</Checkbox>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <div className="text-center">
            <Text>
              Not a user? <Link onClick={showRegisterModal}>Sign up</Link> for the best deals!
            </Text>
          </div>
        </Form>
      </Modal>

      <Modal title="Register" visible={isRegisterModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical">
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Field required.' },
              { type: 'email', message: 'Please enter a valid email address!' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Field required.' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create an Account
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </nav>
  );
};

export default NavBar;
