import AES from "../infrastructure/encryption/AES.js";

export default (req, res, next) => {
    const { encrypted } = req.body;
    const exists = AES.isSecure(Buffer.from(encrypted));

    if (exists === undefined)
    {
        throw new Error("Request is invalid");
    }

    req.body = exists;
    next();
}
