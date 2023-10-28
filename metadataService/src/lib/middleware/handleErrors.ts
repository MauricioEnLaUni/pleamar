export default (err, req, res, next) => {
    return res.status(400).send(err.message);
};
