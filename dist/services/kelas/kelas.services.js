import * as exceptions from '../../common/exceptions/exceptions';
import * as kelasRepository from '../../data-access/repositories/kelas/kelas.repositories';
import { validateKelas } from './kelas.validator';
export const createKelas = async (newKelas) => {
    validateKelas(newKelas);
    const kelasExist = await kelasRepository.existingKelasByName(newKelas.nama_kelas);
    if (kelasExist) {
        throw new exceptions.ElementAlreadyExists(newKelas.nama_kelas);
    }
    return await kelasRepository.createKelas(newKelas);
};
export const deleteKelas = async (id) => {
    const existingKelas = await kelasRepository.existingKelasById(id);
    if (!existingKelas) {
        throw new exceptions.ElementNotFoundException(`Murid with ${id} not found!!`);
    }
    return await kelasRepository.deleteKelas(id);
};
export const getAllKelas = async () => {
    return await kelasRepository.getAllKelas() || null;
};
export const getKelasByNamaKelas = async (nama_kelas) => {
    const existingKelas = await kelasRepository.existingKelasByName(nama_kelas);
    if (!existingKelas) {
        throw new exceptions.ElementNotFoundException(`Kelas ${nama_kelas} not found!!`);
    }
    const kelas = kelasRepository.getKelasByNamaKelas(nama_kelas);
    return kelas || null;
};
