import React from "react";
import useApi from "../hooks/useApi";
import { IoReload } from "react-icons/io5";

function Builds({ dataBuild }) {
  return (
    <div className="grid grid-cols-3  grid-rows-2 gap-1 w-[250px]">
      {dataBuild.map((e, index) => (
        <div className="border-1 border-black relative">
          <button className="absolute flex flex-col items-center justify-center right-0 top-0 bg-gray-700  opacity-88  w-[40px] h-[40px] text-[36px]">
            <IoReload color="#aaa"/>
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
