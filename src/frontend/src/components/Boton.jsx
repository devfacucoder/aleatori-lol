import React from "react";
import { IoReload } from "react-icons/io5";

function Boton({ text, fun }) {
  return (
    <button
      onClick={() => fun()}
      className=" cursor-pointer hover:bg-gray-300 active:shadow-[6px_6px_0px_0px_rgba(0,179,8,1)]
      bg-white text-black min-w-48 h-8 px-2 text-2xl shadow-[6px_6px_0px_0px_rgba(234,179,8,1)]"
    >
      {text}
    </button>
  );
}

export default Boton;
