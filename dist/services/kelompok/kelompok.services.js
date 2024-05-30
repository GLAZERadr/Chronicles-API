import * as exceptions from '../../common/exceptions/exceptions';
import * as kelompokRepository from '../../data-access/repositories/kelompok/kelompok.repositories';
import { validateKelompok } from './kelompok.validator';
import { generateRandomUsername } from '../../common/helpers/randomAccount/randomusername';
import { generateIdUser } from '../../common/helpers/generateid/generateid';
import { generateRandomPassword } from '../../common/helpers/randomAccount/randompass';
export const createKelompok = async (newKelompok) => {
    validateKelompok(newKelompok);
    const kelompokExist = await kelompokRepository.existingKelompokByNama(newKelompok.nama_kelompok);
    if (kelompokExist) {
        throw new exceptions.ElementAlreadyExists(`Kelompok with ${newKelompok.nama_kelompok} already exist!!!`);
    }
    return await kelompokRepository.createKelompok(newKelompok);
};
export const deleteKelompok = async (id) => {
    const existingKelompok = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!!`);
    }
    return await kelompokRepository.deleteKelompok(id);
};
export const getAllKelompok = async () => {
    return await kelompokRepository.getAllKelompok();
};
export const getKelompokById = async (id) => {
    const existingKelompok = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!`);
    }
    const kelompok = await kelompokRepository.getKelompokById(id);
    return kelompok;
};
export const createRandomAccountByTeamNumbers = async (teamnumbers, newKelompok) => {
    const accounts = [];
    for (let i = 0; i < teamnumbers; i++) {
        const username = generateRandomUsername.generateRandUname();
        const newKelompokId = generateIdUser.generateId('KEL_' + username);
        const password = generateRandomPassword.generateRandPass();
        const newKelompokData = { ...newKelompok, id: newKelompokId, username: username, password: password };
        accounts.push(newKelompokData);
    }
    return await kelompokRepository.createRandomAccounts(accounts);
};
export const getKelompokByUsernameAndPassword = async (username, password) => {
    const existingUsername = await kelompokRepository.existigKelompokByUsername(username);
    if (!existingUsername) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${username} not found!!!`);
    }
    const kelompok = await kelompokRepository.getKelompokByUsernameAndPassword(username, password);
    return kelompok || null;
};
