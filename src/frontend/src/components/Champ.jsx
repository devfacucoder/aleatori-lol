import React, { useState, useContext } from "react";

import Boton from "./Boton";
import { ctxBuild } from "../App";
function Champ({ Champ }) {


  const [setChampion] = useContext(ctxBuild);
  const changeChamp = async () => {
    const response = await fetch("http://localhost:3000/api/champion")

    if(response.ok){
        const data = await response.json()
        setChampion(data)
    }
    else{
        console.log("error")
    }
  };
  return (
    <div className="w-full flex  items-center  ">
      <div>
        <img src={Champ.img} alt="" srcset="" />
      </div>
      <div>
        <Boton fun={changeChamp} text={"Cambiar Champ"} />
      </div>
    </div>
  );
}

export default Champ;
