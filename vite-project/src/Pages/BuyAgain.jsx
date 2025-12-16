import { Tabs } from 'antd';
import  Sort from "../Components/Sort.jsx";
import  Categories from "../Components/Categories.jsx";
import { Input } from 'antd';
import Inspired from "../Components/Inspired.jsx";
import { SearchOutlined } from "@ant-design/icons";
import './Register.css'
const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Buy Again',
    children: (<div className='flex justify-between mx-5'>
      
            <div><h2 className="text-[30px] font-semibold">Buy Again</h2></div>
            <div>
            <div className='flex gap-3'>
                 <Input placeholder="Search past purchases" allowClear style={{ width: 200, height:30,}}
                        prefix={<SearchOutlined style={{ color: "black", fontSize: 18 }} />}/>
                  <span className='border border-black text-black rounded w-auto h-[30px] p-2 flex items-center justify-center'><Sort/></span>      
            </div>
            <div className='flex justify-end mt-2'>
              <div className='border border-black rounded p-2 items-center w-fit h-[30px] flex items-center'><Categories /></div>
            </div>

            </div>
            
    </div>),
  },
  {
    key: '2',
    label: 'Subscribe & Save',
    children: 'Content of Tab Pane 2',
  },
  
];
const BuyAgain = () => {
  return (
    <div className='ml-4' ><Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <div className="w-72 bg-white shadow-md rounded-sm p-4 border border-gray-200">
      <img src="https://m.media-amazon.com/images/I/51jkHQTwm5L._SY300_SX300_QL70_FMwebp_.jpg"alt="Shelving Unit" className="w-full h-48 object-contain mb-3"/>
      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
    STAR WORK Black Adjustable Set of 5-Shelf Metal Storage Shelving Unit, Steel Bootless Rivet Utility Display Rack Garage Shelves, 63 Inches Height(63 X 24 X 12 Inch-H X W X D,Black)
  </h2>
  <div className="mt-2">
    <span className="text-red-600 font-bold text-lg">-29% <span className='text-black'>₹2493.00</span></span>
    <p className="text-gray-500 text-xs">
      M.R.P: <span className="line-through">₹5567.00</span>
    </p>
  </div>
  <p className="text-black-700 text-xs mt-2">
    FREE delivery <span className='font-bold'>Sat, 29 Nov</span> on ₹499 of items fulfilled by Amazon
  </p>
  <button className="w-full bg-yellow-400 mt-3 py-2 text-sm font-medium rounded-full hover:bg-yellow-500">
    Add to cart
  </button>
</div>
<div><Inspired/></div>
</div>
  )
}

export default BuyAgain

