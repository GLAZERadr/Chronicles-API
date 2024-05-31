import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Guru } from "../../models/guru/guru";
import { Kelas } from "../../models/kelas/kelas";
export const createGuru = async (newGuru) => {
    try {
        return await Guru.create(newGuru);
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const deleteGuru = async (id) => {
    try {
        const result = await Guru.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Guru not deleted';
        }
        return `Guru ${id} is deleted`;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingGuruById = async (id) => {
    try {
        const result = await Guru.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const existingGuruByUsername = async (username) => {
    try {
        const result = await Guru.findOne({ where: { username } });
        return !!result;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getGuruByUsername = async (username) => {
    try {
        const guru = await Guru.findOne({ where: { username } });
        return guru || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getGuruById = async (id) => {
    try {
        const guru = await Guru.findByPk(id);
        return guru || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getAllGuru = async () => {
    try {
        const gurus = await Guru.findAll();
        return gurus || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
export const getGuruByUsernameAndPass = async (username, password) => {
    try {
        const guru = await Guru.findOne({ where: { username, password } });
        return guru || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
// get kelas by guru
export const getKelasByGuru = async (id) => {
    try {
        const kelas_by_guru = await Guru.findByPk(id, { include: [{ model: Kelas, as: 'guru' }] });
        return kelas_by_guru || null;
    }
    catch (error) {
        throw new DatabaseException(error.message);
    }
};
// export const getKelasByGuru = async (id: string): Promise<Array<KelasOutput> | null> => {
//     try {
//         const kelas_by_guru = await Kelas.findAll({
//             where: { 
//                 id_guru: id
//              },
//              include: [{
//                 model: Guru,
//                 as: 'guru',
//              }]
//         })
//         return kelas_by_guru || null;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };
