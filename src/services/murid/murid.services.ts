import * as exceptions from '../../common/exceptions/exceptions';
import * as muridRepository from '../../data-access/repositories/murid/murid.repositories';

import { validateMurid } from './murid.validator';
import { Murid, MuridOutput } from '../../data-access/models/murid/murid';

export const createMurid = async (newMurid: Murid): Promise<MuridOutput> => {
    validateMurid(newMurid);

    const usernameExist: boolean = await muridRepository.existingMuridByUsername(newMurid.username);
    if (usernameExist) {
        throw new exceptions.ElementAlreadyExists(`Murid with ${newMurid.username} already exist!!`);
    }

    return await muridRepository.createMurid(newMurid);
};

export const deleteMurid = async (id: string): Promise<string> => {
    const existingMurid: boolean = await muridRepository.existingMuridById(id);
    if (!existingMurid) {
        throw new exceptions.ElementAlreadyExists(`Murid with ${id} not found!!`);
    }

    return await muridRepository.deleteMurid(id);
};

export const getMuridByUsername = async (username: string): Promise<MuridOutput | null> =>  {
    const existingMurid: boolean = await muridRepository.existingMuridByUsername(username);
    if (!existingMurid) {
        throw new exceptions.ElementAlreadyExists(`Murid with ${username} not found!!`);
    }

    const murid = await muridRepository.getMuridByUsername(username);
    return murid;
};

export const getMuridById = async (id: string): Promise<MuridOutput | null> => {
    const existingMurid: boolean = await muridRepository.existingMuridById(id);
    if (!existingMurid) {
        throw new exceptions.ElementAlreadyExists(`Murid with ${id} not found!!`);
    }

    const murid = await muridRepository.getMuridById(id);
    return murid;
};

export const getAllMurid = async (): Promise<Array<MuridOutput> | null> => {
    const murid = await muridRepository.getAllMurid();
    return murid;
}
