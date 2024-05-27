import { Model,DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelas } from "../kelas/kelas";
import { Tugas } from "../tugas/tugas.";

interface GuruAttributes {
    id: string,
    username: string,
    password: string,
    nama: string
}

export interface GuruInput extends GuruAttributes {}
export interface GuruOutput extends Model<GuruAttributes>, GuruAttributes {}

export class Guru extends Model<GuruAttributes, GuruInput> implements GuruAttributes {
    public id!: string;
    public username!: string;
    public password!: string;
    public nama!: string;
};

Guru.init(
    {
        id: {
            type: DataTypes.STRING(15),
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
        tableName: "guru",
        timestamps: false,
        sequelize: sequalize,
    }
);

Guru.hasMany(Kelas, { foreignKey: 'id_guru', as: 'guru' });
Guru.hasMany(Tugas, { foreignKey: 'id_guru', as: 'tugas_guru' });

sequalize.sync({ force: false })
    .then(() => console.log('Guru table created!!!'))
    .catch((error: Error) => console.log('Error creating table guru:', error))