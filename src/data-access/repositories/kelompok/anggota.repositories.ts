import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Anggota, AnggotaOutput } from "../../models/kelompok/anggota.kelompok";

export const createAnggota = async (newAnggota: Anggota): Promise<AnggotaOutput> => {
    try {
        return await Anggota.create(newAnggota);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteAnggota = async (id_murid: string, kode_kelompok: string): Promise<string> => {
    try {
        const result = await Anggota.destroy({ where: { id_murid: id_murid, kode_kelompok: kode_kelompok }});
        if (result === 0) {
            return 'Anggota not deleted';
        }
        return `Anggota ${id_murid} not deleted from ${kode_kelompok}`;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getAllAnggota = async (): Promise<Array<AnggotaOutput> | null> => {
    try {
        const anggotas = await Anggota.findAll();
        return anggotas;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existAnggotaById = async (id_murid: string, kode_kelompok: string): Promise<boolean> => {
    try {
        const anggota = await Anggota.findOne({ where: {id_murid: id_murid, kode_kelompok: kode_kelompok} })
        return !!anggota;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};