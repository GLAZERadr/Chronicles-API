import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Kelas } from "../../models/kelas/kelas";
export const createKelas = async (newKelas) => {
    try {
        return await Kelas.create(newKelas);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteKelas = async (id) => {
    try {
        const result = await Kelas.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Kelas not deleted';
        }
        return `Kelas ${id} not deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingKelasById = async (id) => {
    try {
        const result = await Kelas.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingKelasByName = async (nama_kelas) => {
    try {
        const result = await Kelas.findOne({ where: { nama_kelas } });
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getAllKelas = async () => {
    try {
        const kelass = await Kelas.findAll();
        return kelass || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
//get kelompok by kelas
// export const getKelompokByKelas = async (id: string): Promise<Array<KelasOutput> | null> => {
//     try {
//         const kelas = await Kelas.findAll({ where: { id: id }, 
//             include: [
//                 {
//                     model: Murid,
//                     as: 'murid',
//                     include: [
//                         {
//                             model: Kelompok,
//                             as: 'kelompok',
//                         },
//                     ],
//                 },
//             ] });
//         return kelas || null;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };
export const getKelasByNamaKelas = async (nama_kelas) => {
    try {
        const kelass = await Kelas.findOne({ where: { nama_kelas } });
        return kelass || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
