import axios from "axios";
import * as cheerio from "cheerio";
const getLegendaryItems = async () => {
  try {
    const url = "URL_DE_TU_PAGINA"; // Coloca la URL real
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const items = [];

    // Buscamos el <dt> con el texto "Legendary items"
    $('dt').each((_, el) => {
      if ($(el).text().trim().toLowerCase() === "legendary items") {
        // Encontramos el siguiente div.tlist (el que contiene los ítems)
        const container = $(el).nextAll("div.tlist").first();

        // Buscar todos los <a> dentro de ese bloque
        container.find("a").each((_, link) => {
          const href = $(link).attr("href");
          if (href) {
            items.push(href);
          }
        });
      }
    });

    console.log("Ítems legendarios encontrados:", items);
    return items;
  } catch (error) {
    console.error("Error al scrapear:", error);
    return [];
  }
};

getLegendaryItems();
