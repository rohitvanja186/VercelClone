import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox, Form } from 'antd';
import { MoonOutlined } from '@ant-design/icons';
import logo from '../assets/gulf.svg';

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
          <Form.Item label="Username">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form.Item>
          <Form.Item>
            <a href="#">Forgot password</a>
          </Form.Item>
          <Form.Item>
            Not a user? Sign up for the best deals!
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="Register" visible={isRegisterModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical">
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Create an Account</Button>
          </Form.Item>
        </Form>
      </Modal>
    </nav>
  );
};

export default NavBar;
