import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Restory } from "../../models/restory/restory";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Story } from "../../models/story/story";
export const createRestory = async (newRestory) => {
    try {
        return await Restory.create(newRestory);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteRestory = async (id) => {
    try {
        const result = await Restory.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Story not deleted';
        }
        return `Story ${id} is deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getKelompokByRestory = async (id) => {
    try {
        const story = await Restory.findByPk(id, { include: Kelompok });
        return story || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existJudulOfRestory = async (judul) => {
    try {
        const result = await Restory.findOne({ where: { judul: judul } });
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingRestoryById = async (id) => {
    try {
        const result = await Restory.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getStoryOfRestoryById = async (id) => {
    try {
        const restory = await Restory.findByPk(id, { include: Story });
        return restory || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
