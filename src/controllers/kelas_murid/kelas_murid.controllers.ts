import { NextFunction, Response } from 'express';

import * as kelasMuridServices from '../../services/kelas_murid/kelas_murid.services';
import { CustomRequest } from '../../common/middlewares/auth.middlewares';

export const createKelasMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let kelas_murid = await kelasMuridServices.createKelasMurid(req.body);

        return res.status(201).send(kelas_murid);
    } catch (error) {
        return next(error);
    }
};

export const deleteKelasMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id_kelas, id_murid } = req.params;

        let result = await kelasMuridServices.deleteKelasMurid(id_kelas, id_murid);

        return res.status(200).send(result);
    } catch(error) {
        return next(error);
    }
};

export const getAllMuridByKelas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id_kelas } = req.params;

        let result = await kelasMuridServices.getAllMuridByKelas(id_kelas);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};