import React from 'react'
import { Button, Form, Input } from 'antd';
import './Register.css'
import amazon from '../assets/amazon.png'
import axios from "axios"
import {  useState } from 'react'

const Register = () => {
  const [m, setm]=useState()
      const onFinish = values => {
  console.log('Success:', values);
  try{
    axios.post("http://127.0.0.1:8000/user/registering/",values)
      .then((res)=>{   
      console.log("status:",res?.data?.message);
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
     
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-600">
          <img src={amazon} alt="amazonlogo" className="w-[150px] h-auto" />
          <p className='text-[20px] text-green-600 '>{m}</p>
            <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed} 
            className="flex flex-col justify-center items-center gap-4  w-[300px] !p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white"
            >
    <h1 className='text-2xl font-bold text-gray-800 text-center'>Register</h1>
        <Form.Item
      label="Username"
      name="name"
      placeholder="Enter your username"
     >
      <Input  />
    </Form.Item>


        <Form.Item
      label="Subject"
      name="subject"
      placeholder="Enter the subject you teach"
     >
      <Input  />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      placeholder="Enter your Email"
       rules={[{ type: 'email' }]}
     >
      <Input />
    </Form.Item>


    <Form.Item
      label="Password"
      name="password"
      placeholder="Enter your Password"
    >
      <Input.Password />
    </Form.Item>

 

    <Form.Item label={null}>
      <Button type ="primary" htmlType="submit" className='!w-full !py-2 !text-[16px] !hover:bg-[red]'>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>

  )
}
export default Register


