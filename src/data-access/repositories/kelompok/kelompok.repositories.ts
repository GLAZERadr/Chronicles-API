// import { DatabaseException } from "../../../common/exceptions/exceptions";
// import { Kelompok, KelompokOutput } from "../../models/kelompok/kelompok";

// export const createKelompok = async (newKelompok: Kelompok): Promise<KelompokOutput> => {
//     try {
//         return await Kelompok.create(newKelompok);
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const deleteKelompok = async (kode_kelompok: string): Promise<string> => {
//     try {
//         const result = await Kelompok.destroy({ where: { kode_kelompok: kode_kelompok }});
//         if (result === 0) {
//             return 'Kelompok not deleted';
//         }
//         return `Kelompok ${kode_kelompok} is deleted`;
//     } catch (error: any) {
//         throw new DatabaseException(error.message); 
//     }
// };

// export const existingKelompokById = async (kode_kelompok: string): Promise<boolean> => {
//     try {
//         const result = await Kelompok.findByPk(kode_kelompok);
//         return !!result;
//     } catch (error: any) {
//         throw new DatabaseException(error.message); 
//     }
// }

// export const getAllKelompok = async (): Promise<Array<KelompokOutput> | null> => {
//     try {
//         const kelompoks = await Kelompok.findAll();
//         return kelompoks || null;
//     } catch (error: any) {
//         throw new DatabaseException(error.message); 
//     }
// };

// export const getKelompokById = async (kode_kelompok: string): Promise<KelompokOutput | null> => {
//     try {
//         const kelompok = await Kelompok.findByPk(kode_kelompok);
//         return kelompok || null;
//     } catch (error: any) {
//         throw new DatabaseException(error.message); 
//     }
// };

// //get kelompok by kelas