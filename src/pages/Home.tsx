import React from 'react';
import { Button, Form, Input } from 'antd';
import background from '../assets/background.jpg';
import worldMap from '../assets/world-map.svg';
import taillored from '../assets/taillored.svg'

const HomePage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="bg-[#f6f8f9] pt-12">

      {/* form section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative text-center text-white p-20 z-10 pt-20">
          <h1 className="text-4xl font-bold mb-4">Empower Your Business Travel with Tailored <br /> Solutions</h1>
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

      {/* map section */}
      <div className="pt-40 pb-20 px-20 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0 pr-0 md:pr-12">
          <span className="text-gray-400 font-semibold">Navigate the Future of Travel Programs</span>
          <h2 className="text-3xl text-gray-700 mt-4 mb-6">Unlock Success in Business Travel Management</h2>
          <p className="text-gray-600 mb-6">
            Discover the power of streamlined communication and strategic planning with our comprehensive approach to managed business travel. Whether you're optimizing your current program or envisioning a future strategy, we provide the tools and expertise to help you achieve your goals.
          </p>
          <p className="text-gray-600">
            From reviewing existing processes to designing innovative solutions, we guide you every step of the way. Wherever you are in your journey, trust us to deliver the tailored solutions you need to thrive in the evolving landscape of business travel.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={worldMap} alt="Expert Guidance in Business Travel" className="w-full h-auto rounded-lg shadow-sm" />
        </div>
      </div>

      {/* card section */}
      <div className="pt-40 pb-20 px-20 text-center">
        <span className="text-gray-400 font-semibold">Simplify Your Business Travel Management</span>
        <h2 className="text-3xl text-gray-700 mt-4 mb-6">Find the Perfect Solution for Your Travel Needs</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Simplify business travel with our versatile solutions: all-in-one platform, customized approach, and expense management tools.
        </p>
        <div className="flex flex-wrap justify-around mt-6">
          <div className="max-w-sm bg-blue-50 p-6 rounded-lg shadow-sm mb-6">
            <span className="text-gray-400 font-semibold">Tailored Trip Planning</span>
            <h3 className="text-xl text-gray-600 mt-2 mb-3">Comprehensive Travel Booking</h3>
            <p className="text-gray-600">From flights to accommodations, we handle every detail to ensure a seamless travel experience.</p>
          </div>
          <div className="max-w-sm bg-green-50 p-6 rounded-lg shadow-sm mb-6">
            <span className="text-gray-400 font-semibold">Effortless Spending Oversight</span>
            <h3 className="text-xl text-gray-600 mt-2 mb-3">Expense Management Solutions</h3>
            <p className="text-gray-600">Track, manage, and optimize business travel expenses with our intuitive expense management solutions.</p>
          </div>
          <div className="max-w-sm bg-yellow-50 p-6 rounded-lg shadow-sm mb-6">
            <span className="text-gray-400 font-semibold">Dedicated Traveler Care</span>
            <h3 className="text-xl text-gray-600 mt-2 mb-3">Traveler Assistance and Support</h3>
            <p className="text-gray-600">Our team is here around the clock to provide personalized support and assistance for all travelers' needs.</p>
          </div>
        </div>
      </div>


      {/* Cross-industry section */}
      <div className="pt-40 pb-20 px-20 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0 pr-0 md:pr-12">
          <span className="text-gray-400 font-semibold">Cross-Industry Excellence</span>
          <h2 className="text-3xl text-gray-700 mt-4 mb-6">Tailored Solutions for Diverse Industries</h2>
          <p className="text-gray-600 mb-6">
            Experience tailored solutions designed to meet the specific needs of healthcare, consulting, and finance industries. Unlock seamless travel management for your sector.
          </p>
          {/* Image moved here */}
          <img src={taillored} alt="Cross-Industry Solutions" className="w-full h-96 rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          {/* Vertical cards moved here */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <span className="text-gray-400 font-semibold">Healthcare</span>
              <h3 className="text-xl text-gray-600 mt-2 mb-3">Simplify Travel Management for Health Professionals</h3>
              <p className="text-gray-600">Streamline travel arrangements for medical staff and ensure seamless patient care with our tailored solutions for the healthcare sector.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <span className="text-gray-400 font-semibold">Consulting</span>
              <h3 className="text-xl text-gray-600 mt-2 mb-3">Enhance Efficiency for Consulting Teams</h3>
              <p className="text-gray-600">Optimize travel logistics and client engagements with our specialized solutions tailored to the unique demands of consulting firms.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
              <span className="text-gray-400 font-semibold">Finance</span>
              <h3 className="text-xl text-gray-600 mt-2 mb-3">Maximize Efficiency for Financial Institutions</h3>
              <p className="text-gray-600">Drive productivity and compliance in financial travel operations with our comprehensive solutions tailored for the finance industry.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last section */}
      <div className="max-w-7xl mx-auto my-20 bg-blue-500 rounded-3xl py-12 px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Travel Experience?</h2>
        <p className="text-white mb-8">Connect with us now to revolutionize your business travel journey with our expert solutions.</p>
        <Button
          type="default"
          className="bg-white text-blue-500 hover:bg-black hover:text-white transition duration-300 ease-in-out flex items-center justify-center mx-auto"
        >
          Let's Talk <span className="ml-2">&gt;</span>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;