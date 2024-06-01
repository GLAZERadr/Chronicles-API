import * as exceptions from '../../common/exceptions/exceptions';
import * as tugasRepository from '../../data-access/repositories/tugas/tugas.repositories';

import { validateTugas } from './tugas.validator';
import { Tugas, TugasOutput } from '../../data-access/models/tugas/tugas';

export const createTugas = async (newTugas: Tugas): Promise<TugasOutput> => {
    validateTugas(newTugas);
    
    return await tugasRepository.createTugas(newTugas);
};

export const deleteTugas = async (id: string): Promise<string> => {
    const existingTugas: boolean = await tugasRepository.existingTugasById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    return await tugasRepository.deleteTugas(id);
};

export const getGuruByTugas = async (id: string): Promise<TugasOutput | null> => {
    const existingTugas: boolean = await tugasRepository.existingTugasById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    return await tugasRepository.getGuruByTugas(id);
};

export const updateNilaiAndKomentar = async (id: string, nilai_kelompok: number, komentar: string): Promise<TugasOutput | null> => {
    const existingTugas: boolean = await tugasRepository.existingTugasById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    return await tugasRepository.updateNilaiAndKomentar(id, nilai_kelompok, komentar);
};