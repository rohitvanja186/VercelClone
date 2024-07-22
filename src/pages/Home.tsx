import React from 'react';
import { Button, Form, Input } from 'antd';
import background from '../assets/background.jpg';

const HomePage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="bg-[#f6f8f9] pt-12">
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative text-center text-white p-10 z-10">
          <h1 className="text-4xl font-bold mb-4">Empower Your Business Travel with Tailored Solutions</h1>
          <p className="mb-8">Streamline Your Travel Program with Customized Business Travel Management Services.</p>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto text-black">
            <Form
              name="contact"
              onFinish={onFinish}
              layout="vertical"
              className="flex flex-col items-center space-y-4"
            >
              <Form.Item
                name="companyName"
                label="Company Name"
                rules={[{ required: true, message: 'Please input your company name!' }]}
                className="w-full"
              >
                <Input className="p-2 border border-gray-300 rounded" />
              </Form.Item>
              <Form.Item
                name="contactPerson"
                label="Contact Person Name"
                rules={[{ required: true, message: 'Please input the contact person name!' }]}
                className="w-full"
              >
                <Input className="p-2 border border-gray-300 rounded" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
                className="w-full"
              >
                <Input className="p-2 border border-gray-300 rounded" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: 'Please input your email address!' },
                  { type: 'email', message: 'Please enter a valid email address!' }
                ]}
                className="w-full"
              >
                <Input className="p-2 border border-gray-300 rounded" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Let's Talk</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Navigate the Future of Travel Programs with Expert Guidance</h2>
        <p>Unlock Success in Business Travel Management...</p>
      </div>
      <div className="p-10 text-center bg-gray-100">
        <h2 className="text-3xl font-bold">Simplify Your Business Travel Management</h2>
        <div className="flex flex-wrap justify-around mt-6">
          <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold">Tailored Trip Planning</h3>
            <p>Comprehensive Travel Booking...</p>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold">Effortless Spending Oversight</h3>
            <p>Expense Management Solutions...</p>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold">Dedicated Traveler Care</h3>
            <p>Traveler Assistance and Support...</p>
          </div>
        </div>
      </div>
      <div className="text-center p-10 bg-blue-500 text-white">
        <h2 className="text-3xl font-bold">Ready to Transform Your Travel Experience?</h2>
        <p>Connect with us now...</p>
        <Button type="primary">Let's Talk</Button>
      </div>
    </div>
  );
};

export default HomePage;