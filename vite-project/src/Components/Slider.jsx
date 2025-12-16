import React, { useState } from 'react';
import {  Drawer } from 'antd';
import { UserOutlined } from "@ant-design/icons";

const Slider = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
     <div
        onClick={showDrawer}
        className="space-y-1 cursor-pointer px-2 py-1 hover:border hover:border-white rounded flex gap-2"
      >
        <div className="space-y-1">
          <span className="block w-5 h-[3px] bg-white"></span>
          <span className="block w-5 h-[3px] bg-white"></span>
          <span className="block w-5 h-[3px] bg-white"></span>
        </div>

       
        <span className="font-semibold text-white text-sm">All</span>
      </div>
<Drawer
  title={
    <div className="flex items-center gap-2 text-white">
      <UserOutlined className="text-xl" />
      <span><a href="/login" >Hello! SignIn</a></span>
    </div>
  }
  styles={{
    header: {
      backgroundColor: "#1f2937",
      color: "white",
      borderBottom: "1px solid #374151",
    },

  }}
  closable={{ 'aria-label': 'Close Button' }}
  placement="left"
  onClose={onClose}
  open={open}
>

        <div className='flex flex-col justify-between gap-3'>
        <div className='flex flex-col gap-2 pb-4 mb-4 border-b border-gray-300'>
        <h2 class="text-xl font-semibold text-gray-800">Trending</h2>
        <p>Bestsellers</p>
        <p>New Releases</p>
        <p>Movers and Shakers</p>
        </div>
        
        <div className='flex flex-col gap-2 pb-4 mb-4 border-b border-gray-300'>
        <h2 class="text-xl font-semibold text-gray-800">Digital Content and Devices</h2>
        <p>Echo & Alexa</p>
        <p>Tv</p>
        <p>Kindle</p>
        <p>Audio Books</p>
        <p>Videos</p>
        <p>Music</p>
        </div>
        </div>
      </Drawer>
    </>
  );
};
export default Slider;