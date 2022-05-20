import express from "express";
import cors from "cors";
import mainRouter from "../routes/index.js";

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", mainRouter);

export default app;
