import * as exceptions from '../../common/exceptions/exceptions';
import * as anggotaRepository from '../../data-access/repositories/kelompok/anggota.repositories';

import { Anggota, AnggotaOutput } from '../../data-access/models/kelompok/anggota.kelompok';

export const createAnggota = async (newAnggota: Anggota): Promise<AnggotaOutput> => {
    return await anggotaRepository.createAnggota(newAnggota);
};

export const deleteAnggota = async (id: string): Promise<string> => {
    const existAnggota: boolean = await anggotaRepository.existAngotaById(id);

    if (!existAnggota) {
        throw new exceptions.ElementNotFoundException(`Anggota ${id} not found`);
    } 

    return await anggotaRepository.deleteAnggota(id); 
}

export const getAllAnggota = async (): Promise<Array<AnggotaOutput> | null> => {
    return await anggotaRepository.getAllAnggota();
}