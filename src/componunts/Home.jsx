import data from "../assets/images.json"
import HorizantalCard from "./HorizantalCard";

const Home = () => {
    const baby=[];
 const electric = [];


 data.map(item=>{
  switch(item.catagary){
    case 'baby':{
      baby.push(item);
  break;
}
case 'electric' : {
     electric.push(item)
  break;
}
default:{
  console.log("baba")
}
  }
 })

 
  return (
    <div className="max-w-screen bg-white">
    <HorizantalCard data={baby} />
    <HorizantalCard data={electric}/>
    <HorizantalCard data={electric} />
    <HorizantalCard data={electric} />
    <HorizantalCard data={electric} />
    <HorizantalCard data={electric} />
    <HorizantalCard data={electric} />
    <HorizantalCard data={electric} />
    </div>
  )
}

export default Home;