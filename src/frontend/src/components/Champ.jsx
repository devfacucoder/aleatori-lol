import React, { useState, useContext } from "react";
const apiUrl = import.meta.env.VITE_URL_API

import Boton from "./Boton";
import { ctxBuild } from "../App";
function Champ({ Champ }) {


  const [setChampion] = useContext(ctxBuild);
  const changeChamp = async () => {
    const response = await fetch(apiUrl+"/api/champion")

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
