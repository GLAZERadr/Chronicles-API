import { DatabaseException } from "../../../common/exceptions/exceptions";
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