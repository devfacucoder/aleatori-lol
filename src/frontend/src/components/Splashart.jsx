import React from "react";

function Splashar({ dateChamp }) {
  return (
    <div className=" bg-red-500 w-[130px] h-[130px] ">
            
      <img  loading="lazy" className="w-full h-full" src={dateChamp.img || ""} alt="" />
    </div>
  );
}

export default Splashar;
