import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Guru } from "../../models/guru/guru";
import { Tugas } from "../../models/tugas/tugas.";
export const createTugas = async (newTugas) => {
    try {
        return await Tugas.create(newTugas);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteTugas = async (id) => {
    try {
        const result = await Tugas.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Tugas not deleted';
        }
        return `Tugas ${id} is deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingTugasById = async (id) => {
    try {
        const result = await Tugas.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getGuruByTugas = async (id) => {
    try {
        const tugas = await Tugas.findByPk(id, { include: [{ model: Guru, as: 'guru' }] });
        return tugas || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
