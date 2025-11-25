import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

var navData = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Acessories",
  "Support",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <div className=" flex items-center justify-center space-x-10 p-3 bg-[#000000] text-[#A0A0A0]">
             <h1 className="text-xl"><FaApple/></h1>
             <ul className="hidden md:flex items-center justify-center space-x-8 text-xs font-semibold">
                 {navData.map((data,index)=>(
                     <li key={index}><a href="#">{data}</a></li>
                 ))}
             </ul>
             <h1 className="text-[14px]"><FaSearch/></h1>
             <h1 className="text-[14px]"><FaShoppingBag/></h1>
             <h1 className="text-[20px] md:hidden cursor-pointer" onClick={() => setOpen(true)}><FiMenu /></h1>
      </div>

      <div className="bg-[#1D1D1F] p-4 text-white ">
             <p className="text-center text-[7px] md:text-[14px] flex items-center justify-center">Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI. ‡ <a href="" className="text-blue-600 hover:underline flex items-center justify-center "> Buy <FaChevronRight className="w-3 h-3"/></a></p>
      </div>


      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black     bg-opacity-80 text-white z-50 flex flex-col">
          <div className="p-5 flex justify-between items-center border-b border-gray-600">
            <FaApple className="text-2xl" />
            <button className="text-xl" onClick={() => setOpen(false)} >
              ✕
            </button>
          </div>

          <ul className="p-6 space-y-4 text-lg font-semibold">
            {navData.map((item, index) => (
              <li key={index} className="hover:text-gray-700 pb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
