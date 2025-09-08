import fs from "node:fs";
import legendaryItems from "./items.js";
import axios from "axios";
import { getChampions } from "./cargarChampions.js";
export const crearJson = (ruta, objeto) => {
  try {
    const datos = JSON.stringify(objeto, null, 2);
    fs.writeFileSync(ruta, datos, "utf-8");
    return true;
  } catch (error) {
    console.error("Error al crear el archivo JSON:", error);
    return false;
  }
};

const getItemsApi = async () => {
  try {
    const { data } = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/15.17.1/data/en_US/item.json"
    );

    const allItems = data.data; // Acá están los ítems reales

    // Filtrar solo objetos con IDs numéricos
    const legendaryItems = Object.keys(allItems)
      .filter((key) => !isNaN(key)) // Solo claves numéricas
      .map((key) => allItems[key]) // Obtenemos el objeto completo
      .filter((item) => {
        // Filtramos legendarios
        return (
          item.gold.purchasable && // Se puede comprar
          item.depth === 3 && // Son legendarios
          !item.requiredChampion && // No están bloqueados por campeón
          !item.into // No se transforman en otro item (no míticos)
        );
      });
    const dateUtil = [];

    legendaryItems.forEach((item) => {
      let obj = {};
      if (item.name) {
        obj.name = item.name;
        if (item.image) {
          obj.image = `https://ddragon.leagueoflegends.com/cdn/15.17.1/img/item/${item.image.full}`;
        }
        dateUtil.push(obj);
      }
    });

    return dateUtil;
  } catch (error) {
    console.error("Error al obtener ítems:", error);
  }
};

const filtrar = async () => {
  const nuevosLengendarios = await getItemsApi();

  const cosa = nuevosLengendarios.filter((item) =>
    legendaryItems.includes(item.name)
  );
  return cosa;
};
console.log(getChampions());
crearJson("./champions.json", await getChampions());
//crearJson('./datos.json', cosa);
