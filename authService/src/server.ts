import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { userRouter } from "./api/userRoute.js";
import corsOptions from "./lib/infrastructure/cors/corsOptions.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8085;

server.use(cors(corsOptions));
server.use(express.json());

server.use("/user", userRouter);

server.listen(PORT);
