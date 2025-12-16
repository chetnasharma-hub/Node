import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';

const items = [
  { key: '1', label: 'Last 30 days' },
  { key: '2', label: 'Past 3 months' },
  { key: '3', label: '2023' },
  { key: '4', label: '2022' },
];

const OpDropdown = () => {
  const [selected, setSelected] = useState("Last 30 days"); 

  const handleMenuClick = (info) => {
    const selectedItem = items.find((item) => item.key === info.key);
    setSelected(selectedItem.label);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      placement="bottomLeft"
    >
      <Button>
        <Space>
          {selected}      
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default OpDropdown;
