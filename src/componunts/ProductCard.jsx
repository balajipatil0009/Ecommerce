/* eslint-disable react/prop-types */
// import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const ProductCard = ({ product, card }) => {

  let width;

  if(card.autoplay == true){
    width = "w-[100%]";
  }
  else{
    width = "w-[80%]";
  }

  return (
    <>

      <style>
        {`
          .slick-arrow::before {
            background-color: grey !important;
            padding:20px 5px;
            opacity:1 !important;
          }
          button{
            z-index:40;
          }

          .slick-next::before{
            margin-left:-60px !important;
            
          }

          .slick-prev::before {
            margin-left:25px !important;
          }

        `}
      </style>

      <Slider {...card} className={` ${width} border-2 border-gray-300`}>
      {/* <Slider {...card} className=" w-[80%]"> */}
        {product.map((item, index) => (
          <div
            key={index}
            className="grid h-72 w-52 bg-white text-black grid-rows-3 py-3 px-4 border-2"
          >
            <div
              className="border border-black  bg-center bg-cover h-36 mb-6"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div>
              <h6 className=" font-bold text-xs">{item.name}</h6>
              <h6 className="text-green-600 text-sm mt-2">
                price {item.price}
              </h6>
              <h6 className="text-gray-400 text-sm ">{item.details}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
