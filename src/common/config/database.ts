import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import path from 'path';

// Access environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

interface IEnv {
    DATABASE_NAME: string;
    DATABASE_HOST: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_PORT: number;
}

const getEnvVars = (): IEnv => {
    return {
        DATABASE_NAME: process.env.DATABASE_NAME || '',
        DATABASE_HOST: process.env.DATABASE_HOST || '',
        DATABASE_USER: process.env.DATABASE_USER || '',
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
        DATABASE_PORT: parseInt(process.env.DATABASE_PORT || '3306', 10),
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

// Create a new Sequelize instance
export const sequalize = new Sequelize (
    envVars.DATABASE_NAME,
    envVars.DATABASE_USER,
    envVars.DATABASE_PASSWORD,
    {
        host: envVars.DATABASE_HOST, //env
        dialect: 'mysql', //env
        port: envVars.DATABASE_PORT, //env,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            },
        },
        pool: {
            max: 50,
            min: 0,
            acquire: 1200000,
            idle: 1000000,
        },
        retry: {
            max: 10,
            timeout: 5000,
        },
    },
);

sequalize.authenticate().then(() => {
    console.log('Successfully connect to Chronicles Database...');
}).catch((error: any) => {
    console.error('Error connecting to Database.', error);
})