import express from 'express';

import * as muridControllers from '../controllers/murid/murid.controllers';
import { verifyJWTToken } from '../common/middlewares/auth.middlewares';

export const muridRouter = express.Router();

muridRouter.get('/get', muridControllers.getAllMurid);
muridRouter.get('/get/:id', verifyJWTToken, muridControllers.getMurid);
muridRouter.delete('/delete/:id', verifyJWTToken, muridControllers.deleteMurid);
muridRouter.post('/signup', muridControllers.signUp);
muridRouter.patch('/update-nama', verifyJWTToken, muridControllers.updateNamaMurid)

export default muridRouter;