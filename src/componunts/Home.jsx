import data from "../assets/images.json";
import HorizantalCard from "./HorizantalCard";
import Nav from "./Nav";
import ProductCategory from "./ProductCategory";
import { ProductCard2 } from "./ProductCard2";
import ProductCard3 from "./Productcard3";
import Description from "./Description";
import Footer from "./Footer";

// To store card data from json file
const Home = () => {
  const baby = [];
  const electric = [];
  const cards = [];

  data.map((item) => {
    switch (item.catagary) {
      case "baby": {
        baby.push(item);
        break;
      }
      case "electric": {
        electric.push(item);
        break;
      }
      case "cards": {
        cards.push(item);
        break;
      }
      default: {
        console.log("baba");
      }
    }
  });

  return (
    <div>
      <div className="h-20">
        <Nav />
      </div>

      <div className="home -mx-4">
        <ProductCategory />

        <div className="max-w-screen flex flex-col gap-3 p-2 bg-slate-100 border-t-2 ">
          <ProductCard2 product={cards} />
          <HorizantalCard data={electric} />
          <ProductCard3/>
          <Description />
        </div>

        <Footer/>

      </div>
    </div>
  );
};

export default Home;
