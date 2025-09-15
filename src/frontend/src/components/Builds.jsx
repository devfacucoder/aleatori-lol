import React, { useContext, useState } from "react";
import useApi from "../hooks/useApi";
import { IoReload } from "react-icons/io5";
import { ctxBuild } from "../App";

function Builds({ dataBuild }) {
  const [_, setBuild, build] = useContext(ctxBuild);
  const { getAleatoriOneItem } = useApi();
  const changeItem = async (index) => {
    const newItem = await getAleatoriOneItem();
    setBuild((prev) => {
      const updated = [...prev];
      updated[index] = newItem;
      return updated; // ⚠️ importante devolver algo para no romper el estado
    });
  };

  return (
    <div className="grid grid-cols-3  grid-rows-2 gap-1 w-[250px]">
      {dataBuild.map((e, index) => (
        <div className="border-1 border-black relative" key={index}>
          <button
            className="absolute flex flex-col items-center justify-center right-0 top-0 bg-black rounded-4xl  opacity-70  w-[40px] h-[40px] text-[36px]"
            onClick={() => {
              changeItem(index);
            }}
          >
            <IoReload color="#aaa" />
          </button>
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={e.image}
            alt=""
            srcset=""
          />
        </div>
      ))}
    </div>
  );
}

export default Builds;
