import express from 'express';

import * as speechControllers from '../controllers/self-learning/chronicles-speech.controllers';
import * as quizControllers from '../controllers/self-learning/chronicles-quiz.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const chroniclesSelfLearn = express.Router();

chroniclesSelfLearn.post('/story-audio/post', verifyJWTToken, speechControllers.convertTexttoAudio);
chroniclesSelfLearn.get('/create-quiz/get', verifyJWTToken, quizControllers.chroniclesCreateRandomQuiz);