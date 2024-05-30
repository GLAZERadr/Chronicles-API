import { verifyToken } from "../../services/tokens/token.validator";
import { evalException } from "../exceptions/exceptions";
;
export const verifyJWTToken = async (req, res, next) => {
    const auth = req.header('Authorization');
    const token = auth ? auth.replace('Bearer ', '') : null;
    try {
        let decodedToken = await verifyToken(token);
        req.username = decodedToken.username;
        next();
    }
    catch (error) {
        return evalException(error, res);
    }
};
