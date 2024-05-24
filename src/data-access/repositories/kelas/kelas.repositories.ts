// import { DatabaseException } from "../../../common/exceptions/exceptions";
// import { Kelas, KelasOutput } from "../../models/kelas/kelas";

// export const createKelas = async (newKelas: Kelas): Promise<KelasOutput> => {
//     try {
//         return await Kelas.create(newKelas);
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const deleteKelas = async (id: string): Promise<string> => {
//     try {
//         const result = await Kelas.destroy({ where: { id: id }});
//         if (result === 0) {
//             return 'Kelas not deleted';
//         }
//         return `Kelas ${id} not deleted`;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const existingKelasById = async (id: string): Promise<boolean> => {
//     try {
//         const result = await Kelas.findByPk(id);
//         return !!result;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const existingKelasByName = async (nama_kelas: string): Promise<boolean> => {
//     try {
//         const result = await Kelas.findOne({ where: { nama_kelas }});
//         return !!result;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const getAllKelas = async (): Promise<Array<KelasOutput> | null> => {
//     try {
//         const kelass = await Kelas.findAll();
//         return kelass || null;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// //get kelas by guru