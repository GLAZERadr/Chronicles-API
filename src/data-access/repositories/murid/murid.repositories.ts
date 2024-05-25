import { DatabaseException } from "../../../common/exceptions/exceptions";
import { Murid, MuridOutput } from "../../models/murid/murid";

export const createMurid = async (newMurid: Murid): Promise<MuridOutput> => {
    try {
        return await Murid.create(newMurid);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const deleteMurid = async (id: string): Promise<string> => {
    try {
        const result = await Murid.destroy({ where: { id: id }});
        if (result === 0) {
            return 'Murid not deleted';
        }
        return `Murid ${id} is deleted`;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existingMuridById = async (id: string): Promise<boolean> => {
    try {
        const result = await Murid.findByPk(id);
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const existingMuridByUsername = async (username: string): Promise<boolean> => {
    try {
        const result = await Murid.findOne({ where: { username: username }});
        return !!result;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getMuridByUsername = async (username: string): Promise<MuridOutput | null> => {
    try {
        const murid = await Murid.findOne({ where: { username: username }});
        return murid || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};
export const getMuridById = async (id: string): Promise<MuridOutput | null> => {
    try {
        const murid = await Murid.findByPk(id);
        return murid || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getAllMurid = async (): Promise<Array<MuridOutput> | null> => {
    try {
        const murids = await Murid.findAll();
        return murids || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

export const getMuridByUsernameAndPass = async (username: string, password: string): Promise<MuridOutput | null> => {
    try {
        const murid = await Murid.findOne({ where: { username, password } });
        return murid || null;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};