import * as exceptions from '../../common/exceptions/exceptions';
import * as tugasRepository from '../../data-access/repositories/tugas/tugas.repositories';
import { validateTugas } from './tugas.validator';
export const createTugas = async (newTugas) => {
    validateTugas(newTugas);
    return await tugasRepository.createTugas(newTugas);
};
export const deleteTugas = async (id) => {
    const existingTugas = await tugasRepository.existingTugasById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }
    return await tugasRepository.deleteTugas(id);
};
export const getGuruByTugas = async (id) => {
    const existingTugas = await tugasRepository.existingTugasById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }
    return await tugasRepository.getGuruByTugas(id);
};
