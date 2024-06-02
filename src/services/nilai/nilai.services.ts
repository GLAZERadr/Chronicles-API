import * as exceptions from '../../common/exceptions/exceptions';
import * as nilaiRepository from '../../data-access/repositories/nilai/nilai.repositories';

import { validateNilaiKelompok, validateKomentar } from './nilai.validator';
import { Nilai, NilaiOutput } from '../../data-access/models/nilai/nilai';

export const createNilai = async (newNilai: Nilai): Promise<NilaiOutput> => {    
    return await nilaiRepository.createNilai(newNilai);
};

export const deleteNilai = async (id: string): Promise<string> => {
    const existingTugas: boolean = await nilaiRepository.existingNilaiById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    return await nilaiRepository.deleteNilai(id);
};

export const getGuruByNilai = async (id: string): Promise<NilaiOutput | null> => {
    const existingTugas: boolean = await nilaiRepository.existingNilaiById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    return await nilaiRepository.getGuruByNilai(id);
};

export const updateNilaiAndKomentar = async (id: string, nilai_kelompok: number, komentar: string): Promise<NilaiOutput | null> => {
    const existingTugas: boolean = await nilaiRepository.existingNilaiById(id);
    if (!existingTugas) {
        throw new exceptions.ElementNotFoundException(`Tugas with ${id} not found!!`);
    }

    validateNilaiKelompok(nilai_kelompok);
    validateKomentar(komentar);

    return await nilaiRepository.updateNilaiAndKomentar(id, nilai_kelompok, komentar);
};