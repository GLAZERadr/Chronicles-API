import express, {Application} from 'express';

const app: Application = express();
const port: number = parseInt(process.env.SERVER_PORT as string, 10) || 3000;
const baseUrl: string = process.env.BASE_URL || '/api';

app.use(express.json());
app.use(baseUrl);

app.listen(port, () => {
  console.log(`Server is listening in ${port}`);
})

export default app;
