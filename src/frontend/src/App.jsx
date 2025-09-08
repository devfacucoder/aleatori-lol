import React,{useState} from "react";
import "./App.css";

//components import
import Header from "./components/Header";
import Boton from "./components/Boton";
import Splashar from "./components/Splashart";
import Builds from "./components/Builds";
function App() {

  const [champ,setChampion] = useState({img:"https://i.pinimg.com/736x/27/90/eb/2790ebb3362f19182cf862ac703f1754.jpg"});
  const [build,setBuild] = useState([]);

  const getAllBuildAndChampion = async () => {
    const response = await fetch("http://localhost:3000/api/all");
    if(response.ok){
      const data = await response.json();
      setChampion(data.champion);
      setBuild(data.build);
    } else {
      console.error("Error fetching data");
    }

  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <Header />
      <div className="flex p-2 justify-center flex-col bg-gray-500 items-center w-[300px] h-[200px] gap-2">
        <div className="w-12/12 h-[130px]     flex ">
          <Splashar dateChamp={champ} />
          <Builds dataBuild={build} />
        </div>
        <Boton text={"Generar Build" } fun={getAllBuildAndChampion} />
      </div>
    </div>
  );
}

export default App;
