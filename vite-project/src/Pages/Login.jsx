import React,{useContext} from 'react'
import { Button, Form, Input } from 'antd';
import {  useState } from 'react'
import amazon from '../assets/amazon.png'
// import axios from "axios"
import axiosinstance from "../../utils/axiosinstance"
import { CartContext } from '../Components/CartContext';

const Login = () => {
  const {cart,addToCart} = useContext(CartContext)
  console.log("Value in login page",cart)
  const item = "Valuesssss"
const [m, setm]=useState()
 
  const onFinish = values => {
  console.log('Success:', values);
   try{
    axiosinstance.post("/adminlogin/",values)
    .then((res)=>{   
      console.log("status:",res);
      console.log("API RESPONSE:", res.data);
      localStorage.setItem("jwtToken",res?.data?.token)
      setm(res?.data?.message)
    })
     .catch((error)=>{   
      console.error("status:",error?.response?.data?.message);
      setm(error?.response?.data?.message)
    })
  }
  catch(error){
    console.log(error)
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (

      <div>
<button onClick={()=> addToCart(item)}>Click</button>
<p>{cart}</p>
 <div className="flex flex-col gap-5 justify-center items-center min-h-screen bg-gray-600">
  <img src={amazon} alt="amazonlogo" className="w-[150px] h-auto" />
<p className='text-[20px] text-green-600 '>{m}</p>
    <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed} 
   className="flex flex-col justify-center items-center gap-4 h-[300px] w-[300px] bg-white !p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"

  >
<h1 className='text-2xl font-bold text-gray-800 text-center'>Login</h1>
    <Form.Item
      label="Username"
      name="username"
     >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
    
    >
      <Input.Password />
    </Form.Item>

 

    <Form.Item label={null}>
      <Button type ="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
 <a href="/register" className='text-white'>Click here to register if not Signed up</a>
  </div>
</div>
  )
}

export default Login