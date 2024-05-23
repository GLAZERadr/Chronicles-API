import { MuridOutput } from "../../data-access/models/murid/murid";
import { GuruOutput } from "../../data-access/models/guru/guru";
import jwt from 'jsonwebtoken';

const expiration_time = process.env.EXPIRED_TIME || '12h';
const secret_key = 'DamnMann*tap'; //env

export const generateToken = async (user: MuridOutput | GuruOutput | undefined) => {
    let signOptions = {
        expiresIn: expiration_time,
    };
    let token = jwt.sign({ id: user?.id, username: user?.username }, secret_key!, signOptions);
    return token;
};