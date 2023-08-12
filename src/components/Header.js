import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import logo from '../assets/logo.svg'

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, setItemAmount } = useContext(CartContext);
  // event listener 
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])
  return (
    <header className={`${isActive ? 'bg-gray-100 py-4 shadow-md' : 'p-6'}  fixed w-full z-10 transition-all`}>
    <div className="container mx-auto flex items-center justify-between h-full px-4 py-2">
    <Link to={'/'}>
        <div className="">
          <img className="w-[40px]" src={logo} alt='' />
        </div>
      </Link>
      {/* cart */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative px-2 "
      >
        <BsBag className="text-2xl text-gray-600 " />
        <div className="bg-gray-400 absolute  -right-1 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center"> {itemAmount}</div>
      </div>
    </div>
      
    </header>
  );
};

export default Header;
