import data from "../assets/images.json";
import HorizantalCard from "./HorizantalCard";
import Nav from "./Nav";

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
    <div className="home max-w-screen flex flex-col gap-3">
      <div className="h-14">
        <Nav />
      </div>

      <HorizantalCard data={baby} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
      <HorizantalCard data={electric} />
    </div>
  );
};

export default Home;
