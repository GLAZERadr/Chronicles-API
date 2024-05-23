import { InvalidCredentials } from '../../common/exceptions/exceptions';
import jwt from 'jsonwebtoken';

const secret_key = 'DamnMann*tap'; //env

interface DecodedToken {
    id: string;
    username: string;
}

export const verifyToken = async (token: string | null): Promise<DecodedToken> => {
    token = token ? token.replace('Bearer ', '') : null;
    if (!token) throw new InvalidCredentials('Invalid Token');

    try {
        return jwt.verify(token, secret_key);
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            throw new InvalidCredentials('Token Expired');
        } 
        throw new InvalidCredentials('Invalid Token');
    }
};