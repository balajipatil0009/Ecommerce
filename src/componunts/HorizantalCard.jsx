import { ProductCard } from "./ProductCard";

const HorizantalCard = ({ data }) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <ProductCard product={data} />
      </div>
    </>
  );
};

export default HorizantalCard;
