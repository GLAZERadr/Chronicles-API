import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Story, StoryOutput } from "../../models/story/story";

export const createStory = async (newStory: Story): Promise<StoryOutput> => {
    try {
        return await Story.create(newStory);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteStory = async (id: string): Promise<string> => {
    try {
        const result = await Story.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Story not deleted';
        }
        return `Story ${id} is deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
}

export const getKelompokByStory = async (id: string): Promise<StoryOutput | null> => {
    try {
        const story = await Story.findByPk(id, { include: Kelompok });
        return story || null;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    } 
};

export const existJudulOfStory = async (judul: string): Promise<boolean> => {
    try {
        const result = await Story.findOne({ where: { judul: judul } });
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existingStoryById = async (id: string): Promise<boolean> => {
    try {
        const result = await Story.findByPk(id);
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const updateGambar = async (id: string, url_gambar: string): Promise<StoryOutput | null> => {
    try {
        await Story.update({ url_gambar: url_gambar }, { where: { id: id }});
        return await Story.findByPk(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};