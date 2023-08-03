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

      {cartData.map((element) => (
        <Cartcard data={element} />
      ))}

      {/* <Cartcard data={cartData}></Cartcard> */}
      {/* <Cartcard data = { baby }></Cartcard> */}
      {/* <Cartcard data = { electric }></Cartcard> */}
    </>
  );
}

export default Cart;
