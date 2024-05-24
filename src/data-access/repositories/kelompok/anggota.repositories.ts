// import { DatabaseException } from "../../../common/exceptions/exceptions";
// import { Anggota, AnggotaOutput } from "../../models/kelompok/anggota.kelompok";

// export const createAnggota = async (newAnggota: Anggota): Promise<AnggotaOutput> => {
//     try {
//         return await Anggota.create(newAnggota);
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const deleteAnggota = async (id: string): Promise<string> => {
//     try {
//         const result = await Anggota.destroy({ where: { id: id }});
//         if (result === 0) {
//             return 'Anggota not deleted';
//         }
//         return `Anggota ${id} not deleted`;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// export const getAllAnggota = async (): Promise<Array<AnggotaOutput> | null> => {
//     try {
//         const anggotas = await Anggota.findAll();
//         return anggotas;
//     } catch (error: any) {
//         throw new DatabaseException(error.message);
//     }
// };

// // tinggal getAnggotaByKelompok sama existingAnggotaByKelompok