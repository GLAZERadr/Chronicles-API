import { evalException } from '../exceptions/exceptions';
export const errorMiddleware = (err, req, res, next) => {
    let evalResult = evalException(err, res);
    return evalResult;
};
