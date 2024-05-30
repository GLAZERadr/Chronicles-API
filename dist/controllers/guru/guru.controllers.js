import * as guruServices from '../../services/guru/guru.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const signUp = async (req, res, next) => {
    try {
        const newGuruId = generateIdUser.generateId('GUR_');
        const newGuruData = { ...req.body, id: newGuruId };
        let guru = await guruServices.createGuru(newGuruData);
        return res.status(201).send(guru);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteGuru = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await guruServices.deleteGuru(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getGuru = async (req, res, next) => {
    try {
        const { id } = req.params;
        let guru = await guruServices.getGuruById(id);
        return res.status(200).send(guru);
    }
    catch (error) {
        return next(error);
    }
};
export const getAllGuru = async (req, res, next) => {
    try {
        let gurus = await guruServices.getAllGuru();
        return res.status(200).send(gurus);
    }
    catch (error) {
        return next(error);
    }
};
