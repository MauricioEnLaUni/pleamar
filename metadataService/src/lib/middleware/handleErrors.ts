import HTTPError from "../errors/HTTPError.js";

export default (err, req, res, next) => {
    const error = new HTTPError(err.msg, err.code);

    next(error);
};
