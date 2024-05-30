import express from 'express';
import * as tugasController from '../controllers/tugas/tugas.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';
export const tugasRouter = express.Router();
tugasRouter.get('/get/guru/:id', verifyJWTToken, tugasController.getGuruByTugas);
tugasRouter.post('/post', verifyJWTToken, tugasController.createTugas);
tugasRouter.delete('/delete', verifyJWTToken, tugasController.deleteTugas);
