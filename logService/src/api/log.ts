import express from "express";
import { encode } from "@msgpack/msgpack";

import LogsConnection from "../lib/infrastructure/LogsConnection.js";
import withCatch from "../lib/errors/withCatch.js";
import unHandled from "../lib/errors/unHandled.js";
import MongoRequest from "../lib/infrastructure/mongo/MongoRequest.js";

const router = express.Router();

router.post(`/`, async (req, res) => {
    const conn = LogsConnection.connect();

    const response = await withCatch(
        (request: MongoRequest) => conn.create(request),
        { resource: req.body.resource, log: encode(req.body.log) },
        unHandled
    );

    if (response?.insertedId)
    {
        return res.status(201).send("Created");
    }

    return res.status(500).send("Didn't create it.");
});

export default router;
