import express, { Application, Request, Response, NextFunction } from 'express';
// import { errorMiddleware } from './common/middlewares/error.middlewares';
import guruRouter from './routes/guru.routes';
import muridRouter from './routes/murid.routes';
import sessionRouter from './routes/session.routes';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import { anggotaRouter } from './routes/anggota.routes';
import { gambarRouter } from './routes/gambar.routes';
import { kelasMuridRouter } from './routes/kelas_murid.routes';
import { kelasRouter } from './routes/kelas.routes';
import { kelompokRouter } from './routes/kelompok.routes';
import { pertandinganRouter } from './routes/pertandingan.routes';
import { tugasRouter } from './routes/tugas.routes';
import { storyRouter } from './routes/story.routes';
import { restoryRouter } from './routes/restory.routes';

const app: Application = express();
const port: number = 8000;

app.use(express.json());
// app.use(errorMiddleware);
app.use(cors());
app.use(cookieParser());

//handle logger
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.hostname, req.path);
  next();
})

app.use('/chronicles-v1/api/guru', guruRouter);
app.use('/chronicles-v1/api/murid', muridRouter);
app.use('/chronicles-v1/api/kelas', kelasRouter);
app.use('/chronicles-v1/api/kelompok', kelompokRouter);
app.use('/chronicles-v1/api/pertandingan', pertandinganRouter);
app.use('/chronicles-v1/api/tugas', tugasRouter);
app.use('/chronicles-v1/api/session', sessionRouter);
app.use('/chronicles-v1/api/anggota', anggotaRouter);
app.use('/chronicles-v1/api/story', storyRouter);
app.use('/chronicles-v1/api/restory', restoryRouter)
app.use('/chronicles-v1/api/gambar', gambarRouter);
app.use('/chronicles-v1/api/kelas-murid', kelasMuridRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Hello Chronicles😎' });
})

app.get('/cookies', function (req: Request, res: Response) {
  console.log('Cookies: ', req);

  console.log('Signed Cookies: ', req.signedCookies);
})

app.listen(port, () => {
  console.log(`Server is listening in ${port}`);
})

export default app;