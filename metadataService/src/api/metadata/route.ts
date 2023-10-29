import express from "express";

import {
    byAutor,
    createMovie,
    getAll,
    populatePage,
    watch
} from "../../controllers/metadata.js";

const router = express.Router();

router.route("/")
    .post(getAll);

router.route("new")
    .post(createMovie);

router.route("/front")
    .post(populatePage);

router.route("/autor")
    .post(byAutor);

router.route("/watch/:id")
    .post(watch);


export { router as metadataRouter };
