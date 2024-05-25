import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Guru } from "../guru/guru";
import { Kelompok } from "../kelompok/kelompok";

interface KelasAttributes {
    id: string,
    kode_kelompok: string,
    nama_kelas: string,
    id_guru: string
};

export interface KelasInput extends KelasAttributes {};
export interface KelasOutput extends Model<KelasAttributes>, KelasAttributes {};

export class Kelas extends Model<KelasAttributes, KelasInput> implements KelasAttributes {
    public id!: string;
    public kode_kelompok!: string;
    public nama_kelas!: string;
    public id_guru!: string;
};

Kelas.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        kode_kelompok: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'kelompok',
                key: 'kode_kelompok',
            },
        },
        nama_kelas: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id_guru: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'guru',
                key: 'id',
            },
        },
    },
    {
        tableName: 'kelas',
        timestamps: false,
        sequelize: sequalize,
    },
);

// Kelas.hasOne(Guru, { foreignKey: 'id_guru', as: 'guru' });
// Kelas.hasMany(Kelompok, { foreignKey: 'kode_kelompok', as: 'kelompok' });

sequalize.sync({ force: false })
    .then(() => console.log('Kelas table created!!!'))
    .catch((error: Error) => console.log('Error creating table kelas: ', error));