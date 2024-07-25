import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Checkbox, Form, Typography } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import logo from '../assets/gulf.svg';

const { Text, Link } = Typography;

const NavBar: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const showLoginModal = () => setIsLoginModalVisible(true);
  const showRegisterModal = () => setIsRegisterModalVisible(true);
  const handleCancel = () => {
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-5 flex justify-between items-center font-poppins">
      <div className="flex items-center ml-4">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-4" />
      </div>
      <div className="flex items-center mr-4">
        <Button
          type="default"
          onClick={showLoginModal}
          className="mr-4 text-lg px-5 py-5 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white"
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
          icon={isDarkMode ? <SunOutlined style={{ fontSize: '15px' }} /> : <MoonOutlined style={{ fontSize: '15px' }} />}
          onClick={toggleDarkMode}
          className="text-lg px-4 py-2 bg-white text-black dark:bg-gray-900 dark:text-white"
        />
      </div>

      <Modal 
        title="Login" 
        visible={isLoginModalVisible} 
        onCancel={handleCancel} 
        footer={null}
        className="dark:bg-gray-800 dark:text-white"
      >
        <Form layout="vertical">
          <Form.Item
            name="username"
            label={<span className="dark:text-white">Username</span>}
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="dark:text-white">Password</span>}
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input.Password placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <div className="flex justify-between items-center mb-4">
            <Link href="#" className="dark:text-blue-400">Forgot password</Link>
            <Checkbox className="dark:text-white">Remember me</Checkbox>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <div className="text-center">
            <Text className="dark:text-white">
              Not a user? <Link onClick={showRegisterModal} className="dark:text-blue-400">Sign up</Link> for the best deals!
            </Text>
          </div>
        </Form>
      </Modal>

      <Modal 
        title="Register" 
        visible={isRegisterModalVisible} 
        onCancel={handleCancel} 
        footer={null}
        className="dark:bg-gray-800 dark:text-white"
      >
        <Form layout="vertical">
          <Form.Item
            name="fullName"
            label={<span className="dark:text-white">Full Name</span>}
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <Form.Item
            name="phone"
            label={<span className="dark:text-white">Phone Number</span>}
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="dark:text-white">Email</span>}
            rules={[
              { required: true, message: 'Field required.' },
              { type: 'email', message: 'Please enter a valid email address!' }
            ]}
          >
            <Input placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="dark:text-white">Password</span>}
            rules={[{ required: true, message: 'Field required.' }]}
          >
            <Input.Password placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={<span className="dark:text-white">Confirm Password</span>}
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
            <Input.Password placeholder="Enter" className="dark:bg-gray-900 dark:text-white" />
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