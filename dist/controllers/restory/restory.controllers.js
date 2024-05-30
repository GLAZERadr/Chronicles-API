import * as restoryServices from '../../services/restory/restory.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const createRestory = async (req, res, next) => {
    try {
        const newRestoryId = generateIdUser.generateId('RSTRY_');
        const newRestoryData = { ...req.body, id: newRestoryId };
        let restory = await restoryServices.createRestory(newRestoryData);
        return res.status(201).send(restory);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteRestory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await restoryServices.deleteRestory(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getKelompokByRestory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await restoryServices.getKelompokByRestory(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getStoryOfRestoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await restoryServices.getStoryOfRestoryById(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
