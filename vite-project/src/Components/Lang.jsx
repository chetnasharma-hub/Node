import  React, { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import {Dropdown, Space } from 'antd';



const Lang    = () => {
    const [selected, setSelected] = useState("English - EN");   
    const items = [
      { key: '1', label: 'Choose a language',disabled: true, },
      { key: '2', label: 'English - EN' },
      {type: 'divider'},
      { key: '3', label: 'हिन्दी - HI - अनुवाद' },
      { key: '4', label: 'தமிழ் - TA - மொழிபெயர்ப்பு' },
      { key: '5', label: 'తెలుగు - TE - అనువాదం' },
      { key: '6', label: 'ಕನ್ನಡ - KN - ಭಾಷಾಂತರ' },
      { key: '7', label: 'മലയാളം - ML - വിവർത്തനം' },
      { key: '8', label: 'বাংলা - BN - অনুবাদ' },
      { key: '9', label: 'मराठी - MR - भाषांतर' },
];
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
 
 <a onClick={e => e.preventDefault()}>
      <Space>
         {selected}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
   

    </div>
  )
}

export default Lang


