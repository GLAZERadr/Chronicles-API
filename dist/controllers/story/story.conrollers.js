import * as storyServices from '../../services/story/story.services';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
export const createStory = async (req, res, next) => {
    try {
        const newStoryId = generateIdUser.generateId('STRY_');
        const newStoryData = { ...req.body, id: newStoryId };
        let story = await storyServices.createStory(newStoryData);
        return res.status(201).send(story);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteStory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await storyServices.deleteStory(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
export const getKelompokByStory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let result = await storyServices.getKelompokByStory(id);
        return res.status(200).send(result);
    }
    catch (error) {
        return next(error);
    }
};
