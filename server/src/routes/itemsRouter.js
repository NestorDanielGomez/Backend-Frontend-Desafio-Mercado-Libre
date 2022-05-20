import { Router } from "express";
import getItems from "../controllers/itemsController.js";
import getItemsById from "../controllers/itemController.js";

const router = Router();

router.get("/search?", getItems);

router.get("/:id", getItemsById);

export default router;
