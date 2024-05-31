import * as exceptions from '../../common/exceptions/exceptions';
import * as kelompokRepository from '../../data-access/repositories/kelompok/kelompok.repositories';

import { validateKelompok } from './kelompok.validator';
import { Kelompok, KelompokOutput } from '../../data-access/models/kelompok/kelompok';
import { generateRandomUsername } from '../../common/helpers/randomAccount/randomusername';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
import { generateRandomPassword } from '../../common/helpers/randomAccount/randompass';

export const createKelompok = async (newKelompok: Kelompok): Promise<KelompokOutput> => {
    validateKelompok(newKelompok);

    const kelompokExist: boolean = await kelompokRepository.existingKelompokByNama(newKelompok.nama_kelompok);
    if (kelompokExist) {
        throw new exceptions.ElementAlreadyExists(`Kelompok with ${newKelompok.nama_kelompok} already exist!!!`);
    }

    return await kelompokRepository.createKelompok(newKelompok);
};

export const deleteKelompok = async (id: string): Promise<string> => {
    const existingKelompok: boolean = await kelompokRepository.existingKelompokById(id);
    if(!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!!`);
    }

    return await kelompokRepository.deleteKelompok(id);
};

export const getAllKelompok = async (): Promise<Array<KelompokOutput> | null> => {
    return await kelompokRepository.getAllKelompok();
};

export const getKelompokById = async (id: string): Promise<KelompokOutput | null> => {
    const existingKelompok: boolean = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!`);
    }

    const kelompok = await kelompokRepository.getKelompokById(id);
    return kelompok;
};


export const createRandomAccountByTeamNumbers = async (teamnumbers: number, newKelompok: Partial<Kelompok>): Promise<Array<KelompokOutput> | null> => {
    const accounts: Array<Kelompok> = [];

    for (let i = 0; i < teamnumbers; i++) {
        const username = generateRandomUsername.generateRandUname();
        const newKelompokId = generateIdUser.generateId('KEL_' + username);
        const password = generateRandomPassword.generateRandPass();

        let status: string;
        if (i % 2 != 0 )  {
            status = 'story';
        } else {
            status = 'restory';
        }

        const newKelompokData: Partial<Kelompok> = { ...newKelompok, id: newKelompokId, username: username, password: password, status: status };

        accounts.push(newKelompokData as Kelompok); 
    }

    return await kelompokRepository.createRandomAccounts(accounts);
};

export const getKelompokByUsernameAndPassword = async (username: string, password: string): Promise<KelompokOutput | null> => {
    const existingUsername: boolean = await kelompokRepository.existigKelompokByUsername(username);
    if (!existingUsername) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${username} not found!!!`);
    }

    const kelompok = await kelompokRepository.getKelompokByUsernameAndPassword(username, password);
    return kelompok || null;
}