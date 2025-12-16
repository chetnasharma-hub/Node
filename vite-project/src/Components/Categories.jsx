import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Space, theme, Checkbox } from 'antd';

const { useToken } = theme;

const Categories = () => {
  const [selected] = useState("Categories");

  const items = [
    {
      key: '1',
      label: (
        <div className="p-1">
          <h2 className="font-bold mb-1">Categories</h2>

          <div className="flex flex-col gap-1">
            <Checkbox onChange={(e) => console.log(e.target.checked)}>Home & Kitchen</Checkbox>
            <Checkbox onChange={(e) => console.log(e.target.checked)}>Home Improvement</Checkbox>
          </div>
        </div>
      ),
    },
  ];

  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = { boxShadow: 'none' };

  return (
    <Dropdown
      menu={{ items }}
      popupRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, { style: menuStyle })}

          <Divider style={{ margin: 0 }} />

          
          <Space style={{ padding: 8 }}>
            <Button className='rounded-full'>Clear Filters</Button>
            <Button className='rounded-full bg-yellow-400'>Show Results</Button>
          </Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <p className="text-black">{selected}</p>
          <DownOutlined style={{ color: 'black' }} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Categories;
