import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelompok } from "../kelompok/kelompok";
import { Anggota } from "../kelompok/anggota.kelompok";

interface MuridAttributes {
    id: string,
    username: string,
    password: string,
    nama: string
};

export interface MuridInput extends MuridAttributes {};
export interface MuridOutput extends Model<MuridAttributes>, MuridAttributes {};

export class Murid extends Model<MuridAttributes, MuridInput> implements MuridAttributes {
    public id!: string;
    public username!: string;
    public password!: string;
    public nama!: string;
};

Murid.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'murid',
        timestamps: false,
        sequelize: sequalize,
    },
);

Murid.hasOne(Kelompok, { foreignKey: 'ketua', as: 'ketua' });

sequalize.sync({ force: false })
    .then(() => console.log('Murid table created!!!'))
    .catch((error: Error) => console.log('Error creating table murid: ', error));