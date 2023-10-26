import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import log from "./api/log.js";
import corsOptions from "./lib/infrastructure/cors/corsOptions.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8082;

server.use(cors(corsOptions));
server.use(express.json());

server.use("/logs", log);

server.listen(PORT);
