import React from 'react';
import { Card } from 'antd';
import { Carousel } from 'antd';
import example from '../assets/lamp.jpg'
import lamp1 from '../assets/lamp1.jpg'
import { useEffect } from "react";
import axios from "axios";

import { StarOutlined, StarFilled,CheckOutlined} from "@ant-design/icons";
const { Meta } = Card;

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
    useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/user/api/course/")
        .then((res) => {
          console.log("Response:", res.data);
        })
        .catch((err) => {
          console.error("Axios Error:", err.response?.data || err.message);
        }); 
    } catch (error) {
      console.error("Try-Catch Error:", error);
    }
  }, []); 

  return(
<div className="w-full  flex flex-col items-center justify-center bg-gray-200">
    <div className="relative w-full pb-64"> {/* Main Bannner Start */}
      <Carousel arrows infinite={true} autoplay dots={false} > {/* Main Carousal Start */}
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            style={{ width: "100%", height: "400px",     objectFit: "cover",
                     WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                     maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", }}
            alt="Slide 1"/>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5872177/pexels-photo-5872177.jpeg"
            style={{ width: "100%", height: "400px", objectFit: "cover",
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", }}
            alt="Slide 2" />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-shopping-background_23-2149074073.jpg"
            style={{ width: "100%", height: "400px",     objectFit: "cover",
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", }}
            alt="Slide 3"
          />

        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            style={{ width: "100%", height: "400px",     objectFit: "cover",
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", }}
            alt="Slide 4"
          />
        </div>
      </Carousel>{/* Main Carousal End */}
      <div className="absolute top-[230px] left-0 right-0 w-full flex justify-between px-4"> {/* First Four Card Start */}
        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <Meta title="Home Decor" description="Beautify your space" />
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLg-yxqpv78Hr15UKLg5ggiAUrwl-tM2MTg&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0omM4xiSLnf-TZOxiPpy664P7qbzZXzBzw&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjyrBOqeS2R9xNwkFxIufOO-h3f87Zq79qg&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://momentz.in/cdn/shop/files/MZH23828-201N.png?v=1755064585&width=700')] bg-cover bg-center h-32 rounded"></div>
          </div>
          <a href="">See more deals</a>
        </Card>

        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <Meta title="Fashion Deals" description="Trending styles for you" />
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_j-gbGFRqwGAwhoXIIS_RLlEW78hIEu7GA&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/27809704/2025/7/8/9001be77-f1f8-40fd-91c8-74bc1567d35b1751966994547-Bewakoof-Women-Straight-Fit-High-Rise--Baggy-Jeans-751175196-1.jpg')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://i.pinimg.com/474x/a3/bd/b1/a3bdb1f062d37bd91ee6698a23e5cc52.jpg')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG0z67hGb6pWL5SEmfFKtI0BUgUg-hfCljg&s')] bg-cover bg-center h-32 rounded"></div>
          </div>
          <a href="">Explore all</a>
        </Card>

        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <Meta title="Electronics" description="Latest tech gadgets" />
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JULY/30/EA7AcMUK_71d8d2941dfa4342a412402a86982cbe.jpg')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-OG_Vf_E9AVbZRLZFy5GDpJLxoFdbF7aFA&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIYp8IVPbw6fRNpqOo3BYmwWm564D3fJq2Q&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQFwIUqQ1MDIK49kf15UTsYpQaiXPPv0JXg&s')] bg-cover bg-center h-32 rounded"></div>
          </div>
          <a href="">See more</a>
        </Card>

        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <Meta title="Kitchen Essentials" description="Freshen up your cooking" />
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHpZweeOPTSZFEYktdRVSP2RGU-3vWQIPXA&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaAxleCv8RaQOH3Dh0lc4J0HZuWq30Q5askBY-JKNmd-6PRdgFQGUpamm7BLg2LAchfQ&usqp=CAU')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfjTLCyCfRMJidSeYzpAlTT09su6fSJm2ytIrvLOzNHEO9mD2cY2MSWH16ihOsSiK8aI&usqp=CAU')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE-Fs5EMh6b3vYVnHFks7pCcVX4jSb-TXPA&s')] bg-cover bg-center h-32 rounded"></div>
          </div>
          <a href="">See all</a>
        </Card> {/* First Four Card End */}
      </div>
    </div> {/* Main Bannner End */}


 
    
    <div className="flex flex-col bg-white w-full m-8 p-8 gap-4">   {/* BIKES */}
      <h2 className="text-lg font-semibold"> Get yourself a sweet ride | Starting Rs70,348</h2>
      <div className="grid grid-cols-5 gap-4 w-full">
        <img className="w-full h-40 object-cover rounded" 
        src="https://t4.ftcdn.net/jpg/08/07/02/23/360_F_807022380_DPqoB3P830s4XpNknFlMHggyfRjjkgVc.jpg" alt=""/>
        <img className="w-full h-40 object-cover rounded"
        src="https://media.istockphoto.com/id/512573205/photo/3d-image-of-an-orange-modern-motorbike.jpg?s=612x612&w=0&k=20&c=gYtR-yjqpb3953viLKcvizfGn7qx8ba8pfEeJgBDu9c=" alt="" />
        <img className="w-full h-40 object-cover rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp_yJKB6rbXh2-iQ7a-WYRxA-0uuKrySH_A&s" alt="" />
        <img className="w-full h-40 object-cover rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTs0vBnl2oi-2o6V4s30V8Ef6yu1uBQMhMdA&s" alt=""/>
        <img className="w-full h-40 object-cover rounded"
        src="https://media.gettyimages.com/id/136540152/photo/white-and-black-dirt-bike-over-a-white-backgound.jpg?s=612x612&w=gi&k=20&c=ZCXsH0ldd-6C0c3d86JYUtU7SvyP6LAgrHUAx5eSoIw=" alt=""/>
      </div>
    </div> {/* BIKES Ends*/}




    <div className="w-full flex justify-between p-8 m-4">  {/* Second Cards Starts*/}
        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
           <h2 className="text-[20px] font-bold"> Beautify Yourself | Best Sellers in Beauty</h2>
         
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://img.freepik.com/premium-vector/face-wash-tubes-package-white-background_317810-1515.jpg')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdNyecU-yqQ7WcF7H-pTFaI07SHeCzc1Zfg&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://media.istockphoto.com/id/1401379129/photo/sun-protection-lotion-with-spf-30-blue-tube-contaiber-with-sunscreen.jpg?s=612x612&w=0&k=20&c=7wUwJDZh7L6dCNzM_t8yOuCCdLV_pPMrXxWsyyaSCjk=')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://png.pngtree.com/png-vector/20250330/ourmid/pngtree-handmade-pink-and-white-soap-bars-stacked-isolated-on-transparent-background-png-image_15908570.png')] bg-cover bg-center h-32 rounded"></div>
          </div>
        </Card>

<Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
<div className='flex flex-col gap-10'>
  <h2 className="text-lg font-bold">
    Upto 60% off | Home and kitchen essentials
  </h2>

  <Carousel arrows infinite={false} dots={false}>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHpZweeOPTSZFEYktdRVSP2RGU-3vWQIPXA&s"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaAxleCv8RaQOH3Dh0lc4J0HZuWq30Q5askBY-JKNmd-6PRdgFQGUpamm7BLg2LAchfQ&usqp=CAU"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoDvYigxWMVxNm_C7EmnqAB9qD4DF6L0-sw&s"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdxbZrTzvX8uelcwCX3kb1EjKUl0psHiQ5Q&s"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>
  </Carousel>
  <div>  <h2 className='text-lg t'>Get kitchen ware, storage boxes and much more</h2>
   <div className=" flex gap-3 mt-2">
      <p className="text-[20px] text-black-600 font-bold">₹299</p>
      <p className="text-[20px] text-gray-400">M.R.P: <span className="line-through">₹799</span></p>
    </div>
    </div>

</div>
</Card>


        
        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
<div className='flex flex-col gap-10'>
  <h2 className="text-lg font-bold"> Upto 40% off | Smart storage, clutter-free living</h2>

  <Carousel arrows infinite={false} dots={false}>
    <div><img src="https://img.freepik.com/free-photo/eco-friendly-cleaning-products-set-basket-with-soaps-brushes_23-2148818497.jpg?semt=ais_hybrid&w=740&q=80"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://www.lifelongindiaonline.com/cdn/shop/files/SKU_PDP_4_7_a46c0b2d-f665-466e-ab31-5d1ce88f6b0b_930x.jpg?v=1752917899"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ErCdvL89PZPruW__-1H6aRLKN3mtVlxgsA&s"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7My9EPZDz2WJVoxld7Bw2F6m__Wg1yVNHfw&s"
      style={{ width: "100%", height: "160px", objectFit: "cover" }} /></div>
  </Carousel>
  <div>  <h2 className='text-lg t'>DOOMSDAY 4 Toothbrush, 1 Toothpaste Organiser stora.....</h2>
   <div className=" flex gap-3 mt-2">
      <p className="text-[20px] text-black-600 font-bold">₹199<sup>00</sup></p>
      <p className="text-[20px] text-gray-400">M.R.P: <span className="line-through">₹999</span></p>


    </div>
    </div>

</div>
</Card>

        <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Action Figures</h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div><div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Hx2CW2tbDMvJhOjlTffDSXAoZMVTNWcGyA&s')] bg-cover bg-center h-32 rounded"></div><p className='mt-2 text-sm'>Spider-Man</p></div>
          <div>  <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbH2q4Lx01FB9kNJxsANjKBCav4ikY6cqlg&s')] bg-cover bg-center h-32 rounded"></div><p className='mt-2 text-sm'>One-Piece Figurines</p></div>
           <div> <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_9B_vY7vFGeIT--K89R43X06BKb5BvEWOFfuHrGObEf7Xx75Q_iFJ6DWILCoq2WvvSI&usqp=CAU')] bg-cover bg-center h-32 rounded"></div><p className='mt-2 text-sm'>X-Men</p></div>
           <div> <div className="bg-[url('https://sm.ign.com/ign_in/screenshot/default/play-arts-kai_eecx.jpg')] bg-cover bg-center h-32 rounded"></div><p className='mt-2 text-sm'>Star wars</p></div>
          </div>
          <a href="">See more</a>
        </Card>
    </div> {/* Second Cards Ends*/}
    



    <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">   {/* Lamps Starts*/}
      <h2 className="text-[25px] font-bold">Min. 50% off | Unique home finds | Many Brands & more <a href="" className="text-blue-600 text-[15px]  hover:text-blue-800">See more</a> </h2> 
      <div className="grid grid-cols-6 gap-4 w-full">
        <img className="w-full h-40 object-cover" 
        src={example} alt=""/>
        <img className="w-full h-40 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrKymS6rMCEOuHpvWso2o1zmgHMpjr6iUKw&s" alt="" />
        <img className="w-full h-40 object-cover"
        src="https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2025/JULY/24/8g3XyFMX_28e055d619344ca294f890d7c8f63f6f.jpg" alt="" />
        <img className="w-full h-40 object-cover"
        src="https://www.zestaneon.com/cdn/shop/files/516lrZqD4QL._SL1100.jpg?v=1742891959&width=1445" alt=""/>
        <img className="w-full h-40 object-cover"
        src={lamp1} alt=""/>
        <img className="w-full h-40 object-cover" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN0_A3FL_b9jQDZxlS0Xw8HI1QmRVf9r10Q&s" alt=""/>
        
      </div>
    </div>  {/* Lamps Ends */}




    <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">   {/* Furniture Starts*/}
      <h2 className="text-[25px] font-bold">Up to 60% Off | Best selling furniture from stores nearby<a href="" className="text-blue-600 text-[15px] ml-3 hover:text-blue-800">See all offers</a> </h2> 
      <div className="grid grid-cols-6 gap-4 w-full">
        <img className="w-full h-40 object-cover" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdcZXzY72xQZCYOD25W2E95yWKWnw3gAWFw&s" alt=""/>
        <img className="w-full h-40 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTYDBcaBeTR7uNsQy2V69oP02ZWk1GcadRQ&s" alt="" />
        <img className="w-full h-40 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hRoQp_66nEP2gYTzSme4LxL6KhQYSsJfXQ&s" alt="" />
        <img className="w-full h-40 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvrmF3YPCGJgXsupfP2NCNPmWa71XD2pfHQ&s" alt=""/>
        <img className="w-full h-40 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tWPrONFXbOoV0OR4lXG3l2_PBHjdlYQe9g&s" alt=""/>
        <img className="w-full h-40 object-cover" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJra0NrQ0ZYcDcxkWpwihy6tyj765aEclxOw&s" alt=""/>
        
      </div>
    </div>  {/* Furniture Ends */}



    <div className="flex bg-white w-[70%] m-5 p-8 gap-4">   {/* one pic section Starts*/}
      
      <div className="flex gap-30">
       <div className="bg-blue-100 w-[250px] h-[200px] flex flex-1 justify-center items-center">
          <img className="w-[150px] h-[150px]object-contain" src="https://cdn.shopify.com/s/files/1/0859/4545/0780/files/3_ea902db3-d34a-4ca5-a1c3-37eb1dde1b41.png?v=1724913068" alt=""/>
       </div>

        <div className='flex flex-1 flex-col'>
          <h2 className='text-lg t'>TRENDY Pre-Assembled Foldable Metal Rack for.....</h2>
          <div>
            <span className="text-[25px] text-yellow-300"><StarFilled /></span>
            <span className='text-[25px] text-yellow-300'><StarFilled /></span>
            <span className='text-[25px] text-yellow-300'><StarFilled /></span >
            <span className='text-[25px] text-yellow-300'><StarFilled /></span>
            <span className='text-[25px] text-yellow-300'><StarOutlined /></span> <span className='text-[20px] text-gray-500 text-lighter'>67</span>
            <div className='mt-1'><span className='bg-red-600 text-white p-1'>61% off</span> <span className='text-sm text-red-600 font-bold'>Limited time deal</span> 
            </div>
            <div className=" flex gap-3 mt-2">
              <p className="text-[20px] text-black-600 font-bold">₹8120</p>
              <p className="text-[20px] text-gray-400 line-through">₹20,999.00</p> <span className='text-yellow-500 text-[20px] font-semibold'><CheckOutlined /><span className='text-blue-500'>prime</span></span></div>
            </div> 
            <div className='mt-1'><button className='bg-amber-500 p-1 w-[100px] h-[30px] rounded-[50px] text-sm'>Shop now</button></div>
        </div>
        
      </div>
    </div>  {/*  one pic section Ends */}



    <div className="w-full flex justify-between p-8 m-4">  {/* Third Cards Starts*/}
      <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className='flex flex-col gap-6'>
        <h2 className="text-lg font-bold">Upto 40% off | Winter essentials</h2>
        <Carousel arrows infinite={false} dots={false}>
          <div className="w-full h-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbEWo0HhPrhuxG4Egql1VmTRDGLNE970t7A&s"
             className="w-full h-full object-contain"/></div>
          <div className="w-full h-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YvH09IAce-WbYP4EcSr1K_D9gYS0DONBsA&s"
             className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src="https://www.jiomart.com/images/product/original/rv9x1uipwq/eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-1-202504231102.jpg?im=Resize=(500,630)"
          className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src="https://img.freepik.com/premium-photo/mens-black-leather-jacket-isolated-white-background_125604-204.jpg?w=740"
          className="w-full h-full object-contain"/></div>
        </Carousel>
      <div>  <h2 className='text-lg t'>Get winter fashion ware for men women and kids....</h2>
        <div className=" flex gap-3 mt-2">
         <p className="text-[20px] text-black-600 font-bold">₹299</p>
         <p className="text-[20px] text-gray-400">M.R.P: <span className="line-through">₹799</span></p>
        </div>
      </div>
     <div className='flex gap-2'>
      <div className='border border-gray-500 rounded p-1' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbEWo0HhPrhuxG4Egql1VmTRDGLNE970t7A&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YvH09IAce-WbYP4EcSr1K_D9gYS0DONBsA&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://www.jiomart.com/images/product/original/rv9x1uipwq/eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rv9x1uipwq-1-202504231102.jpg?im=Resize=(500,630)" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://img.freepik.com/premium-photo/mens-black-leather-jacket-isolated-white-background_125604-204.jpg?w=740" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
     </div>
</div>
</Card>


        
      <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className='flex flex-col gap-6'>
        <h2 className="text-lg font-bold">Upto 60% off | Home and kitchen essentials</h2>
        <Carousel arrows infinite={false} dots={false}>
          <div className="w-full h-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KrFq-CQV6cKEz4f2TRWaaDa5qu5n_gtLoQ&s"
             className="w-full h-full object-contain "/></div>
          <div className="w-full h-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK3XVifuewhA_NLiFAj30ayCNCVz_i5Vq7w&s"
             className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src="https://img.freepik.com/premium-photo/electric-juicer-white-background-with-reflection-kitchen-appliances_508835-9903.jpg"
          className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VaKb0WuC4GTd329lvpqUr3RRMjNoZ2R6SA&s"
          className="w-full h-full object-contain"/></div>
        </Carousel>
      <div>  <h2 className='text-lg t'>Get winter fashion ware for men women and kids....</h2>
        <div className=" flex gap-3 mt-2">
         <p className="text-[20px] text-black-600 font-bold">₹299</p>
         <p className="text-[20px] text-gray-400">M.R.P: <span className="line-through">₹799</span></p>
        </div>
      </div>
     <div className='flex gap-2'>
      <div className='border border-gray-500 rounded p-1' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KrFq-CQV6cKEz4f2TRWaaDa5qu5n_gtLoQ&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK3XVifuewhA_NLiFAj30ayCNCVz_i5Vq7w&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://img.freepik.com/premium-photo/electric-juicer-white-background-with-reflection-kitchen-appliances_508835-9903.jpg" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VaKb0WuC4GTd329lvpqUr3RRMjNoZ2R6SA&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
     </div>
</div>
</Card>
         
         <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
           <h2 className="text-[20px] font-bold"> Beautify Yourself | Best Sellers in Beauty</h2>
         
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-[url('https://img.freepik.com/premium-vector/face-wash-tubes-package-white-background_317810-1515.jpg')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdNyecU-yqQ7WcF7H-pTFaI07SHeCzc1Zfg&s')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://media.istockphoto.com/id/1401379129/photo/sun-protection-lotion-with-spf-30-blue-tube-contaiber-with-sunscreen.jpg?s=612x612&w=0&k=20&c=7wUwJDZh7L6dCNzM_t8yOuCCdLV_pPMrXxWsyyaSCjk=')] bg-cover bg-center h-32 rounded"></div>
            <div className="bg-[url('https://png.pngtree.com/png-vector/20250330/ourmid/pngtree-handmade-pink-and-white-soap-bars-stacked-isolated-on-transparent-background-png-image_15908570.png')] bg-cover bg-center h-32 rounded"></div>
          </div>
        </Card>


        
      <Card style={{ width: 300 }} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className='flex flex-col gap-6'>
        <h2 className="text-lg font-bold">Upto 30% off | Transform Your Space with Stunning Home Decor</h2>
        <Carousel arrows infinite={false} dots={false}>
          <div className="w-full h-40">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSLrsGO_zdDXHEN4P4kvD27wLLiROBq4_lQ&s"
             className="w-full h-full object-contain "/></div>
          <div className="w-full h-40">
            <img src={example}
             className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-t73qW9ka0e-dMuknZ9OtL2ZNLOIuZ91FXfHbW_Vx3xTZTI5DNVBDvNOMsxTEG6aQEY&usqp=CAU"
          className="w-full h-full object-contain"/></div>
          <div className="w-full h-40"><img src={lamp1}
          className="w-full h-full object-contain"/></div>
        </Carousel>
      <div>  <h2 className='text-lg t'>Get premium lamps and showpieces for your home  ....</h2>
        <div className=" flex gap-3 mt-2">
         <p className="text-[20px] text-black-600 font-bold">₹299</p>
         <p className="text-[20px] text-gray-400">M.R.P: <span className="line-through">₹799</span></p>
        </div>
      </div>
     <div className='flex gap-2'>
      <div className='border border-gray-500 rounded p-1' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSLrsGO_zdDXHEN4P4kvD27wLLiROBq4_lQ&s" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src={example}
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-t73qW9ka0e-dMuknZ9OtL2ZNLOIuZ91FXfHbW_Vx3xTZTI5DNVBDvNOMsxTEG6aQEY&usqp=CAU" 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
      <div className='border border-gray-500 rounded p-1'><img src={lamp1} 
        alt="" style={{objectFit: "cover", width: "100%", height:"50px"}} className='border-none rounded'/></div>
     </div>
</div>
</Card>
    </div> {/* Third Cards Ends*/}



      <div className="flex flex-col bg-white w-full m-4 p-8 gap-4">   {/* BIKES */}
      <h2 className="text-lg font-semibold"> Up to 75% off | Curated products from Small Businesses <a href=""  className="text-blue-600 text-[15px]  hover:text-blue-800">See more</a></h2>
      <div className="grid grid-cols-6 gap-4 w-full">
        <img className="w-full h-40 object-cover rounded" 
        src="https://m.media-amazon.com/images/I/31z2Rp3DEaL._SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
        <img className="w-full h-40 object-cover rounded"
        src="https://m.media-amazon.com/images/I/31LRzk5aguL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
        <img className="w-full h-40 object-cover rounded"
        src="https://m.media-amazon.com/images/I/41D+bzbgMXL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
        <img className="w-full h-40 object-cover rounded"
        src="https://m.media-amazon.com/images/I/31SlmbdR+eL._SY445_SX342_QL70_FMwebp_.jpg" alt=""/>
        <img className="w-full h-40 object-cover rounded"
        src="https://m.media-amazon.com/images/I/41hJzQjFmfL._SY300_SX300_QL70_FMwebp_.jpg" alt=""/>
        <img className="w-full h-40 object-cover rounded"
        src="https://m.media-amazon.com/images/I/61U7EiPgtWL._SX425_.jpg" alt=""/>
      </div>
    </div> {/* BIKES Ends*/}
  </div> 

  )
}

export default Home;
