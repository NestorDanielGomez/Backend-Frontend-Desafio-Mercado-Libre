import { Router } from "express";
import getItems from "../controllers/itemsController.js";
import { check } from "express-validator";
import getItemsById from "../controllers/itemController.js";
import { expressValidator } from "../middlewares/expressValidator.js";
import { idValidators } from "../middlewares/validators.js";

const router = Router();

router.get("/search", [], getItems);

router.get(
  "/:id",
  [check("id").custom(idValidators), expressValidator],
  getItemsById
);

export default router;
