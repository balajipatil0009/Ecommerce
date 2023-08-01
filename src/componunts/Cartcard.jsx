import React from "react";

const CartCard = (baby) => {
  return (
    <>
      <div className="wrapper w-auto m-5 flex p-5 text-left">
        <div
          className="w-52 bg-cover h-24"
          style={{ backgroundImage: `url(${baby.data.image})` }}
        ></div>

        <div className=" w-full px-5">
          <h6 className="font-bold">{baby.data.name}</h6>
          <h6 className="text-gray-400 ">{baby.data.details}</h6>
          <h6 className="font-bold text-sm">{baby.data.price}</h6>
        </div>
      </div>
      <div className="btn__wrapper gap-6 -mt-10 w-auto m-5 flex p-5 text-left">
        <div className="count flex gap-2 ">
          <div className="border-gray-600 border-2 p-2 rounded-full"><hr className="w-2.5 mt-3 border-gray-600"/></div>
          <div className="mt-1 py-1 border-2 px-5 border-grey">1</div>
          <div className="border-gray-600 border-2 p-2 rounded-full">+</div>
        </div>

        <button className="btn1 font-bold bg-white p-2.5 ml-3  hover:border-grey hover:bg-slate-700 hover:p-2">Save for later</button>

        <button className="btn1 font-bold p-2.7 
         ml-3 bg-white hover:border-grey hover:bg-slate-700 hover:p-3 hover:pr-5">Remove</button>
      </div>
      <hr className="border-2 border-grey-800"></hr>
    </>

    // <>
    //   <div className="wrapper w-auto m-5 flex p-5 text-left">
    //     <div
    //       className="w-52 bg-cover h-24"
    //       style={{ backgroundImage: `url(${baby.data[0].image})` }}
    //     ></div>

    //     <div className=" w-full px-5">
    //       <h6 className="font-bold">{baby.data[0].name}</h6>
    //       <h6 className="text-gray-400 ">{baby.data[0].details}</h6>
    //       <h6 className="font-bold text-sm">{baby.data[0].price}</h6>
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
    // </>
  );
};

export default CartCard;
