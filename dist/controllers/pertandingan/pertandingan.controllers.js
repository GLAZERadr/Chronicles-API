import * as pertandinganServices from '../../services/pertandingan/pertandingan.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const createPertandingan = async (req, res, next) => {
    try {
        const newPertandinganId = generateIdUser.generateId('PERT_');
        const newPertandinganData = { ...req.body, id: newPertandinganId };
        let pertandingan = await pertandinganServices.createPertandingan(newPertandinganData);
        return res.status(200).send(pertandingan);
    }
    catch (error) {
        return next(error);
    }
};
export const deletePertandingan = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await pertandinganServices.deletePertandingan(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getKelompokByPertandingan = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await pertandinganServices.getKelompokByPertandingan(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getStoryFromKelompokByPertandingan = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await pertandinganServices.getStoryFromKelompokByPertandingan(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
