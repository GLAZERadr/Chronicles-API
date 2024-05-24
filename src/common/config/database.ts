import { Sequelize } from 'sequelize';

export const sequalize = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    host: process.env.DATABASE_HOST ?? 'localhost',
    dialect: 'mysql', //env
    port: parseInt(process.env.DATABASE_PORT!),
    retry: {
      max: 10,
      timeout: 3000,
    },
  },
);

sequalize
  .authenticate()
  .then(() => {
    console.log('Successfully connect to Chronicles Database...');
  })
  .catch((error) => {
    console.error('Error connecting to Database.', error);
  });
