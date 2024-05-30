import { Request, NextFunction, Response } from 'express';

import * as kelompokServices from '../../services/kelompok/kelompok.services';
import { CustomRequest } from '../../common/middlewares/auth.middlewares';
import { generateIdUser } from '../../common/helpers/generateid/generateid';

export const createKelompok = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newKelompokId = generateIdUser.generateId('KEL_');

        const newKelompokData = { ...req.body, id: newKelompokId };

        let kelompok = await kelompokServices.createKelompok(newKelompokData);

        return res.status(201).send(kelompok);
    } catch (error) {
        return next(error);
    }
};

export const deleteKelompok = async (req: CustomRequest, res: Response, next: NextFunction ): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await kelompokServices.deleteKelompok(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};


export const getAllKelompok = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let kelompoks = await kelompokServices.getAllKelompok();

        return res.status(200).send(kelompoks);
    } catch(error) {
        return next(error);
    }
};

export const getKelompok = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let kelompok = await kelompokServices.getKelompokById(id);

        return res.status(200).send(kelompok);
    } catch (error) {
        return next(error);
    }
};