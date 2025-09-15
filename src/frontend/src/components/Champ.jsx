import React, { useState, useContext } from "react";
import { ClipLoader } from "react-spinners";
import Boton from "./Boton";
import { ctxBuild } from "../App";
import { IoReload } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import ListChamps from "./ListChamps";

import useApi from "../hooks/useApi";

const apiUrl = import.meta.env.VITE_URL_API;
function Champ({ pChamp }) {
  const [setChampion] = useContext(ctxBuild);
  const [loading, setLoading] = useState(true);
  const [vieListChamp, setViewChampList] = useState(false);

  const { getAleatoriChamp } = useApi();

  const changeChamp = async () => {
    try {
      const data = await getAleatoriChamp();
      console.log(data) 
      if (data) {
        setChampion(data);
        setLoading(true); // vuelve a activar el spinner mientras carga la nueva imagen
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center  justify-center">
      <div className="relative w-[128px] h-[128px] bg-blue-700 flex items-center justify-center">
        {pChamp.img && (
          <>
            <button
              className="absolute flex flex-col items-center justify-center right-[-40px] top-0 bg-black rounded-4xl  opacity-70  w-[40px] h-[40px] text-[36px] hover:opacity-100 cursor-pointer"
              onClick={() => {
                changeChamp();
              }}      
            >
              <IoReload color="#aaa" />
            </button>

            <button
              className="absolute flex flex-col items-center justify-center right-[-40px] top-[45px] bg-black rounded-4xl  opacity-70  w-[40px] h-[40px] text-[36px] hover:opacity-100 cursor-pointer"
              onClick={() => {
                setViewChampList(true);
              }}
            >
              <CiBoxList color="#aaa" />
            </button>


            {vieListChamp ? <ListChamps onClose={setViewChampList} /> : null}
            <img
              src={pChamp.img}
              alt="Campeón"
              loading="lazy"
              onLoad={() => setLoading(false)}
              className="w-full h-full object-cover"
            />
          </>
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
