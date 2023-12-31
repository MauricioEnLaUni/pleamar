import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { metadataRouter } from "./api/metadata/route.js";
import corsOptions from "./lib/infrastructure/cors/corsOptions.js";

import handleEncrypted from "./lib/middleware/handleEncrypted.js";
import handleErrors from "./lib/middleware/handleErrors.js";
// import seeder from "./lib/infrastructure/seeder.js";

dotenv.config();

// seeder();

const server = express();
const PORT = process.env.PORT || 8085;

server.use(cors(corsOptions));
server.use(express.json());

server.use(handleEncrypted);

server.use("/metadata", metadataRouter);
server.use(handleErrors);

server.listen(PORT);
