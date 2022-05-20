import { Router } from "express";
import itemsRouter from "./itemsRouter.js";

const router = Router();

router.get("/", (request, response) => {
  response.json({
    titulo: "api api",
    data: "resultado",
  });
});

router.use("/items", itemsRouter);

export default router;
