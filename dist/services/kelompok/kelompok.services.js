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
export const getKelompokByClass = async (id_kelas) => {
    const kelompok = await kelompokRepository.getKelompokByClass(id_kelas);
    if (!kelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id_kelas} not found!!`);
    }
    return kelompok;
};
export const createRandomAccountByTeamNumbers = async (teamnumbers, newKelompok) => {
    const accounts = [];
    for (let i = 0; i < teamnumbers; i++) {
        const username = generateRandomUsername.generateRandUname();
        const newKelompokId = generateIdUser.generateId('KEL_' + username);
        const password = generateRandomPassword.generateRandPass();
        let status;
        if (i % 2 != 0) {
            status = 'story';
        }
        else {
            status = 'restory';
        }
        const newKelompokData = { ...newKelompok, id: newKelompokId, username: username, password: password, status: status };
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
export const updateInfoKelompok = async (id, nama_kelompok, ketua, anggota1, anggota2, anggota3, anggota4) => {
    const existingKelompok = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!`);
    }
    const updatedKelompokInfo = await kelompokRepository.updateInfoKelompok(id, nama_kelompok, ketua, anggota1, anggota2, anggota3, anggota4);
    return updatedKelompokInfo || null;
};
export const updateStatusKelompok = async (id, status) => {
    const existingKelompok = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!`);
    }
    const updatedKelompokStatus = await kelompokRepository.updateStatusKelompok(id, status);
    return updatedKelompokStatus || null;
};
