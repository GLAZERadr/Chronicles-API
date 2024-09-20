import express from 'express';

import * as speechControllers from '../controllers/self-learning/chronicles-speech.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const speechRouter = express.Router();

speechRouter.post('/post', verifyJWTToken, speechControllers.convertTexttoAudio);