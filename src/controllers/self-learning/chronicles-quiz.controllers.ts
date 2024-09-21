import { Request, NextFunction, Response } from 'express';

import * as storyServices from '../../services/story/story.services';
import { LlamaMakeQuiz } from '../../api/make-quiz-llama/make-quiz-llama';

export const chroniclesCreateRandomQuiz = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let result = await storyServices.getRandomStory();

        if (!result) {
            return res.status(404).json({ message: "Story not found" });
        }

        const story_orientation = result.orientation;
        const story_complication = result.complication;
        const story_resolution = result.resolution;
        const story_reorientation = result.reorientation;

        const story = story_orientation + '\n' + story_complication + '\n' + story_resolution + '\n' + story_reorientation;

        console.log("Sending text to AI: ", story);
    
        const quizResult = await LlamaMakeQuiz(story);
    
        if (quizResult instanceof Error) {
            return res.status(500).json({ message: quizResult.message });
        }
    
        console.log("Success creating quiz using Llama AI");
    
        return res.status(201).json({
            quiz: quizResult.quiz,
            story: quizResult.story
        });
    } catch (error) {
        return next(error);
    }
};