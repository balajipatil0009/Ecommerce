import { ProductCard } from "./ProductCard";


const HorizantalCard = ({data}) => {
  return (
    <>
    <div className="-10">
    <ProductCard product={data}/></div>
    </>
  )
}

export default HorizantalCard;