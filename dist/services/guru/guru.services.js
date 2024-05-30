import * as exceptions from '../../common/exceptions/exceptions';
import * as guruRepository from '../../data-access/repositories/guru/guru.repositories';
import { validateGuru } from './guru.validator';
export const createGuru = async (newGuru) => {
    validateGuru(newGuru);
    const usernameExist = await guruRepository.existingGuruByUsername(newGuru.username);
    if (usernameExist) {
        throw new exceptions.ElementAlreadyExists(`Guru with ${newGuru.username} already exist!!`);
    }
    return await guruRepository.createGuru(newGuru);
};
export const deleteGuru = async (id) => {
    const existingGuru = await guruRepository.existingGuruById(id);
    if (!existingGuru) {
        throw new exceptions.ElementNotFoundException(`Guru with ${id} not found!!`);
    }
    return await guruRepository.deleteGuru(id);
};
export const getGuruByUsername = async (username) => {
    const existingGuru = await guruRepository.existingGuruByUsername(username);
    if (!existingGuru) {
        throw new exceptions.ElementNotFoundException(`Guru with ${username} not found!!`);
    }
    const guru = await guruRepository.getGuruByUsername(username);
    return guru;
};
export const getGuruById = async (id) => {
    const existingGuru = await guruRepository.existingGuruById(id);
    if (!existingGuru) {
        throw new exceptions.ElementNotFoundException(`Guru with ${id} not found!!`);
    }
    const guru = await guruRepository.getGuruById(id);
    return guru;
};
export const getAllGuru = async () => {
    return await guruRepository.getAllGuru();
};
export const getGuruByUsernameAndPass = async (username, password) => {
    const existingGuru = await guruRepository.existingGuruByUsername(username);
    if (!existingGuru) {
        throw new exceptions.ElementNotFoundException(`Guru with ${username} not found!!`);
    }
    const guru = await guruRepository.getGuruByUsernameAndPass(username, password);
    return guru;
};
