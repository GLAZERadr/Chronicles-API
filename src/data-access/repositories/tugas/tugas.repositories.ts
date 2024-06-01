import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Guru } from "../../models/guru/guru";
import { Tugas, TugasOutput } from "../../models/tugas/tugas";

export const createTugas = async (newTugas: Tugas): Promise<TugasOutput> => {
    try {
        return await Tugas.create(newTugas);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteTugas = async (id: string): Promise<string> => {
    try {
        const result = await Tugas.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Tugas not deleted';
        }
        return `Tugas ${id} is deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
};

export const existingTugasById = async (id: string): Promise<boolean> => {
    try {
        const result = await Tugas.findByPk(id);
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const getGuruByTugas = async (id: string): Promise<TugasOutput | null> => {
    try {
        const tugas = await Tugas.findByPk(id, { include: [{ model: Guru, as: 'guru' }] });
        return tugas || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const updateNilaiAndKomentar = async (id: string, nilai_kelompok: number, komentar: string): Promise<TugasOutput | null> => {
    try {
        await Tugas.update({ nilai_kelompok: nilai_kelompok, komentar: komentar }, { where: { id: id }});
        return await Tugas.findByPk(id);
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
};