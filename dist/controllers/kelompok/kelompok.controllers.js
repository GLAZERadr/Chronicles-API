import * as kelompokServices from '../../services/kelompok/kelompok.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const createKelompok = async (req, res, next) => {
    try {
        const newKelompokId = generateIdUser.generateId('KEL_');
        const newKelompokData = { ...req.body, id: newKelompokId };
        let kelompok = await kelompokServices.createKelompok(newKelompokData);
        return res.status(201).send(kelompok);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteKelompok = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await kelompokServices.deleteKelompok(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getAllKelompok = async (req, res, next) => {
    try {
        let kelompoks = await kelompokServices.getAllKelompok();
        return res.status(200).send(kelompoks);
    }
    catch (error) {
        return next(error);
    }
};
export const getKelompok = async (req, res, next) => {
    try {
        const { id } = req.params;
        let kelompok = await kelompokServices.getKelompokById(id);
        return res.status(200).send(kelompok);
    }
    catch (error) {
        return next(error);
    }
};
