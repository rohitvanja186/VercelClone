import React from 'react';
import { Button, Form, Input } from 'antd';
import worldMap from '../assets/world-map.svg';
import taillored from '../assets/taillored.svg';

const HomePage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <main className="bg-[#f6f8f9] pt-10">
      <section className=" max-w-[1700px] mx-auto px-10 3xl:px-0 space-y-56">
        {/* Hero section with form */}
        <section 
          className="h-[680px] rounded-3xl relative" 
          style={{
            background: "url('https://images.unsplash.com/photo-1528048786098-cc8217b47088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center center / cover"
          }}
        >
          <div className="flex justify-center items-center h-full relative px-10 backdrop-brightness-75 rounded-3xl">
            <div className="w-[100%] text-center">
              <h1 className="text-2xl md:text-[54px] md:leading-[54px] text-white">
                Empower Your Business Travel with Tailored Solutions
              </h1>
              <p className="text-white mt-4 text-xs md:text-base xl:text-2xl leading-6">
                Streamline Your Travel Program with Customized Business Travel Management Services
              </p>
            </div>
            <div className="absolute -bottom-20 w-[80%] bg-white rounded-3xl p-7 shadow-lg">
              <Form
                name="contact"
                onFinish={onFinish}
                layout="vertical"
                className="grid grid-cols-1 md:grid-cols-4 gap-5"
              >
                <Form.Item
                  name="companyName"
                  label="Company Name"
                  rules={[{ required: true, message: 'Field required.' }]}
                >
                  <Input placeholder="Enter" />
                </Form.Item>
                <Form.Item
                  name="contactPerson"
                  label="Contact Person Name"
                  rules={[{ required: true, message: 'Field required.' }]}
                >
                  <Input placeholder="Enter" />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Field required.' }]}
                >
                  <Input placeholder="Enter" type="tel" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Field required.' },
                    { type: 'email', message: 'Please enter a valid email address!' }
                  ]}
                >
                  <Input placeholder="Enter" type="email" />
                </Form.Item>
                <Form.Item className="md:col-span-1">
                  <Button type="primary" htmlType="submit" className="w-full">Let's Talk</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="grid md:grid-cols-2 pt-20 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-[#516278] dark:text-gray-200">Navigate the Future of Travel Programs with Expert Guidance</span>
            <h2 className="text-[#394453] dark:text-gray-200 text-4xl leading-[52px]">Unlock Success in Business Travel Management</h2>
            <p className="text-[#394453] leading-[23.2px] dark:text-gray-200">
              Discover the power of streamlined communication and strategic planning with our comprehensive approach to managed business travel. Whether you're optimizing your current program or envisioning a future strategy, we provide the tools and expertise to help you achieve your goals. From reviewing existing processes to designing innovative solutions, we guide you every step of the way. Wherever you are in your journey, trust us to deliver the tailored solutions you need to thrive in the evolving landscape of business travel.
            </p>
          </div>
          <div className="relative w-full h-full">
            <img src={worldMap} alt="Expert Guidance in Business Travel" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
        </section>

        {/* Card section */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-slate-600 dark:text-gray-300">Simplify Your Business Travel Management</span>
            <h2 className="text-slate-800 text-4xl font-medium dark:text-white">Find the Perfect Solution for Your Travel Needs</h2>
            <p className="text-slate-700 dark:text-gray-400">
              Simplify business travel with our versatile solutions: all-in-one platform, customized approach, and expense management tools.
            </p>
          </div>
          <section className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4 p-6 rounded-xl bg-blue-50">
              <div className="space-y-1">
                <span className="text-slate-600">Tailored Trip Planning</span>
                <h3 className="text-slate-800 text-xl font-medium">Comprehensive Travel Booking</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">From flights to accommodations, we handle every detail to ensure a seamless travel experience.</p>
            </div>
            <div className="space-y-4 p-6 rounded-xl bg-green-50">
              <div className="space-y-1">
                <span className="text-slate-600">Effortless Spending Oversight</span>
                <h3 className="text-slate-800 text-xl font-medium">Expense Management Solutions</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">Track, manage, and optimize business travel expenses with our intuitive expense management solutions.</p>
            </div>
            <div className="space-y-4 p-6 rounded-xl bg-orange-50">
              <div className="space-y-1">
                <span className="text-slate-600">Dedicated Traveler Care</span>
                <h3 className="text-slate-800 text-xl font-medium">Traveler Assistance and Support</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">Our team is here around the clock to provide personalized support and assistance for all travelers' needs.</p>
            </div>
          </section>
        </section>

        {/* Cross-industry section */}
        <section className="grid md:grid-cols-2 gap-10 pb-10">
          <div className="space-y-5">
            <div className="space-y-1">
              <span className="text-[#516278] dark:text-gray-300">Cross-Industry Excellence</span>
              <h2 className="text-[#394453] text-4xl leading-[52px] font-medium dark:text-white">Tailored Solutions for Diverse Industries</h2>
              <p className="text-[#394453] leading-[23.2px] dark:text-gray-200">Experience tailored solutions designed to meet the specific needs of healthcare, consulting, and finance industries. Unlock seamless travel management for your sector.</p>
            </div>
            <div className="relative min-w-full h-full">
              <img src={taillored} alt="Tailored Solutions" className="min-w-fit h-full object-contain object-left" />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4 p-6 rounded-xl bg-blue-50">
              <div className="space-y-1">
                <h3 className="text-slate-800 text-xl font-medium">Simplify Travel Management for Health Professionals</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">Streamline travel arrangements for medical staff and ensure seamless patient care with our tailored solutions for the healthcare sector.</p>
            </div>
            <div className="space-y-4 p-6 rounded-xl bg-green-50">
              <div className="space-y-1">
                <h3 className="text-slate-800 text-xl font-medium">Enhance Efficiency for Consulting Teams</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">Optimize travel logistics and client engagements with our specialized solutions tailored to the unique demands of consulting firms.</p>
            </div>
            <div className="space-y-4 p-6 rounded-xl bg-orange-50">
              <div className="space-y-1">
                <h3 className="text-slate-800 text-xl font-medium">Maximize Efficiency for Financial Institutions</h3>
              </div>
              <p className="leading-[23.2px] text-slate-600">Drive productivity and compliance in financial travel operations with our comprehensive solutions tailored for the finance industry.</p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="rounded-[40px] bg-[#0783e1] px-10 py-20 bg-primary text-center space-y-10">
          <div className="space-y-3">
            <h2 className="text-white text-4xl font-medium">Ready to Transform Your Travel Experience?</h2>
            <p className="text-white leading-[23.2px]">Connect with us now to revolutionize your business travel journey with our expert solutions</p>
          </div>
          <a href="#" className="block">
            <Button
              type="default"
              className="bg-white text-primary border-primary hover:bg-dark hover:text-white px-4 py-3 rounded-full flex justify-between items-center gap-10 mx-auto"
            >
              Let's Talk <span className="ml-2">&gt;</span>
            </Button>
          </a>
        </section>
      </section>
    </main>
  );
};

export default HomePage;