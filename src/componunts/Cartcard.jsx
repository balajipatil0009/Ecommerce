// import React from "react";

const CartCard = (item) => {
  return (
    <div className="border border-gray-200">
      <style>
        {`
          .btn1{
            transition: all ease 0.5s;
          }
        `}
      </style>

      <div className="wrapper w-full m-5 flex p-5 text-left">
        <div
          className="w-36 h-36 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${item.data.image})` }}
        ></div>

        <div className=" w-full px-5">
          <h6 className="font-bold">{item.data.name}</h6>
          <h6 className="text-gray-400 ">{item.data.details}</h6>
          <h6 className="font-bold text-md mt-4">{item.data.price}</h6>
        </div>

        <div>
          <h6 className="text-gray-400 w-[250px] ">{item.data.delivery}</h6>
        </div>
      </div>

      <div className="btn__wrapper gap-6 -mt-10 w-auto m-5 flex p-5 text-left">
        <div className="count flex gap-2 ">
          <div className="border-gray-600 border-2 p-2 rounded-full">
            <hr className="w-2.5 mt-3 border-gray-600" />
          </div>
          <div className="mt-1 py-1 border-2 px-5 border-grey">1</div>
          <div className="border-gray-600 border-2 p-2 rounded-full">+</div>
        </div>

        <button className="btn1 font-bold bg-white p-2.5 ml-3  hover:border-grey hover:bg-slate-700">
          Save for later
        </button>

        <button
          className="btn1 font-bold p-2.5 
         ml-3 bg-white hover:border-grey hover:bg-slate-700 "
        >
          Remove
        </button>
      </div>
      <hr className="border-2 border-grey-800"></hr>

      {/* 
    // <>
    //   <div className="wrapper w-auto m-5 flex p-5 text-left">
    //     <div
    //       className="w-52 bg-cover h-24"
    //       style={{ backgroundImage: `url(${item.data[0].image})` }}
    //     ></div>

    //     <div className=" w-full px-5">
    //       <h6 className="font-bold">{item.data[0].name}</h6>
    //       <h6 className="text-gray-400 ">{item.data[0].details}</h6>
    //       <h6 className="font-bold text-sm">{item.data[0].price}</h6>
    //     </div>
    //   </div>
    //   <div className="btn__wrapper gap-6 -mt-10 w-auto m-5 flex p-5 text-left">
    //     <div className="count flex gap-2 ">
    //       <div className="border-gray-600 border-2 p-2 rounded-full"><hr className="w-2.5 mt-3 border-gray-600"/></div>
    //       <div className="mt-1 py-1 border-2 px-5 border-grey">1</div>
    //       <div className="border-gray-600 border-2 p-2 rounded-full">+</div>
    //     </div>

    //     <button className="btn1 font-bold bg-white p-2.5 ml-3  hover:border-grey hover:bg-slate-700 hover:p-2">Save for later</button>

    //     <button className="btn1 font-bold p-2.7
    //      ml-3 bg-white hover:border-grey hover:bg-slate-700 hover:p-3 hover:pr-5">Remove</button>
    //   </div>
    //   <hr className="border-2 border-grey-800"></hr>
    // </> */}
    </div>
  );
};

export default CartCard;
