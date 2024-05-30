import express from 'express';
import { errorMiddleware } from './common/middlewares/error.middlewares';
import guruRouter from './routes/guru.routes';
import sessionRouter from './routes/session.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { gambarRouter } from './routes/gambar.routes';
import { kelasRouter } from './routes/kelas.routes';
import { kelompokRouter } from './routes/kelompok.routes';
import { pertandinganRouter } from './routes/pertandingan.routes';
import { tugasRouter } from './routes/tugas.routes';
import { storyRouter } from './routes/story.routes';
import { restoryRouter } from './routes/restory.routes';
const app = express();
const port = 8080;
app.use(express.json());
app.use(errorMiddleware);
app.use(cors());
app.use(cookieParser());
//handle logger
app.use((req, res, next) => {
    console.log(req.method, req.hostname, req.path);
    next();
});
app.use('/chronicles-v1/api/guru', guruRouter);
app.use('/chronicles-v1/api/kelas', kelasRouter);
app.use('/chronicles-v1/api/kelompok', kelompokRouter);
app.use('/chronicles-v1/api/pertandingan', pertandinganRouter);
app.use('/chronicles-v1/api/tugas', tugasRouter);
app.use('/chronicles-v1/api/session', sessionRouter);
app.use('/chronicles-v1/api/story', storyRouter);
app.use('/chronicles-v1/api/restory', restoryRouter);
app.use('/chronicles-v1/api/gambar', gambarRouter);
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
app.use('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello Chronicles😎' });
});
app.get('/cookies', function (req, res) {
    console.log('Cookies: ', req);
    console.log('Signed Cookies: ', req.signedCookies);
});
app.listen(port, () => {
    console.log(`Server is listening in ${port}`);
});
export default app;
