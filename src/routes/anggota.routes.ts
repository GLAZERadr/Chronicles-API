import express from 'express';

import * as anggotaController from '../controllers/anggota/anggota.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const anggotaRouter = express.Router();

anggotaRouter.get('/get', verifyJWTToken, anggotaController.getAllAnggota);
anggotaRouter.post('/post', verifyJWTToken, anggotaController.createAnggota);
anggotaRouter.delete('/delete', verifyJWTToken, anggotaController.deleteAnggota);