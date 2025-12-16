import React from 'react'
import { Tabs,Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import Dropdown from "../Components/Dropdown.jsx";
import Inspired from "../Components/Inspired.jsx";
const onChange = key => {
  console.log(key);
};
const items = [
  { key: '1', label: 'Orders', children: (
      <div>
        <div className='flex gap-2'><p className='font-bold'>0 orders palced in</p>
         <div><Dropdown /></div>
        </div>
        <div className='flex justify-center items-center mt-[40px]'>
        <p>Looks like you haven't placed an order in the last 3 months. <span><a href=""> View orders in 2025</a></span></p>
      </div>
      </div>
    ) 
  },
  { key: '2', label: (
      <span
        onClick={(e) => { e.stopPropagation(); window.location.href = "/buyagain";}}
        >Buy Again</span>), children:null },
  { key: '3', label: 'Not Yet Shipped', children:  (
     <div>
        
        <div className='flex justify-center items-center mt-[40px]'>
        <p>Looking for an order? All of your orders have been dispatched. <span><a href="">View all orders</a></span></p>
        </div>
     </div>
    )  },
];
const Returns = () => 
{

  return (       
  <div>

    <div className="p-2 ml-[200px] mr-[200px] flex flex-col gap-3">
    <div>   <span className='text-blue-500 text-sm'>Your Account</span> <span className='text-[10px]'> > </span> <span className='text-amber-600 text-sm'>Your Orders</span></div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[30px] font-semibold">Your Orders</h2>
        <div className='flex gap-3'>       
        <Input
      placeholder="Search all orders"
      allowClear
      style={{ width: 350 }}
      prefix={<SearchOutlined style={{ color: "black", fontSize: 18 }} />}
      className="rounded-full border border-gray-900 focus:border-black focus:shadow-none"
    />
        <button class="bg-black text-white px-5 h-[35px] rounded-full text-sm flex items-center justify-center hover:bg-gray-800 transition">Search Orders
        </button>

        </div>
 
      </div>

     
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
 
      </div>
           <div><Inspired/></div>
    </div>
  );
};


export default Returns