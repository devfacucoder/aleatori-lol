import React, { useState, createContext, useEffect } from "react";
import "./App.css";

//components import
import Header from "./components/Header";
import Boton from "./components/Boton";
import Splashar from "./components/Splashart";
import Builds from "./components/Builds";
import Champ from "./components/Champ";
import Items from "./components/Items";

import useApi from "./hooks/useApi";
export const ctxBuild = createContext();
function App() {
  const [champ, setChampion] = useState({
    img: "https://ar.pinterest.com/pin/71635450320430180/",
  });
  const [build, setBuild] = useState([]);
  const { getAleatoriBuild } = useApi();
  const generateToBeginning = async () => {
    const data = await getAleatoriBuild();
    setBuild(data.build);
    setChampion(data.champion);
  };
  useEffect(() => {
    generateToBeginning();
  }, []);
  return (
    <ctxBuild.Provider value={[setChampion, setBuild, build]}>
      <div className="w-full bg-[#020033] min-h-screen flex flex-col gap-4  items-center ">
        <Header />
        <div className="flex py-4 justify-start flex-col bg-[#04048d]  items-center w-[90%] min-h-[400px] gap-4">
          <Boton
            fun={() => {
              generateToBeginning();
            }}
            text={"Generar Build Aleatoria"}
          />
          <Champ pChamp={champ} />
          <Builds dataBuild={build} />
          <div className="flex flex-col gap-4  ">
          
          </div>
        </div>
      </div>
    </ctxBuild.Provider>
  );
}
/**
 * <div className="flex p-2 justify-center flex-col bg-[#04048d] rounded-lg border-1 border-amber-500  items-center w-[300px] h-[200px] gap-2">
          <div className="w-12/12 h-[130px] flex ">
            <Splashar dateChamp={champ} />
            <Builds dataBuild={build} />
          </div>
          <Boton text={"Generar Build"} fun={getAllBuildAndChampion} />
        </div>
        <div className="flex p-2 justify-center flex-col bg-[#04048d] items-center w-[300px] h-[4  00px] gap-2">
          <Champ Champ={champ} />
          {build.length > 0
            ? build.map((e, index) => <Items key={index} id={index} pItem={e.image} />)
            : null}
        </div>  
 */
export default App;
