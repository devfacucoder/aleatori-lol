const apiURl = import.meta.env.VITE_URL_API;
export default function useApi() {
  const getAleatoriBuild = async () => {
    try {
      const response = await fetch(apiURl + "/api/all");

      if (response.ok) {
        const data = await response.json();

        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const getAleatoriChamp = async () => {
    try {
      const response = await fetch(apiURl + "/api/champion");

      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getAleatoriOneItem = async () => {
    try {
      const response = await fetch(apiURl + "/api/item");
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return {
    getAleatoriOneItem,
    getAleatoriBuild,
    getAleatoriChamp,
  };
}
