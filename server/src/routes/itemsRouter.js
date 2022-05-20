import { Router } from "express";
import { getItems, getItemsById } from "../controllers/itemscontroller.js";

const router = Router();

router.get("/:id", getItems);

// router.get("/:id", getItemsById);

// router.get("/", (request, response) => {
//   response.json({
//     titulo: "Todos los productos",
//     data: "resultado",
//   });
// });

export default router;
