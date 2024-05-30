import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Pertandingan } from "../../models/kelompok/pertandingan.kelompok";
import { Story } from "../../models/story/story";
export const createPertandingan = async (newPertandingan) => {
    try {
        return await Pertandingan.create(newPertandingan);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deletePertandingan = async (id) => {
    try {
        const result = await Pertandingan.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Pertandingan not deleted';
        }
        return `Pertandingan ${id} not deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getKelompokByPertandingan = async (id) => {
    try {
        const pertandingan = await Pertandingan.findByPk(id, { include: Kelompok });
        return pertandingan || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getStoryFromKelompokByPertandingan = async (id) => {
    try {
        const pertandingan = await Pertandingan.findByPk(id, {
            include: [
                {
                    model: Kelompok,
                    include: [Story],
                },
            ],
        });
        return pertandingan;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingPertandinganByid = async (id) => {
    try {
        const result = await Pertandingan.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
