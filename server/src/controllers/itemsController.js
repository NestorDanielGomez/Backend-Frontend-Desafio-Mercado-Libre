import fetch from "node-fetch";
import productsToFront from "../models/productsToFront.js";

const URL = "https://api.mercadolibre.com";
const limit = 4;

const getItems = async (req, res) => {
  const q = req.query.q;

  try {
    const items = await fetch(
      `${URL}/sites/MLA/search?q=:${q}&limit=${limit}`
    ).then((response) => {
      return response.json();
    });

    const data = productsToFront(items);

    console.log("query", q);
    console.log("data", data);
    res.json({
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export default getItems;
