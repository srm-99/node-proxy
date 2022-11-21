import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Middlewares
import { proxy } from "./middlewares";

export const PROXY_PATH = process.env.PROXY_PATH || "/nodeProxy";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "";

dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));

app.use(json({ limit: 1000000 }));

app.use(PROXY_PATH, proxy);

app.listen(PORT, () => {
    console.log(`👻 ${NODE_ENV} Server running at http://${HOST}:${PORT}`);
});

export default app;
