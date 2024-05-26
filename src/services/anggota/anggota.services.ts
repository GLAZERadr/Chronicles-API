import * as exceptions from '../../common/exceptions/exceptions';
import * as anggotaRepository from '../../data-access/repositories/kelompok/anggota.repositories';

import { Anggota, AnggotaOutput } from '../../data-access/models/kelompok/anggota.kelompok';

export const createAnggota = async (newAnggota: Anggota): Promise<AnggotaOutput> => {
    return await anggotaRepository.createAnggota(newAnggota);
};

export const deleteAnggota = async (id_murid: string, kode_kelompok: string): Promise<string> => {
    const existAnggota: boolean = await anggotaRepository.existAnggotaById(id_murid, kode_kelompok);

    if (!existAnggota) {
        throw new exceptions.ElementNotFoundException(`Anggota ${id_murid} not found`);
    } 

    return await anggotaRepository.deleteAnggota(id_murid, kode_kelompok); 
}

export const getAllAnggota = async (): Promise<Array<AnggotaOutput> | null> => {
    return await anggotaRepository.getAllAnggota();
}