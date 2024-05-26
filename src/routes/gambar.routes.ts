import express from 'express';

import * as gambarController from '../controllers/gambar/gambar.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const gambarRouter = express.Router();

gambarRouter.get('/get/:id', verifyJWTToken, gambarController.getStoryByGambar);
gambarRouter.post('/post', verifyJWTToken, gambarController.createGambar);
gambarRouter.delete('/delete', verifyJWTToken, gambarController.deleteGambar);
gambarRouter.patch('/update', verifyJWTToken, gambarController.updateGambar);