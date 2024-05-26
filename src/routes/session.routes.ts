import express from 'express';

import * as sessionControllers from '../controllers/sessions/sessions.controllers';

export const sessionRouter = express.Router();

sessionRouter.post('/guru/login', sessionControllers.loginGuru);
sessionRouter.post('/murid/login', sessionControllers.loginMurid);
sessionRouter.post('/logout', sessionControllers.logout);

export default sessionRouter;