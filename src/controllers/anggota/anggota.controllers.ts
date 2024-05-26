import { NextFunction, Response } from "express";

import * as anggotaServices from '../../services/anggota/anggota.services';
import { CustomRequest } from "../../common/middlewares/auth.middlewares";

export const createAnggota = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newAnggota = req.body;

        let anggota = await anggotaServices.createAnggota(newAnggota);

        return res.status(201).send(anggota);
    } catch (error) {
        return next(error);
    }
};

export const deleteAnggota = async (req: CustomRequest, res: Response, next: NextFunction ): Promise<Response | void> => {
    try {
        const { kode_kelompok, id_murid } = req.params;

        let result = await anggotaServices.deleteAnggota(id_murid, kode_kelompok);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
}

export const getAllAnggota = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let anggotas = await anggotaServices.getAllAnggota();

        return res.status(200).send(anggotas);
    } catch (error) {
        return next(error);
    }
}