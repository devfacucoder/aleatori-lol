import React from "react";

function Builds({ dataBuild }) {
  return (
    <div className="grid grid-cols-3  grid-rows-2 gap-1 w-[220px]">
      {dataBuild.map((e, index) => (
        <div className="border-1 border-black">
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
