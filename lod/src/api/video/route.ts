import express from "express";



const router = express.Router();

router.route("/:video")
    .post();


export { router as metadataRouter };
