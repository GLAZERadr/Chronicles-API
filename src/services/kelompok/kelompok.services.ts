import * as exceptions from '../../common/exceptions/exceptions';
import * as kelompokRepository from '../../data-access/repositories/kelompok/kelompok.repositories';

import { validateKelompok } from './kelompok.validator';
import { Kelompok, KelompokOutput } from '../../data-access/models/kelompok/kelompok';

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
        throw new exceptions.ElementNotFoundException(`Murid with ${id} not found!!`);
    }

    const kelompok = await kelompokRepository.getKelompokById(id);
    return kelompok;
};

export const getAnggotaByKelompok = async (id: string): Promise<KelompokOutput | null> => {
    const existingKelompok: boolean = await kelompokRepository.existingKelompokById(id);
    if (!existingKelompok) {
        throw new exceptions.ElementNotFoundException(`Kelompok with ${id} not found!!`);
    }

    const kelompok = await kelompokRepository.getAnggotaByKelompok(id);
    return kelompok;
};