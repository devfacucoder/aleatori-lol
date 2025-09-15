import champion from "../../champions.json" with { type: "json" };

export const getChampions = () => {
  const numerRamdom = Math.floor(Math.random() * champion.length);
  
    let resChampion = champion[numerRamdom];
    return resChampion
}

export const getListaChamps = ()=>{
 const list = champion.map((e) => ({ name: e.name })); 

  return list
}
export const getItemByName = (name)=>{
  const champ = champion.find((e)=> e.name.toLocaleLowerCase() === name.toLocaleLowerCase() )
  return champ
}
getItemByName("annie")