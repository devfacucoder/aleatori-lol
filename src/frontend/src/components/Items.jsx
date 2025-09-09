import React, { useContext } from "react";
import Boton from "./Boton";
import { ctxBuild } from "../App";
const apiUrl = import.meta.env.VITE_URL_API;

function Items({ pItem, id }) {
  const [_, setBuild, build] = useContext(ctxBuild);

  const changeItem = async () => {
    try {
      const response = await fetch(apiUrl + "/api/item");
      if (response.ok) {
        const data = await response.json();

        // Actualizamos SOLO el objeto correspondiente
        setBuild((prev) => {
          const updatedBuild = [...prev]; // Clonamos el array anterior
          updatedBuild[id] = {
            name: data.name,
            image: data.image,
          };
          return updatedBuild;
        });
      } else {
        console.error("Error al obtener el item:", response.status);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  return (
    <div className="flex w-full items-center gap-2">
      <div>
        <img
          src={pItem}
          alt={`Item ${id}`}
          className="w-12 h-12 object-cover border border-gray-300 rounded"
        />
      </div>
      <div>
        <Boton fun={changeItem} text="Cambiar item" />
      </div>
    </div>
  );
}

export default Items;
