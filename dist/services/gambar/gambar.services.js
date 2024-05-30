import * as exceptions from '../../common/exceptions/exceptions';
import * as gambarRepository from '../../data-access/repositories/gambar/gambar.repositories';
export const createGambar = async (newGambar) => {
    return await gambarRepository.createGambar(newGambar);
};
export const deleteGambar = async (id) => {
    const existingGambar = await gambarRepository.existGambarById(id);
    if (!existingGambar) {
        throw new exceptions.ElementNotFoundException(`Gambar ${id} not found`);
    }
    return await gambarRepository.deleteGambar(id);
};
export const updateGambar = async (id, url_gambar) => {
    const existingGambar = await gambarRepository.existGambarById(id);
    if (!existingGambar) {
        throw new exceptions.ElementNotFoundException(`Gambar ${id} not found`);
    }
    const updatedGambar = await gambarRepository.updateGambar(id, url_gambar);
    return updatedGambar || null;
};
export const getStoryByGambar = async (id) => {
    const existingGambar = await gambarRepository.existGambarById(id);
    if (!existingGambar) {
        throw new exceptions.ElementNotFoundException(`Gambar ${id} not found`);
    }
    const gambarWithStory = await gambarRepository.getStoryByGambar(id);
    return gambarWithStory || null;
};
