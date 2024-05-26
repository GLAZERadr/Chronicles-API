import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Kelompok } from "../../models/kelompok/kelompok";
import { Pertandingan, PertandinganOutput } from "../../models/kelompok/pertandingan.kelompok";
import { Story } from "../../models/story/story";

export const createPertandingan = async (newPertandingan: Pertandingan): Promise<PertandinganOutput> => {
    try {
        return await Pertandingan.create(newPertandingan);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deletePertandingan = async (id: string): Promise<string> => {
    try {
        const result = await Pertandingan.destroy({ where: { id: id }});
        if (result === 0) {
            return 'Pertandingan not deleted';
        }
        return `Pertandingan ${id} not deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}; 

export const getKelompokByPertandingan = async (id: string): Promise<PertandinganOutput | null> => {
    try {
        const pertandingan = await Pertandingan.findByPk(id, { include: Kelompok });
        return pertandingan || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const getStoryFromKelompokByPertandingan = async (id: string): Promise<PertandinganOutput | null> => {
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
    } catch (error: any) {
      throw new DatabaseException(error.message);
    }
};
