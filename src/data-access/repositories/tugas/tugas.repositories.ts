import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Guru } from "../../models/guru/guru";
import { Tugas, TugasOutput } from "../../models/tugas/tugas.";

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
        const tugas = await Tugas.findByPk(id, { include: Guru });
        return tugas || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}