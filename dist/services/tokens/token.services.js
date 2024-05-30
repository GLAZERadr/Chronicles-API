import jwt from 'jsonwebtoken';
const expiration_time = process.env.EXPIRED_TIME || '12h';
const secret_key = 'DamnMann*tap'; //env
export const generateToken = async (user) => {
    let signOptions = {
        expiresIn: expiration_time,
    };
    let token = jwt.sign({ id: user?.id, username: user?.username }, secret_key, signOptions);
    return token;
};
