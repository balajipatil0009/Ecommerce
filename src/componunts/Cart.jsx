/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import cartItem from "../assets/images.json";
import Cartcard from "./Cartcard";

function Cart() {
  // const baby = [];
  // const electric = [];

  // cartItem.map((item) => {
  //   switch (item.catagary) {
  //     case "baby": {
  //       baby.push(item);
  //       break;
  //     }
  //     case "electric": {
  //       electric.push(item);
  //       break;
  //     }
  //     default: {
  //       console.log("baba");
  //     }
  //   }
  // });

  const itemId = ["s1", "s2"];

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const foundItems = cartItem.filter((item) => itemId.includes(item.id));
    setCartData(foundItems);
  }, []);

  return (
    <div className="w-screen justify-center m-auto bg-slate-50 flex">
      <div className="w-fit bg-white">
        <style>
          {`
          .slick-arrow::before {
            background-color: rgb(146, 139, 139);
            border-radius: 16px;
          }

          .slick-prev::before {
            background-color: rgb(0, 0, 0);
            border-radius: 16px;
          }
          `}
        </style>

        <div className="flex justify-between p-4 border my-2">
          <p className="self-center">From Saved Address</p>
          <a href="#" className="p-2 border text-blue-600">
            Enter Delivery Pincode
          </a>
        </div>

        {cartData.map((element) => (
          <Cartcard data={element} />
        ))}

        {/* <Cartcard data={cartData}></Cartcard> */}
        {/* <Cartcard data = { baby }></Cartcard> */}
        {/* <Cartcard data = { electric }></Cartcard> */}
      </div>

      <div>
        <div className="border-2  h-fit mx-8 mt-2 w-[500px] text-left">
          <p className="border-b p-4 font-semibold text-slate-500 font-sans">PRICE DETAILS</p>

          <div>
            <div className="p-4 flex justify-between">
              <p>Price (4 items)</p>
              <p>₹2,159</p>
            </div>
            <div className="p-4 flex justify-between">
              <p>Discount</p>
              <p className="text-green-600">− ₹1,262</p>
            </div>
            <div className="p-4 flex justify-between">
              <p>Sale Fee</p>
              <p>₹10</p>
            </div>
            <div className="p-4 flex justify-between ">
              <p>Delivery Charges</p>
              <p>₹98</p>
            </div>

            <div className="border-b-2 border-dotted"></div>
            <div className="p-4 flex justify-between text-lg font-semibold text-slate-800">
              <p>Total Amounts</p>
              <p>₹1,005</p>
            </div>
            <div className="border-b-2 border-dotted"></div>

            <div className="p-4 flex justify-between font-semibold text-green-600">
              <p>You will save ₹1,154 on this order</p>
            </div>
          </div>
        </div>

        <div className="p-4 mx-8 w-3/4 flex text-left">
          <img src="shield.png" alt="" className="w-[13%] mx-2" />
          <p>Safe and Secure Payments.
            Easy returns.
            100% Authentic products.</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
