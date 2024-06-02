import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Restory, RestoryOutput } from "../../models/restory/restory";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Story, StoryOutput } from "../../models/story/story";

export const createRestory = async (newRestory: Restory): Promise<RestoryOutput> => {
    try {
        return await Restory.create(newRestory);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteRestory = async (id: string): Promise<string> => {
    try {
        const result = await Restory.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Story not deleted';
        }
        return `Story ${id} is deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
}

export const getKelompokByRestory = async (id: string): Promise<RestoryOutput | null> => {
    try {
        const story = await Restory.findByPk(id, { include: Kelompok });
        return story || null;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    } 
};

export const existJudulOfRestory = async (judul: string): Promise<boolean> => {
    try {
        const result = await Restory.findOne({ where: { judul: judul } });
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existingRestoryById = async (id: string): Promise<boolean> => {
    try {
        const result = await Restory.findByPk(id);
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getStoryOfRestoryById = async (id: string): Promise<RestoryOutput | null> => {
    try {
        const restory = await Restory.findByPk(id, { include: Story });
        return restory || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getRealStoryImages = async (id_kelompok: string): Promise<StoryOutput | null> => {
    try {
        const result = await Story.findOne({ where: {id_kelompok: id_kelompok }, attributes: ['url_gambar'] });
        return result || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};