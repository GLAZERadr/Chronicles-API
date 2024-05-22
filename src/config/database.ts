const Sequalize = require('sequelize');

export const sequalize = new Sequalize (
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        port: process.env.DATABASE_PORT,
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