import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    return res.status(500).send("User not found.");
});

export { router as userRouter };