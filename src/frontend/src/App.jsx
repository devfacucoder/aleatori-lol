import React, { useState, createContext } from "react";
import "./App.css";

//components import
import Header from "./components/Header";
import Boton from "./components/Boton";
import Splashar from "./components/Splashart";
import Builds from "./components/Builds";
import Champ from "./components/Champ";
import Items from "./components/Items";

export const ctxBuild = createContext();
function App() {
  const [champ, setChampion] = useState({
    img: "https://i.pinimg.com/736x/27/90/eb/2790ebb3362f19182cf862ac703f1754.jpg",
  });
  const [build, setBuild] = useState([]);

  const getAllBuildAndChampion = async () => {
    const response = await fetch("http://localhost:3000/api/all");
    if (response.ok) {
      const data = await response.json();
      setChampion(data.champion);
      setBuild(data.build);
    } else {
      console.error("Error fetching data");
    }
  };
  return (
    <ctxBuild.Provider value={[setChampion,setBuild,build]} >
      <div className="w-full min-h-screen flex flex-col gap-4 items-center ">
        <Header />
        <div className="flex p-2 justify-center flex-col bg-gray-500 items-center w-[300px] h-[200px] gap-2">
          <div className="w-12/12 h-[130px] flex ">
            <Splashar dateChamp={champ} />
            <Builds dataBuild={build} />
          </div>
          <Boton text={"Generar Build"} fun={getAllBuildAndChampion} />
        </div>
        <div className="flex p-2 justify-center flex-col bg-gray-500 items-center w-[300px] h-[4  00px] gap-2">
          <Champ Champ={champ} />
          {build.length > 0
            ? build.map((e, index) => <Items key={index} id={index} pItem={e.image} />)
            : null}
        </div>
      </div>
    </ctxBuild.Provider>
  );
}

export default App;
