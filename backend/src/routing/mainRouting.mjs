import app from "../app.mjs";

// main route kezelése.
// http://localhost:3500/api
import mainRouter from "../../routes/mainRoutes.mjs";
app.use("/api", mainRouter);
