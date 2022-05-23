import axios from "axios";
import { request, response } from "express";
import productsToFront from "../models/productsToFront.js";

const limit = 4;

const getItems = async (req = request, res = response) => {
  const { q } = req.query;

  try {
    const items = await axios.get(
      `${process.env.URLMELI}/sites/MLA/search?q=:${q}&limit=${limit}`
    );
    const data = productsToFront(items.data);
    return res.status(200).json({
      data,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export default getItems;
