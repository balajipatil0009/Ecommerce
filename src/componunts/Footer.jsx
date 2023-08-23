import React from 'react'
import {BiSolidShoppingBag, BiSolidHelpCircle} from "react-icons/bi"
import {MdStars} from "react-icons/md"
import {IoGift} from "react-icons/io5"
import paypal from "./payment-removebg-preview.png"
const Footer = () => {
  return (
    <div className='w-screen h-auto pb-2 bg-gray-900 text-left'>
    <div className='w-screen h-auto grid grid-cols-6 gap-6 p-3 border-b-[1px] border-gray-500 '>
    <div className='px-3'>
        <p className='text-gray-500 text-xs'>ABOUT</p>
        <a><p className='text-white text-xs mt-2 hover:underline'>Contact Us</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>About Us</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Careers</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Flipkart Stories</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Press</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Flipkart Wholesale</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Corporate Information</p></a>
    </div>
    <div className='px-3'>
        <p className='text-gray-500 text-xs'>HELP</p>
        <a><p className='text-white text-xs mt-2 hover:underline'>Payments</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Shipping</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Cancellation & Returns</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>FAQ</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Report Infringement</p></a>
    </div>
    <div className='px-3'>
        <p className='text-gray-500 text-xs'>CONSUMER POLICY</p>
        <a><p className='text-white text-xs mt-2 hover:underline'>Cancellation & Returns</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Terms Of Use</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Security</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Privacy</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Sitemap</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>            Grievance Redressal</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>EPR Compliance</p></a>
    </div>
    <div className='px-3'>
        <p className='text-gray-500 text-xs'>SOCIAL</p>
        <a><p className='text-white text-xs mt-2 hover:underline'>Facebook</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>Twitter</p></a>
        <a><p className='text-white text-xs mt-1 hover:underline'>YouTube</p></a>
    </div>
    <div>
    <div className='border-l-[1px] border-gray-500 px-3'>
        <p className='text-gray-500 text-xs'>Mail Us:</p>
        <p className='text-white text-xs pt-2'>Flipkart Internet Private Limited,
        Buildings Alyssa, Begonia &
        Clove Embassy Tech Village,
        Outer Ring Road, Devarabeesanahalli Village,
        Bengaluru, 560103,
        Karnataka, India</p>
    </div>
    </div>
    <div className='px-3'>
        <p className='text-gray-500 text-xs'>Registered Office Address:</p>
        <p className='text-white text-xs pt-2'>Flipkart Internet Private Limited,
        Buildings Alyssa, Begonia &
        Clove Embassy Tech Village,
        Outer Ring Road, Devarabeesanahalli Village,
        Bengaluru, 560103,Karnataka, India<br/>
        CIN : U51109KA2012PTC066107
        Telephone: 044-45614700</p>
    </div>
    </div>
    <div className='grid grid-cols-7 pt-4 px-2'>
    <div className='flex'> 
    <BiSolidShoppingBag className='text-amber-400 mx-2'/>
        <p className='text-white text-xs'> Become a Seller</p>
    </div>
    <div className='flex'> 
    <MdStars className='text-amber-400 mr-2'/>
        <p className='text-white text-xs'>Advertise</p>
    </div>
    <div className='flex'> 
    <IoGift className='text-amber-400 mr-2'/>
        <p className='text-white text-xs'>Gift Cards</p>
    </div>
    <div className='flex'> 
    <BiSolidHelpCircle className='text-amber-400 mr-2'/>
        <p className='text-white text-xs'>Help Center</p>
    </div>
    <div>
        <p className='text-white text-xs'>© 2007-2023 Flipkart.com</p>
    </div>
    <div className='col-span-2 flex justify-center'><img src={paypal} className='h-6'></img></div>
    </div>
</div>
  );
};

export default Footer;
