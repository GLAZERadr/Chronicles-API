import express from 'express';

import * as nilaiController from '../controllers/nilai/nilai.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const nilaiRouter = express.Router();

nilaiRouter.get('/get/guru/:id', verifyJWTToken, nilaiController.getGuruByNilai);
nilaiRouter.post('/post', verifyJWTToken, nilaiController.createNilai);
nilaiRouter.post('/post/guru/:id_guru/kelompok/:id_kelompok/story/:id_story', verifyJWTToken, nilaiController.gradingStory);
nilaiRouter.delete('/delete', verifyJWTToken, nilaiController.deleteNilai);
nilaiRouter.patch('/update/nilai-komentar/:id', verifyJWTToken, nilaiController.updateNilaiAndKomentar);