import express from 'express';

import * as tugasController from '../controllers/tugas/tugas.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const tugasRouter = express.Router();

tugasRouter.get('/get/guru/:id', verifyJWTToken, tugasController.getGuruByTugas);
tugasRouter.post('/post', verifyJWTToken, tugasController.createTugas);
tugasRouter.post('/post/:id/grading/:id_story', verifyJWTToken, tugasController.gradingStory);
tugasRouter.delete('/delete', verifyJWTToken, tugasController.deleteTugas);
tugasRouter.patch('/update/nilai-komentar/:id', verifyJWTToken, tugasController.updateNilaiAndKomentar);