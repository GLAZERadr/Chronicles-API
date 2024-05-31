import { Sequelize } from "sequelize";
export const sequalize = new Sequelize('defaultdb', //env
'avnadmin', //env
'AVNS_DnhVSwZtBL05nYGliqY', //env
{
    host: 'chronicles-student-dbf6.g.aivencloud.com', //env
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
        timeout: 5000,
    },
});
sequalize.authenticate().then(() => {
    console.log('Successfully connect to Chronicles Database...');
}).catch((error) => {
    console.error('Error connecting to Database.', error);
});
