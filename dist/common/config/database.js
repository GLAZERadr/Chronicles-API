import { Sequelize } from "sequelize";
export const sequalize = new Sequelize('chronicles', //env
'avnadmin', //env
'AVNS_tCBEMHVqWfQCzDPMP_M', //env
{
    host: 'mysql-3de7121e-student-dbf6.h.aivencloud.com', //env
    dialect: 'mysql', //env
    port: 22155, //env,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
    },
    retry: {
        max: 10,
        timeout: 3000,
    },
});
sequalize.authenticate().then(() => {
    console.log('Successfully connect to Chronicles Database...');
}).catch((error) => {
    console.error('Error connecting to Database.', error);
});
