import express from 'express';
import * as pertandinganController from '../controllers/pertandingan/pertandingan.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';
export const pertandinganRouter = express.Router();
pertandinganRouter.get('/get/kelompok/:id', verifyJWTToken, pertandinganController.getKelompokByPertandingan);
pertandinganRouter.get('/get/story/kelompok/:id', verifyJWTToken, pertandinganController.getStoryFromKelompokByPertandingan);
pertandinganRouter.post('/post', verifyJWTToken, pertandinganController.createPertandingan);
pertandinganRouter.delete('/delete', verifyJWTToken, pertandinganController.deletePertandingan);
