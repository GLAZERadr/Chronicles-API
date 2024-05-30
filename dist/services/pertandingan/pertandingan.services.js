import * as exceptions from '../../common/exceptions/exceptions';
import * as pertandinganRepository from '../../data-access/repositories/kelompok/pertandingan.kelompok';
export const createPertandingan = async (newPertandingan) => {
    return await pertandinganRepository.createPertandingan(newPertandingan);
};
export const deletePertandingan = async (id) => {
    const existPertandingan = await pertandinganRepository.existingPertandinganByid(id);
    if (!existPertandingan) {
        throw new exceptions.ElementNotFoundException(`Pertandingan ${id} not found`);
    }
    return await pertandinganRepository.deletePertandingan(id);
};
export const getKelompokByPertandingan = async (id) => {
    const existPertandingan = await pertandinganRepository.existingPertandinganByid(id);
    if (!existPertandingan) {
        throw new exceptions.ElementNotFoundException(`Pertandingan ${id} not found`);
    }
    const pertandingan_antara_kelompok = await pertandinganRepository.getKelompokByPertandingan(id);
    return pertandingan_antara_kelompok || null;
};
export const getStoryFromKelompokByPertandingan = async (id) => {
    const existPertandingan = await pertandinganRepository.existingPertandinganByid(id);
    if (!existPertandingan) {
        throw new exceptions.ElementNotFoundException(`Pertandingan ${id} not found`);
    }
    const cerita_hasil_pertandingan_antar_kelompok = await pertandinganRepository.getStoryFromKelompokByPertandingan(id);
    return cerita_hasil_pertandingan_antar_kelompok || null;
};
