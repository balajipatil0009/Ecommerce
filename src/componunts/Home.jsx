import data from "../assets/images.json";
import HorizantalCard from "./HorizantalCard";
import Nav from "./Nav";
import ProductCategory from "./ProductCategory";

// To store card data from json file
const Home = () => {
  const baby = [];
  const electric = [];

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

        <div className="max-w-screen flex flex-col gap-3 p-2 bg-slate-100 border-t-2">
        <HorizantalCard data={baby} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        <HorizantalCard data={electric} />
        </div>
      </div>
    </div>
  );
};

export default Home;
