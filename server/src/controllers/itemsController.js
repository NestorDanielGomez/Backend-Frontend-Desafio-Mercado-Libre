import fetch from "node-fetch";
import productsToFront from "../models/productsToFront.js";
const URL = "https://api.mercadolibre.com";
const limit = 4;
const query = "pelota";
const prodID = "MLA1116734898";

export const getItems = async (req, res) => {
  const q = req.params.id;

  try {
    const items = await fetch(
      `${URL}/sites/MLA/search?q=:${q}&limit=${limit}`
    ).then((response) => {
      return response.json();
    });
    const dataalfront = productsToFront(items);

    res.json({
      data: dataalfront,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getItemsById = async (req, res) => {
  const { id } = req.params;
  // const prodID = req.params.id;
  const user = { name: "Néstor", lastname: "Gomez" };
  const product = {};
  try {
    const item = await fetch(`${URL}/items/${id}`).then((response) => {
      return response.json();
    });
    const product = {
      author: { name: user.name, lastname: user.lastname },
      id: item.id,
      title: item.title,
      price: { currency: item.currency_id, amount: item.price, decimals: "00" },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
    res.json({
      msg: "producto solo",
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
