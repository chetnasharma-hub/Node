import  { useContext } from "react";
import { Card } from "antd";

import { useEffect, useState } from "react";
import axios from "axios";

import { CartContext } from "../Components/CartContext";
const { Meta } = Card;



const Home = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [items, setm] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/user/api/items/")
        .then((res) => {
          console.log("Response:", res.data);
          setm(res.data);
        })
        .catch((error) => {
          console.error("Axios Error:", err.response?.data?.message);
          setm(error?.response?.data?.message);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  }, []);



  return (
    <div className="w-full  flex flex-col items-center justify-center bg-gray-200">

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 m-4">
        {/* Second Cards Starts*/}
        {items.map((item, index) => (

          <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-[420px] "
            style={{ width: "100%", maxWidth: "300px" }}>
            <div className="w-full h-56 bg-white flex items-center justify-center">
              <img
                src={item.product_image}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>

              <div className="flex gap-3 mt-3">
                <p className="text-[15px] font-bold text-black">
                  ₹{item.price}
                </p>
                <p className="text-[15px] text-gray-400">
                  M.R.P: <span className="line-through">₹{item.discount}</span>
                </p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all">
                Add To Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
      {/* Second Cards Ends*/}
 
    </div>
  );
};

export default Home;
