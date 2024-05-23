import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";

interface KelompokAttributes {
    id: string,
    no_kelompok: number,
    nama_kelompok: string,
    status: string,
    ketua: string,
}

export interface KelompokInput extends KelompokAttributes {};
export interface KelompokOutput extends Model<KelompokAttributes>, KelompokAttributes {};

export class Kelompok extends Model<KelompokAttributes, KelompokInput> implements KelompokAttributes {
    public id!: string;
    public no_kelompok!: number;
    public nama_kelompok!: string;
    public status!: string;
    public ketua!: string;
};

Kelompok.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        no_kelompok: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)