import React, { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import {Dropdown, Space } from 'antd';

const items = [


  { key: '1', label: 'Sort by: Recommended', },
  { key: '2', label: 'Sort by: Purchase date' },
  { key: '3', label: 'Sort by: Purchase count' },

];

const Lang = () => {
    const [selected, setSelected] = useState("Sort by: Recommended");   
  
    const handleMenuClick = (info) => {
      const selectedItem = items.find((item) => item.key === info.key);
      setSelected(selectedItem.label);
    };
  return (
    <div>
     <Dropdown
  menu={{
    items,
    onClick: handleMenuClick,
  }}
  
  placement="bottomLeft"
>
 
 <a onClick={e => e.preventDefault() } className="text-black">
      <Space>
        <p className="text-[black]">
         {selected}

        </p>
        <DownOutlined style={{color:'black'}} />
      </Space>
    </a>
  </Dropdown>
    </div>
  )
}

export default Lang