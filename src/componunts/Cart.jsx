import React from "react";

import cartItem from "../assets/images.json";
import Cartcard from "./Cartcard";

import "../componunts/CartCard.css";

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

  return (
    <>
      <Cartcard data = { baby }></Cartcard>
      <Cartcard data = { baby }></Cartcard>
      <Cartcard data = { electric }></Cartcard>
    </>
  );
}

export default Cart;
