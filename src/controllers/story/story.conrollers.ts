import { NextFunction, Response } from 'express';

import * as storyServices from '../../services/story/story.services';
import { CustomRequest } from '../../common/middlewares/auth.middlewares';
import { generateIdUser } from '../../common/helpers/generateid/generateid';

export const createStory = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newStoryId = generateIdUser.generateId('STRY_');

        const newStoryData = { ...req.body, id: newStoryId };

        let story = await storyServices.createStory(newStoryData);

        return res.status(201).send(story);
    } catch (error) {
        return next(error);
    }
};

export const deleteStory = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await storyServices.deleteStory(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export const getKelompokByStory = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await storyServices.getKelompokByStory(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};