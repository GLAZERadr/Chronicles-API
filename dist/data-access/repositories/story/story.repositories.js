import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Story } from "../../models/story/story";
export const createStory = async (newStory) => {
    try {
        return await Story.create(newStory);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteStory = async (id) => {
    try {
        const result = await Story.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Story not deleted';
        }
        return `Story ${id} is deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getKelompokByStory = async (id) => {
    try {
        const story = await Story.findByPk(id, { include: Kelompok });
        return story || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existJudulOfStory = async (judul) => {
    try {
        const result = await Story.findOne({ where: { judul: judul } });
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingStoryById = async (id) => {
    try {
        const result = await Story.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
