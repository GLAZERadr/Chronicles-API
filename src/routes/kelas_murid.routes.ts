import express from 'express';

import * as kelasMuridController from '../controllers/kelas_murid/kelas_murid.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const kelasMuridRouter = express.Router();

kelasMuridRouter.get('/get/kelas/:id', verifyJWTToken, kelasMuridController.getAllMuridByKelas);
kelasMuridRouter.post('/post', verifyJWTToken, kelasMuridController.createKelasMurid);
kelasMuridRouter.delete('/delete', verifyJWTToken, kelasMuridController.deleteKelasMurid);
