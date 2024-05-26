import { DatabaseException } from "../../../common/exceptions/exceptions";
import { KelasMurid, KelasMuridOutput } from "../../models/kelas/kelas_murid";
import { Murid } from "../../models/murid/murid";

export const createKelasMurid = async (newKelasMurid: KelasMurid): Promise<KelasMuridOutput> => {
    try {
        return await KelasMurid.create(newKelasMurid);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteKelasMurid = async (id_murid: string, id_kelas: string): Promise<string> => {
    try {
        const result = await KelasMurid.destroy({ where: { id_murid: id_murid, id_kelas: id_kelas }});
        if (result === 0) {
            return 'Kelas Murid not deleted';
        }
        return `Kelas ${id_kelas} Murid ${id_murid} not deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getAllMuridByKelas = async (id_kelas: string): Promise<Array<KelasMuridOutput>> => {
    try {
        const kelas_murid =  await KelasMurid.findAll({ where: { id_kelas: id_kelas }, include: { model: Murid }});
        return kelas_murid || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existingKelasMuridById = async (id_kelas: string, id_murid: string): Promise<boolean> => {
    try {
        const result = await KelasMurid.findOne({ where: { id_kelas: id_kelas, id_murid: id_murid } });
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};