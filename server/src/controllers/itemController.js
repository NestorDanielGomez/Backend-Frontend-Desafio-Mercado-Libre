import fetch from "node-fetch";
import productToFront from "../models/productToFront.js";
const URL = "https://api.mercadolibre.com";

const getItemsById = async (req, res) => {
  const { id } = req.params;

  try {
    const fetchItem = await fetch(`${URL}/items/${id}`).then((response) => {
      return response.json();
    });

    const fetchDescription = await fetch(`${URL}/items/${id}/description`).then(
      (response) => {
        return response.json();
      }
    );

    const data = await productToFront(fetchItem, fetchDescription);

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

export default getItemsById;
