import React from "react";

function Boton({ text, fun }) {
  return (
    <button
      onClick={() => {
        fun();
      }}
      className="bg-yellow-400 w-48 h-8 text-2xl"
    >
      {text}
    </button>
  );
}

export default Boton;
