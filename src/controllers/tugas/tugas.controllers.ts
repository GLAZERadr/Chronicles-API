import { NextFunction, Response } from 'express';

import * as tugasServices from '../../services/tugas/tugas.services';
import { CustomRequest } from '../../common/middlewares/auth.middlewares';
import { generateIdUser } from '../../common/helpers/generateid/generateid';

export const createTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newTugasId = generateIdUser.generateId('TGS_')

        const newTugasData = { ...req.body, id: newTugasId };

        let tugas = await tugasServices.createTugas(newTugasData);

        return res.status(201).send(tugas);
    } catch (error) {
        return next(error);
    }
};

export const deleteTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await tugasServices.deleteTugas(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export const getGuruByTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await tugasServices.getGuruByTugas(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};
