import champion from "../../champions.json" with { type: "json" };

export const getChampions = (req, res) => {
  const numerRamdom = Math.floor(Math.random() * champion.length);
  
    let resChampion = champion[numerRamdom];
    return resChampion
}