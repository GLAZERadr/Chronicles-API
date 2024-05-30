import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Gambar } from "../../models/gambar/gambar";
import { Story } from "../../models/story/story";
export const createGambar = async (newGambar) => {
    try {
        return await Gambar.create(newGambar);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteGambar = async (id) => {
    try {
        const result = await Gambar.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Gambar not deleted';
        }
        return `Gambar ${id} is deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const updateGambar = async (id, url_gambar) => {
    try {
        await Gambar.update({ url_gambar: url_gambar }, { where: { id: id } });
        return await Gambar.findByPk(id);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getStoryByGambar = async (id) => {
    try {
        const gambar = await Gambar.findByPk(id, { include: Story });
        return gambar || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existGambarById = async (id) => {
    try {
        const result = await Gambar.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
