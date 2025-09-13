import React, { useState, useContext } from "react";
import { ClipLoader } from "react-spinners";
import Boton from "./Boton";
import { ctxBuild } from "../App";

const apiUrl = import.meta.env.VITE_URL_API;

function Champ({ pChamp }) {
  const [setChampion] = useContext(ctxBuild);
  const [loading, setLoading] = useState(true);

  const changeChamp = async () => {
    const response = await fetch(apiUrl + "/api/champion");

    if (response.ok) {
      const data = await response.json();
      setChampion(data);
      setLoading(true); // vuelve a activar el spinner mientras carga la nueva imagen
    } else {
      console.log("error");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[128px] h-[128px] bg-blue-700 flex items-center justify-center">
        {pChamp.img && (
          <img
            src={pChamp.img}
            alt="Campeón"
            loading="lazy"
            onLoad={() => setLoading(false)}
            className="w-full h-full object-cover"
          />
        )}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-700">
            <ClipLoader size={64} color="#fff" />
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Champ;
