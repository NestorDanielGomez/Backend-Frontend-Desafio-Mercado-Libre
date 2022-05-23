import serverapp from "./services/server.js";
import "dotenv/config";
const PORT = `${process.env.PORT}`;
serverapp.listen(PORT, () => console.log("Server Up"));
