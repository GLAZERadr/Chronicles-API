import { NextFunction, Response } from 'express';

import * as tugasServices from '../../services/tugas/tugas.services';
import * as storyServices from '../../services/story/story.services';
import { CustomRequest } from '../../common/middlewares/auth.middlewares';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
import { sendRequestGradingLlmApi } from '../../api/penilaian-llm/penilaian-llm';

export const createTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const newTugasId = generateIdUser.generateId('TGS_')

        const newTugasData = { ...req.body, id: newTugasId };

        let tugas = await tugasServices.createTugas(newTugasData);

        return res.status(201).send(tugas);
    } catch (error) {
        return next(error);
    }
};

export const deleteTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await tugasServices.deleteTugas(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export const getGuruByTugas = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;

        let result = await tugasServices.getGuruByTugas(id);

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export const gradingStory =  async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { id } = req.params;
        const { id_story } = req.params;

        const getStory = await storyServices.getStoryById(id_story);

        if (!getStory) {
            return res.status(400).json({ message: "Gagal mengenerate penilaian" });
        }

        const { orientation, complication, resolution, reorientation } = getStory;

        const story_text = orientation + ',' + complication + ',' + resolution + ',' + reorientation;

        const grade = await sendRequestGradingLlmApi(story_text);

        const { message, result, final_grade } = grade;

        if (message != "Processed text" && result === null && final_grade === 0) {
            return res.status(400).send({ message: "Gagal mengenerate penilaian" });
        };

        const nilai_kelompok = parseFloat(final_grade);

        const nilai_komentar = await tugasServices.updateNilaiAndKomentar(id, nilai_kelompok, result);
    
        return res.status(200).send(nilai_komentar);
    } catch (error) {
        return next(error);
    }
};
