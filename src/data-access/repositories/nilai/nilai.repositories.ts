import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Guru } from "../../models/guru/guru";
import { Nilai, NilaiOutput } from "../../models/nilai/nilai";

export const createNilai = async (newNilai: Nilai): Promise<NilaiOutput> => {
    try {
        return await Nilai.create(newNilai);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteNilai = async (id: string): Promise<string> => {
    try {
        const result = await Nilai.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Nilai not deleted';
        }
        return `Nilai ${id} is deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
};

export const existingNilaiById = async (id: string): Promise<boolean> => {
    try {
        const result = await Nilai.findByPk(id);
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const getGuruByNilai = async (id: string): Promise<NilaiOutput | null> => {
    try {
        const tugas = await Nilai.findByPk(id, { include: [{ model: Guru, as: 'guru' }] });
        return tugas || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const updateNilaiAndKomentar = async (id: string, nilai_kelompok: number, komentar: string): Promise<NilaiOutput | null> => {
    try {
        await Nilai.update({ nilai_kelompok: nilai_kelompok, komentar: komentar }, { where: { id: id }});
        return await Nilai.findByPk(id);
    } catch (error: any) {
        throw new DatabaseException(error.message); 
    }
};