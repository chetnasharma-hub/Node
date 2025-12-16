
import amazon from '../assets/amazon.png'
import  Language from "../Components/Lang.jsx";

const Footer = () => {
   
  return (
  <div className="bg-[#232f3e] text-white mt-10 border-t flex flex-col justify-center">
    <div className="bg-[#44556e] text-[15px] p-3 text-center"> <a href="">Back to Top</a></div>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 text-sm">

        <div>
          <h4 className="font-bold text-lg mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">About Us</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Press Releases</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Connect With Us</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Facebook</a></li>
            <li><a className="hover:underline" href="#">Twitter</a></li>
            <li><a className="hover:underline" href="#">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Make Money</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Sell on Our Platform</a></li>
            <li><a className="hover:underline" href="#">Become an Affiliate</a></li>
            <li><a className="hover:underline" href="#">Advertise Your Products</a></li>
            <li><a className="hover:underline" href="#">Protect and Build Your Brand</a></li>
            <li><a className="hover:underline" href="#">Amazon Global Selling</a></li>
            <li><a className="hover:underline" href="#">Supply to Amazon</a></li>
            <li><a className="hover:underline" href="#">Become an Affiliate</a></li>
            <li><a className="hover:underline" href="#">Fulfilment by Amazon</a></li>
            <li><a className="hover:underline" href="#">Advertise Your Products</a></li>
            <li><a className="hover:underline" href="#">Amazon Pay on Merchants</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-3">Help</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Your Orders</a></li>
            <li><a className="hover:underline" href="#">Returns</a></li>
            <li><a className="hover:underline" href="#">Help Center</a></li>
            

          </ul>
        </div>

      </div>

      <div className="flex flex-row items-center justify-center gap-6 border-t py-4">
        <span><img src={amazon} alt="amazonlogo" className="w-[150px] h-auto"/> </span>
        <span className='border border-white rounded w-auto h-[30px] p-2 flex items-center justify-center'><Language/></span>
        <span><button className='border border-white rounded w-auto p-2 h-[30px] flex items-center justify-center gap-2' >    
          <img src="https://flagcdn.com/w20/in.png" alt="Indian Flag" className="w-4 h-4 object-cover"/> <span>India</span></button></span>
      </div>
    </div>
  );
};

export default Footer;
