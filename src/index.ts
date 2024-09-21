import path from 'path';
import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';
import { errorMiddleware } from './common/middlewares/error.middlewares';
import guruRouter from './routes/guru.routes';
import sessionRouter from './routes/session.routes';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import { kelasRouter } from './routes/kelas.routes';
import { kelompokRouter } from './routes/kelompok.routes';
import { pertandinganRouter } from './routes/pertandingan.routes';
import { nilaiRouter } from './routes/nilai.routes';
import { storyRouter } from './routes/story.routes';
import { restoryRouter } from './routes/restory.routes';
import { chroniclesSelfLearn } from './routes/chronicles-self-learning.routes';

// Access environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface IEnv {
  SERVER_PORT: number
}

const getEnvVars = (): IEnv => {
  return {
    SERVER_PORT: parseInt(process.env.SERVER_PORT || '3000', 10)
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

// Create a new Express application
const app: Application = express();
const port: number = envVars.SERVER_PORT;

const corsOption = {
  origin: ['https://chronicles.heritsam.dev', 'http://localhost:5173'],
  credentials: true,
}

function corsMidd(req: Request, res: Response, next: NextFunction) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Allow specific headers to be sent in the request
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Allow credentials (e.g., cookies, authentication) to be included in requests
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
}

app.use(express.json());
app.use(errorMiddleware);
app.use(cors(corsOption));
app.options('*', cors());
app.use(cookieParser());
app.use(corsMidd);

//handle logger
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.hostname, req.path);
  next();
})

app.use('/chronicles-v1/api/guru', guruRouter);
app.use('/chronicles-v1/api/kelas', kelasRouter);
app.use('/chronicles-v1/api/kelompok', kelompokRouter);
app.use('/chronicles-v1/api/pertandingan', pertandinganRouter);
app.use('/chronicles-v1/api/nilai', nilaiRouter);
app.use('/chronicles-v1/api/session', sessionRouter);
app.use('/chronicles-v1/api/story', storyRouter);
app.use('/chronicles-v1/api/restory', restoryRouter)
app.use('/chronicles-v1/api/self-learn', chroniclesSelfLearn);

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