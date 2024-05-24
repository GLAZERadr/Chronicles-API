import express, { Application, Request, Response, NextFunction } from 'express';
import { errorMiddleware } from './common/middlewares/error.middlewares';
import guruRouter from './routes/guru.routes';
import muridRouter from './routes/murid.routes';
import sessionRouter from './routes/session.routes';

import cookieParser from 'cookie-parser';
import cors from 'cors';

const app: Application = express();
const port: number = parseInt(process.env.SERVER_PORT as string, 10) || 3000;

app.use(express.json());
app.use(errorMiddleware);
app.use(cors());
app.use(cookieParser());

//handle logger
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.hostname, req.path);
  next();
})

app.use('/chronicles-v1/api/guru', guruRouter);
app.use('/chronicles-v1/api/murid', muridRouter);
app.use('/chronicles-v1/api/session', sessionRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
})

app.get('/cookies', function (req: Request, res: Response) {
  console.log('Cookies: ', req);

  console.log('Signed Cookies: ', req.signedCookies);
})

app.listen(port, () => {
  console.log(`Server is listening in ${port}`);
})

export default app;