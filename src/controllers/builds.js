import legendaryItems from "../../itemsLengendarys.json" with { type: "json" }; 



export const getOneItem = () =>{
    const randomIndex = Math.floor(Math.random() * legendaryItems.length);
    let val = legendaryItems[randomIndex]
    return legendaryItems[randomIndex]
}

const getBuildRandom = () => {
  const items = [];
  const nums = [];

  while (items.length < 6) {
    const randomIndex = Math.floor(Math.random() * legendaryItems.length);

    // Si ya existe el índice, lo saltamos
    if (nums.includes(randomIndex)) continue;

    nums.push(randomIndex);
    items.push(legendaryItems[randomIndex]);
  }
  return items
};


export default getBuildRandom;

