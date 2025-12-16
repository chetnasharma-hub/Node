import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    setIsModalOpen(false); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      
      <div className="cursor-pointer" onClick={showModal}>
        <p className="text-xs text-gray-300">Deliver to</p>
        <p className="font-semibold">Update Location</p>
      </div>

    
      <Modal
        title="Choose your location"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
        width={400}
      >
        <div className='flex flex-col gap-4'>
          <p className='text-xs text-gray-600'>
            Select a delivery location to see product availability and delivery options
          </p>

          <button className='bg-amber-500 p-1 w-full h-[30px] rounded-[50px] text-sm'>
            Sign in to see your address
          </button>

          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-500">or enter an Indian pincode</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <div className='flex gap-4'>
              <Form.Item name="pincode">
                <Input placeholder="Enter pincode" />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className='!py-2 !text-[16px]'
                >
                  Apply
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Address;