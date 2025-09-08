import axios from "axios";
export const getChampions = async () => {
  try {
    // Hacemos la petición HTTP
    const { data } = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/15.17.1/data/en_US/champion.json"
    );
    let champions = data;
    let dataArrayChampions = [];

    for (const key in champions.data) {
      if (Object.hasOwnProperty.call(champions.data, key)) {
        const element = champions.data[key];
        dataArrayChampions.push({
          name: element.name,
          img: `https://ddragon.leagueoflegends.com/cdn/15.17.1/img/champion/${element.image.full}`,
        });
      }
    }

    return dataArrayChampions;
  } catch (error) {
    console.error("❌ Error al scrapear:", error.message);
  }
};
//https://ddragon.leagueoflegends.com/cdn/15.17.1/img/champion/Aatrox.png
