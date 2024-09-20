import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';

import { KelompokOutput } from "../../data-access/models/kelompok/kelompok";
import { GuruOutput } from "../../data-access/models/guru/guru";
import { env } from 'process';

// Access environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

interface IEnv {
    JWT_SECRET: string,
    EXPIRED_TIME: string,
}

const getEnvVars = (): IEnv => {
    return {
        JWT_SECRET: process.env.JWT_SECRET || '',
        EXPIRED_TIME: process.env.EXPIRED_TIME || '12h',
    };
};

const validateEnvVars = (config: IEnv): IEnv => {
    for (const [key, value] of Object.entries(config)) {
        if (value === '') {
            throw new Error(`Missing environment variable: ${key}`);
        }
    }
    return config;
};

const envVars = validateEnvVars(getEnvVars());

// Generate token
const expiration_time = envVars.EXPIRED_TIME; //env
const secret_key = envVars.JWT_SECRET; //env

export const generateToken = async (user: KelompokOutput | GuruOutput | undefined) => {
    let signOptions = {
        expiresIn: expiration_time,
    };
    let token = jwt.sign({ id: user?.id, username: user?.username }, secret_key!, signOptions);
    return token;
};