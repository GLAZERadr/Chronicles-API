import * as exceptions from '../../common/exceptions/exceptions';
import * as kelasMuridRepository from '../../data-access/repositories/kelas/kelas_murid.repositories';
import { existingKelasById } from '../../data-access/repositories/kelas/kelas.repositories';

import { KelasMurid, KelasMuridOutput } from '../../data-access/models/kelas/kelas_murid';

export const createKelasMurid = async (newKelasMurid: KelasMurid): Promise<KelasMuridOutput> => {
    const kelasMuridExist: boolean = await kelasMuridRepository.existingKelasMuridById(newKelasMurid.id_kelas, newKelasMurid.id_murid);
    if (kelasMuridExist) {
        throw new exceptions.ElementAlreadyExists(`Murid with ${newKelasMurid.id_murid} in ${newKelasMurid.id_kelas} already exist!!!`);
    }

    return await kelasMuridRepository.createKelasMurid(newKelasMurid);
};

export const deleteKelasMurid = async (id_kelas: string, id_murid: string): Promise<string> => {
    const kelasMuridExist: boolean = await kelasMuridRepository.existingKelasMuridById(id_kelas, id_murid);
    if (!kelasMuridExist) {
        throw new exceptions.ElementNotFoundException(`Murid with ${id_murid} in ${id_kelas} not found!!!`);
    }

    return await kelasMuridRepository.deleteKelasMurid(id_murid, id_kelas);
}

export const getAllMuridByKelas = async (id_kelas: string): Promise<Array<KelasMuridOutput> | null> => {
    const kelasExist: boolean = await existingKelasById(id_kelas);
    if (!kelasExist) {
        throw new exceptions.ElementNotFoundException(`Kelas with ${id_kelas} not found!!!`);
    }

    const kelasMurid = await kelasMuridRepository.getAllMuridByKelas(id_kelas);
    return kelasMurid || null;
}