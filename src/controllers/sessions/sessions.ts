import { NextFunction, Response } from 'express';
import { validateLogin } from '../../services/sessions/sessions.validator';

import * as guruServices from '../../services/guru/guru.services'
import * as muridServices from '../../services/murid/murid.services'
import * as tokenServices from '../../services/tokens/token.services'
import { CustomRequest } from '../../common/middlewares/auth.middlewares';
import { ElementInvalidException } from '../../common/exceptions/exceptions';

export interface LoginInput {
    username: string;
    password: string;
}

export const loginGuru = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let loginInfo: LoginInput = req.body;
        validateLogin(loginInfo);

        let guru = await guruServices.getGuruByUsername(loginInfo.username);

        if (!guru) {
            throw new ElementInvalidException('Guru credentials are invalid!!');
        }

        if (loginInfo.password != guru.password) {
            throw new ElementInvalidException('Guru credentials are invalid!!');
        }

        let token = await tokenServices.generateToken(guru);

        res.cookie('jwt_token', token, {httpOnly: true});
        res.status(200).json({
            username: loginInfo.username,
            token: token
        })
    } catch (error) {
        next(error);
    }
}

export const loginMurid = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        let loginInfo: LoginInput = req.body;
        validateLogin(loginInfo);

        let murid = await muridServices.getMuridByUsername(loginInfo.username);

        if (!murid) {
            throw new ElementInvalidException('Murid credentials are invalid!!');
        }

        if (loginInfo.password != murid.password) {
            throw new ElementInvalidException('Murid credentials are invalid!!');
        }

        let token = await tokenServices.generateToken(murid);

        res.cookie('jwt_token', token, {httpOnly: true});
        res.status(200).json({
            username: loginInfo.username,
            token: token
        })
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        res.clearCookie('jwt_token');
        res.send('Successfully logged out!!!');
    } catch (error) {
        next(error);
    }
}