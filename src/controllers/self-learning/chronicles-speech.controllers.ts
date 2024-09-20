import { Request, NextFunction, Response } from 'express';

import { sendTextForTTS } from '../../api/chronicles-speech/chronicles-speech';

export const convertTexttoAudio = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { text } = req.body;

        console.log("Sending text to AI: ", text);
    
        const audio = await sendTextForTTS(text);
    
        console.log("Success get audio data from AI");
    
        return res.status(201).send(audio);
    } catch (error) {
        return next(error);
    }
};