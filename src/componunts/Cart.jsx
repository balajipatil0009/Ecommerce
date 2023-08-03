import React, { useEffect, useState } from "react";

import cartItem from "../assets/images.json";
import Cartcard from "./Cartcard";


function Cart() {
  const baby = [];
  const electric = [];

  cartItem.map((item) => {
    switch (item.catagary) {
      case "baby": {
        baby.push(item);
        break;
      }
      case "electric": {
        electric.push(item);
        break;
      }
      default: {
        console.log("baba");
      }
    }
  });

  // Id fetched after selecting item in Add to Cart
  const itemId = 's1';
  
  // For checking Id with current database and returning data
  const [cartData, setCartdata] = useState('');
  
  useEffect(()=>{

    cartItem.map((item)=>{
      if(item.id == itemId){
        setCartdata(item);
      }
    });
  }, []);  

  return (
    <>
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

      <Cartcard data = { cartData }></Cartcard>
      {/* <Cartcard data = { baby }></Cartcard> */}
      {/* <Cartcard data = { electric }></Cartcard> */}
    </>
  );
}

export default Cart;
