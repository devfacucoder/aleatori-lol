import React, { useState, useEffect, useContext } from "react";
import useApi from "../hooks/useApi";
import { ctxBuild } from "../App";
const list = [
  { name: "juan" },
  { name: "ciro" },
  { name: "fer" },
  { name: "maxi" },
  { name: "facu" },
  { name: "jonh" },
  { name: "jose" },
  { name: "maria" },
  { name: "josefina" },
  { name: "diego" },
];

function ListChamps({ onClose }) {
  const [listChamps, setListChamps] = useState([]);
  // Estado con la lista ordenada
  const [filteredList, setFilteredList] = useState(
    [...listChamps].sort((a, b) => a.name.localeCompare(b.name))
  );
  const [setChampion] = useContext(ctxBuild);
  // Función de búsqueda
  const searchChamp = (e) => {
    const textForSearch = e.target.value.toLowerCase();

    const resArr = listChamps
      .filter((item) => item.name.toLowerCase().includes(textForSearch))
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredList(resArr);
  };
  const { getListChamps, getChampByName } = useApi();

  const setChamp = async (name) => {
    const data = await getChampByName(name);
    console.log(data);
    setChampion(data);
          onClose(false);

  };

  useEffect(() => {
    const listarChamps = async () => {
      const data = await getListChamps();
      setListChamps(data);
    };

    listarChamps();
  }, []);
  return (
    <>
      <div
        className="fixed w-full h-full bg-black opacity-45"
        onClick={() => {
          onClose(false);
        }}
      ></div>
      <div className="flex flex-col bg-blue-950 w-[90%] min-h-[100px] max-h-[400px] overflow-y-scroll top-[42%] fixed z-20">
        <div>
          <input
            type="text"
            className="w-full h-12 text-white px-2 text-[20px]"
            onChange={searchChamp}
            placeholder="Buscar campeón..."
          />
        </div>
        <ul>
          {filteredList.map((e, index) => (
            <li
              onClick={() => {
                setChamp(e.name);
              }}
              key={index}
              className="w-full h-[50px] px-2  text-white border border-black text-[25px]"
            >
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListChamps;
