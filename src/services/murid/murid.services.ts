import * as exceptions from '../../common/exceptions/exceptions';
import * as muridRepository from '../../data-access/repositories/murid/murid.repositories';

import { validateMurid } from './murid.validator';
import { Murid, MuridOutput } from '../../data-access/models/murid/murid';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
import { generateRandomUsername } from '../../common/helpers/randomAccount/randomusername';
import { generateRandomPassword } from '../../common/helpers/randomAccount/randompass';

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
        throw new exceptions.ElementNotFoundException(`Murid with ${id} not found!!`);
    }

    return await muridRepository.deleteMurid(id);
};

export const getMuridByUsername = async (username: string): Promise<MuridOutput | null> =>  {
    const existingMurid: boolean = await muridRepository.existingMuridByUsername(username);
    if (!existingMurid) {
        throw new exceptions.ElementNotFoundException(`Murid with ${username} not found!!`);
    }

    const murid = await muridRepository.getMuridByUsername(username);
    return murid;
};

export const getMuridById = async (id: string): Promise<MuridOutput | null> => {
    const existingMurid: boolean = await muridRepository.existingMuridById(id);
    if (!existingMurid) {
        throw new exceptions.ElementNotFoundException(`Murid with ${id} not found!!`);
    }

    const murid = await muridRepository.getMuridById(id);
    return murid;
};

export const getAllMurid = async (): Promise<Array<MuridOutput> | null> => {
    return await muridRepository.getAllMurid();
};

export const getMuridByUsernameAndPass = async (username: string, password: string): Promise<MuridOutput | null> => {
    const existingMurid = await muridRepository.existingMuridByUsername(username);
    if (!existingMurid) {
        throw new exceptions.ElementNotFoundException(`Murid with ${username} not found!!`);
    }

    const murid = await muridRepository.getMuridByUsernameAndPass(username, password);
    return murid;
};

export const createRandomAccountByTeamNumbers = async (teamnumbers: number, newMurid: Partial<Murid>): Promise<Array<MuridOutput> | null> => {
    const accounts: Array<Murid> = [];

    for (let i = 0; i < teamnumbers; i++) {
        const username = generateRandomUsername.generateRandUname();
        const newMuridId = generateIdUser.generateId('MUR_' + username);
        const password = generateRandomPassword.generateRandPass();
        const nama = "";

        const newMuridData: Partial<Murid> = { ...newMurid, id: newMuridId, username: username, password: password, nama: nama };

        accounts.push(newMuridData as Murid); 
    }

    return await muridRepository.createRandomAccounts(accounts);
};

export const updateNama = async (id: string, nama: string): Promise<MuridOutput | null> => {
    const existingMurid = await muridRepository.existingMuridById(id);

    if (!existingMurid) {
        throw new exceptions.ElementNotFoundException(`Murid with ${id} not found!!`);
    }

    const updatedNama = await muridRepository.updateNama(id, nama);
    return updatedNama || null;
}