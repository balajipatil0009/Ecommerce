import React, { useState, useEffect } from "react";
import logo from "./flipkart-plus_8d85f4.png"
import {IoIosSearch} from "react-icons/io"
import {AiOutlineShop, AiOutlineUser} from "react-icons/ai"
import {PiShoppingCart} from "react-icons/pi"

let flag = false;

const Nav = () => {
    return (
        <div className="w-screen grid grid-cols-8 px-4 h-12 bg-blue-500">
                <div className=" flex justify-end items-center h-full"><img src={logo} className='w-auto h-5'></img></div>
                <div className=" col-span-4 flex justify-left items-center">
                <div className='h-6 w-[80%] bg-white rounded-md flex items-center ml-8'>
                <input type="search" placeholder="Search for Products, Brands and More" className='h-full ml-2 w-full focus:outline-none rounded-md bg-white text-xs'/>
                <IoIosSearch size={27} className="text-blue-500 cursor-pointer pr-2"/>
                </div>
                </div>
                <div className="flex justify-center items-center ml-1">
                    <a className="flex justify-center items-center cursor-pointer">
                        <AiOutlineShop className='text-white text-base'/>
                        <p className='text-white text-sm ml-2'> Become a Seller</p>
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <a className="flex justify-center items-center cursor-pointer">
                        <AiOutlineUser className='text-white text-base'/>
                        <p className='text-white text-sm ml-2'>Sign in</p>
                    </a>
                </div>
                <div className="flex items-center">
                <a className="flex justify-center items-center cursor-pointer">
                        <PiShoppingCart className='text-white text-base'/>
                        <p className='text-white text-sm ml-2'>Cart</p>
                    </a>
                </div>
        </div>
      )
};

export default Nav;
