import axios from "axios";
import productToFront from "../models/productToFront.js";

const getItemsById = async (req, res) => {
  const { id } = req.params;

  try {
    const fetchItem = await axios.get(`${process.env.URLMELI}/items/${id}`);

    const fetchDescription = await axios.get(
      `${process.env.URLMELI}/items/${id}/description`
    );

    const data = productToFront(fetchItem.data, fetchDescription.data);

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

export default getItemsById;
