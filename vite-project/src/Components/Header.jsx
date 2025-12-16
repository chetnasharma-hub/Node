import { useContext } from "react";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Slider from "../Components/Slider.jsx";
import Language from "../Components/Lang.jsx";
import Address from "./Address.jsx";
import { CartContext } from "../Components/CartContext";
import { Link } from "react-router-dom";

const { Search } = Input;

const AmazonHeader = () => {
  const { cart } = useContext(CartContext);
  console.log("header", cart);
  return (
    <div className="bg-[#131921] text-white">
      <div className="flex items-center justify-between px-6 py-3 gap-6">
        <h2 className="text-2xl font-bold px-2 py-1 hover:border hover:border-white  cursor-pointer">
          Amazon
        </h2>

        <div className="px-2 py-1 hover:border hover:border-white  cursor-pointer">
          <p>
            <Address />
          </p>
        </div>

        <div className="w-[350px]">
          <Search
            placeholder="Search Amazon"
            allowClear
            enterButton
            size="large"
          />
        </div>
        <div className=" px-2 py-1 hover:border hover:border-white  cursor-pointer">
          <Language />
        </div>
        <div className=" px-2 py-1 hover:border hover:border-white  cursor-pointer">
          <p className="text-xs">
            <a href="/login">Hello! Login</a>
          </p>
          <p className="font-semibold">
            <a href="/login">Account & Lists</a>
          </p>
        </div>

        <div className=" px-2 py-1 hover:border hover:border-white  cursor-pointer">
          <p className="text-xs">
            <a href="/returns">Returns</a>
          </p>
          <p className="font-semibold">
            <a href="/returns">& Orders</a>
          </p>
        </div>

        {/* <div className="px-2 py-1 hover:border hover:border-white text-[30px] cursor-pointer"> 
          {cart.map((item,index)=>(
            <div key={index.id}>

              <p>{item.title}</p>
            </div>
          ))}
          {cart.length}
          <ShoppingCartOutlined />
        </div> */}

        <div className="relative cursor-pointer p-2 hover:bg-white/10 rounded-lg transition">
          <Link to="/addtocart">
            <ShoppingCartOutlined className="text-3xl text-white" />
          </Link>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>
      </div>

      <div className="bg-[#232f3e] flex justify-between items-center px-6 py-2 gap-4 text-sm ">
        <div className="hover:bg-[#485769]">
          <Slider />
        </div>
        <div className="hover:bg-[#485769]">
          <a href="/home">Home</a>
        </div>
        <div className="hover:bg-[#485769]">3</div>
        <div className="hover:bg-[#485769]">4</div>
        <div className="hover:bg-[#485769]">5</div>
        <div className="hover:bg-[#485769]">6</div>
        <div className="hover:bg-[#485769]">7</div>
        <div className="hover:bg-[#485769]">8</div>
        <div className="hover:bg-[#485769]">9</div>
        <div className="hover:bg-[#485769]">10</div>
        <div className="hover:bg-[#485769]">11</div>

        <div className="bg-[#232f3e] px-6 py-1 rounded cursor-pointer hover:bg-[#485769]">
          12
        </div>
      </div>
    </div>
  );
};

export default AmazonHeader;
