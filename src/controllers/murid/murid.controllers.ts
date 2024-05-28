import { Request, NextFunction, Response } from "express";

import * as muridServices from '../../services/murid/murid.services';
import { CustomRequest } from "../../common/middlewares/auth.middlewares";
import { generateIdUser } from "../../common/helpers/generateid/generateid";

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newMuridId = generateIdUser.generateId('MUR_');

        const newMuridData = { ...req.body, id: newMuridId };

        let murid = await muridServices.createMurid(newMuridData);

        return res.status(201).send(murid);
    } catch (error) {
        return next(error);
    }
}

export const deleteMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await muridServices.deleteMurid(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
}

export const getMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let murid = await muridServices.getMuridById(id);

        return res.status(200).send(murid);
    } catch (error) {
        return next(error);
    }
}

export const getAllMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let murids = await muridServices.getAllMurid();

        return res.status(200).send(murids);
    } catch (error) {
        return next(error);
    }
}

export const updateNamaMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;
        const { nama } = req.body;

        let murid = await muridServices.updateNama(id, nama);

        return res.status(200).send(murid);
    } catch (error) {
        return next(error);
    }
}; 