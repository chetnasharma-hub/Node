
import { createRoot } from 'react-dom/client'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Demo from "./Pages/Demo.jsx";
import Returns from "./Pages/Returns.jsx";
import BuyAgain from "./Pages/BuyAgain.jsx";
import Add from "./Pages/Add.jsx";
import Addtocart from "./Pages/AddtoCart.jsx";
import Clone from "./Pages/Clone.jsx";
import AmazonHeader from "./Components/Header.jsx";
import ProtectRoute from "./Components/ProtectedRoute.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './Components/Footer.jsx';
import CartProvider from './Components/CartContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(

  <CartProvider>
  <BrowserRouter>
    <AmazonHeader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={ <ProtectRoute>
        <Home />
      </ProtectRoute>  } />
      <Route path="/register" element={<Register />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/buyagain" element={<BuyAgain />} />
      <Route path="/add" element={<Add />} />
      <Route path="/clone" element={<Clone />} />
      <Route path="/addtocart" element={<Addtocart />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </CartProvider>

)
