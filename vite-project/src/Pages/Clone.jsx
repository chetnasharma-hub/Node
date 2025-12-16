import  { useContext } from "react";
import { Card } from "antd";
import { Carousel } from "antd";
import example from "../assets/lamp.jpg";
import lamp1 from "../assets/lamp1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { StarOutlined, StarFilled, CheckOutlined } from "@ant-design/icons";
import { CartContext } from "../Components/CartContext";
const { Meta } = Card;



const Home = () => {
  const { addToCart } = useContext(CartContext);
  // First Card API
  const [photo, settext] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(" http://127.0.0.1:8000/user/api/maincard/")
        .then((res) => {
          console.log("Response:", res.data);
          settext(res.data);
        })
        .catch((error) => {
          console.error("Axios Error:", err.response?.data?.message);
          settext(error?.response?.data?.message);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  }, []);

  // Second Card API

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

  //  Third Card API

  const [pics, setmessage] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/user/api/four/")
        .then((res) => {
          console.log("Response:", res.data);
          setmessage(res.data);
        })
        .catch((error) => {
          console.error("Axios Error:", err.response?.data?.message);
          setmessage(error?.response?.data?.message);
        });
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  }, []);

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-gray-200">
      <div className="relative w-full ">
        {/* Main Banner Start */}
        <Carousel arrows infinite autoplay dots={false}>
          {[
            "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
            "https://images.pexels.com/photos/5872177/pexels-photo-5872177.jpeg",
            "https://img.freepik.com/free-vector/hand-drawn-shopping-background_23-2149074073.jpg",
            "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
          ].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </Carousel>
        {/* Main Banner End */}

        {/* Cards Grid Start */}
        <div className=" absolute top-40 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8">
          {photo.map((item, index) => (
            <Card key={index} className="">
              <Meta title={item.title} description={item.description} />

              {/* Images Section */}
              <div className="grid grid-cols-2 gap-3 mt-4 p-2">
                {[
                  item.one_image,
                  item.two_image,
                  item.three_image,
                  item.four_image,
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="object-cover rounded-md w-full h-[120px] sm:h-[140px] md:h-[150px]"
                  />
                ))}
              </div>

              <a className="text-blue-600 underline text-center block py-3 cursor-pointer">
                See more deals
              </a>
            </Card>
          ))}
        </div>
        {/* Cards Grid End */}
      </div>
      <div className="flex flex-col bg-white w-full m-8 p-8 gap-4 mt-90">
        {" "}
        {/* BIKES */}
        <h2 className="text-lg font-semibold">
          {" "}
          Get yourself a sweet ride | Starting Rs70,348
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          <img
            className="w-full h-40 object-cover rounded"
            src="https://t4.ftcdn.net/jpg/08/07/02/23/360_F_807022380_DPqoB3P830s4XpNknFlMHggyfRjjkgVc.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://media.istockphoto.com/id/512573205/photo/3d-image-of-an-orange-modern-motorbike.jpg?s=612x612&w=0&k=20&c=gYtR-yjqpb3953viLKcvizfGn7qx8ba8pfEeJgBDu9c="
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp_yJKB6rbXh2-iQ7a-WYRxA-0uuKrySH_A&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTs0vBnl2oi-2o6V4s30V8Ef6yu1uBQMhMdA&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://media.gettyimages.com/id/136540152/photo/white-and-black-dirt-bike-over-a-white-backgound.jpg?s=612x612&w=gi&k=20&c=ZCXsH0ldd-6C0c3d86JYUtU7SvyP6LAgrHUAx5eSoIw="
            alt=""
          />
        </div>
      </div>{" "}
      {/* BIKES Ends*/}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 m-4">
        {/* Second Cards Starts*/}
        {items.map((item, index) => (
          <Card
            key={index}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-[420px] "
            style={{ width: "100%", maxWidth: "300px" }}
          >
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
      </div>{" "}
      {/* Second Cards Ends*/}
      <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">
        {" "}
        {/* Lamps Starts*/}
        <h2 className="text-[25px] font-bold">
          Min. 50% off | Unique home finds | Many Brands & more{" "}
          <a href="" className="text-blue-600 text-[15px]  hover:text-blue-800">
            See more
          </a>{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          <img className="w-full h-40 object-cover" src={example} alt="" />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrKymS6rMCEOuHpvWso2o1zmgHMpjr6iUKw&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2025/JULY/24/8g3XyFMX_28e055d619344ca294f890d7c8f63f6f.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://www.zestaneon.com/cdn/shop/files/516lrZqD4QL._SL1100.jpg?v=1742891959&width=1445"
            alt=""
          />
          <img className="w-full h-40 object-cover" src={lamp1} alt="" />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN0_A3FL_b9jQDZxlS0Xw8HI1QmRVf9r10Q&s"
            alt=""
          />
        </div>
      </div>{" "}
      {/* Lamps Ends */}
      <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">
        {" "}
        {/* Furniture Starts*/}
        <h2 className="text-[25px] font-bold">
          Up to 60% Off | Best selling furniture from stores nearby
          <a
            href=""
            className="text-blue-600 text-[15px] ml-3 hover:text-blue-800"
          >
            See all offers
          </a>{" "}
        </h2>
        <div className="grid grid-cols-6 gap-4 w-full">
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdcZXzY72xQZCYOD25W2E95yWKWnw3gAWFw&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTYDBcaBeTR7uNsQy2V69oP02ZWk1GcadRQ&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hRoQp_66nEP2gYTzSme4LxL6KhQYSsJfXQ&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvrmF3YPCGJgXsupfP2NCNPmWa71XD2pfHQ&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tWPrONFXbOoV0OR4lXG3l2_PBHjdlYQe9g&s"
            alt=""
          />
          <img
            className="w-full h-40 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJra0NrQ0ZYcDcxkWpwihy6tyj765aEclxOw&s"
            alt=""
          />
        </div>
      </div>{" "}
      {/* Furniture Ends */}
      <div className="flex bg-white w-[70%] lg:w-[70%] m-5 p-8 gap-4">
        {" "}
        {/* one pic section Starts*/}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="bg-blue-100 w-full lg:w-[250px] h-[200px] flex justify-center items-center">
            <img
              className="w-[150px] h-[150px] object-contain"
              src="https://cdn.shopify.com/s/files/1/0859/4545/0780/files/3_ea902db3-d34a-4ca5-a1c3-37eb1dde1b41.png?v=1724913068"
              alt=""
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-lg t">
              TRENDY Pre-Assembled Foldable Metal Rack for.....
            </h2>
            <div>
              <span className="text-[25px] text-yellow-300">
                <StarFilled />
              </span>
              <span className="text-[25px] text-yellow-300">
                <StarFilled />
              </span>
              <span className="text-[25px] text-yellow-300">
                <StarFilled />
              </span>
              <span className="text-[25px] text-yellow-300">
                <StarFilled />
              </span>
              <span className="text-[25px] text-yellow-300">
                <StarOutlined />
              </span>{" "}
              <span className="text-[20px] text-gray-500 text-lighter">67</span>
              <div className="mt-1">
                <span className="bg-red-600 text-white p-1">61% off</span>{" "}
                <span className="text-sm text-red-600 font-bold">
                  Limited time deal
                </span>
              </div>
              <div className=" flex gap-3 mt-2">
                <p className="text-[20px] text-black-600 font-bold">₹8120</p>
                <p className="text-[20px] text-gray-400 line-through">
                  ₹20,999.00
                </p>{" "}
                <span className="text-yellow-500 text-[20px] font-semibold">
                  <CheckOutlined />
                  <span className="text-blue-500">prime</span>
                </span>
              </div>
            </div>
            <div className="mt-1">
              <button className="bg-amber-500 p-1 w-[100px] h-[30px] rounded-[50px] text-sm">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*  one pic section Ends */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 m-4">
        {" "}
        {/* Third Cards Starts*/}
        {pics.map((pics, index) => (
          <Card
            key={index}
            className="mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <h2 className="text-[20px] font-bold"> {pics.Description}</h2>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                {" "}
                <img
                  src={pics.ist_image}
                  alt={pics.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                {" "}
                <img
                  src={pics.second_image}
                  alt={pics.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                {" "}
                <img
                  src={pics.third_image}
                  alt={pics.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                {" "}
                <img
                  src={pics.fourth_image}
                  alt={pics.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>{" "}
      {/* Third Cards Ends*/}
      <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">
        {" "}
        {/* BIKES */}
        <h2 className="text-lg font-semibold">
          {" "}
          Up to 75% off | Curated products from Small Businesses{" "}
          <a href="" className="text-blue-600 text-[15px]  hover:text-blue-800">
            See more
          </a>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/31z2Rp3DEaL._SX300_SY300_QL70_FMwebp_.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/31LRzk5aguL._SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/41D+bzbgMXL._SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/31SlmbdR+eL._SY445_SX342_QL70_FMwebp_.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/41hJzQjFmfL._SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
          <img
            className="w-full h-40 object-cover rounded"
            src="https://m.media-amazon.com/images/I/61U7EiPgtWL._SX425_.jpg"
            alt=""
          />
        </div>
      </div>{" "}
      {/* BIKES Ends*/}
      <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
