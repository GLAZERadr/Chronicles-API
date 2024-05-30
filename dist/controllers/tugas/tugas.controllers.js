import * as tugasServices from '../../services/tugas/tugas.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const createTugas = async (req, res, next) => {
    try {
        const newTugasId = generateIdUser.generateId('TGS_');
        const newTugasData = { ...req.body, id: newTugasId };
        let tugas = await tugasServices.createTugas(newTugasData);
        return res.status(201).send(tugas);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteTugas = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await tugasServices.deleteTugas(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getGuruByTugas = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await tugasServices.getGuruByTugas(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
