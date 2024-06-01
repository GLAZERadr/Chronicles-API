import express from 'express';

import * as storyController from '../controllers/story/story.conrollers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const storyRouter = express.Router();

storyRouter.get('/get/kelompok/:id', verifyJWTToken, storyController.getKelompokByStory);
storyRouter.get('/get/:id', verifyJWTToken, storyController.getStoryById);
storyRouter.post('/post', verifyJWTToken, storyController.createStory);
storyRouter.delete('/delete', verifyJWTToken, storyController.deleteStory);