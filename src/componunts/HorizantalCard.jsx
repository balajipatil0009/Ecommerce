/* eslint-disable react/prop-types */
import { ProductCard } from "./ProductCard";


const HorizantalCard = ({ data, card }) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <ProductCard product={data} card={card} />
      </div>
    </>
  );
};

export default HorizantalCard;
