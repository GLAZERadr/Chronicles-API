import { Sequelize } from "sequelize";

export const sequalize = new Sequelize (
    'Chronicles', //env
    'root', //env
    'Adrian*04', //env
    {
        host: '127.0.0.1', //env
        dialect: 'mysql', //env
        port: 3306, //env
        retry: {
            max: 10,
            timeout: 3000,
        },
    },
);

sequalize.authenticate().then(() => {
    console.log('Successfully connect to Chronicles Database...');
}).catch((error: any) => {
    console.error('Error connecting to Database.', error);
})