/* eslint-disable react/prop-types */
import { ProductCard } from "./ProductCard";

const style = {
  backgroundImage: `url(${"https://rukminim1.flixcart.com/fk-p-flap/278/278/image/0b22f4bdbe5b032a.jpg?q=90&quot"})`,
  backgroundPosition: "0px bottom",
  backgroundRepeat: "no-repeat",
};

const HorizantalCard = ({ data }) => {
  return (
    <>
      <div className="flex justify-center flex-auto w-full border-2">
        <div style={style} className="w-full">
          <h1 className="my-12 text-lg text-slate-700 font-semibold ">
            Top Offers
          </h1>
          <a href="#" className="p-3 bg-slate-700">
            View All
          </a>
        </div>

        <ProductCard product={data} />

        <div className="w-full">
          <img
          className="block"
            src="c5.webp"
            alt="Thomson"
          ></img>
        </div>
      </div>
    </>
  );
};

export default HorizantalCard;
