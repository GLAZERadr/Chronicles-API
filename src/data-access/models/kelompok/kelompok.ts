import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
// import { Murid } from "../murid/murid";
// import { Anggota } from "./anggota.kelompok";
import { Kelas } from "../kelas/kelas";
import { Pertandingan } from "./pertandingan.kelompok";
import { Story } from "../story/story";

interface KelompokAttributes {
    kode_kelompok: string,
    nama_kelompok: string,
    status: string, // re-story or story
    ketua: string,
}

export interface KelompokInput extends KelompokAttributes {};
export interface KelompokOutput extends Model<KelompokAttributes>, KelompokAttributes {};

export class Kelompok extends Model<KelompokAttributes, KelompokInput> implements KelompokAttributes {
    public kode_kelompok!: string;
    public nama_kelompok!: string;
    public status!: string;
    public ketua!: string;
};

Kelompok.init(
    {
        kode_kelompok: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nama_kelompok: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ketua: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'murid',
                key: 'id',
            },
        },
    },
    {
        tableName: 'kelompok',
        timestamps: false,
        sequelize: sequalize,
    },
);

Kelompok.hasOne(Kelas, { foreignKey: 'kode_kelompok', as: 'kelompok' });
Kelompok.hasOne(Story, { foreignKey: 'kode_kelompok', as: 'kelompok_story' });

// Kelompok.hasMany(Pertandingan, { foreignKey: 'kode_kelompok_ganjil', as: 'pertandinganGanjil' });
// Kelompok.hasMany(Pertandingan, { foreignKey: 'kode_kelompok_genap', as: 'pertandinganGenap' });

sequalize.sync({ force: false })
    .then(() => console.log('Kelompok table created!!!'))
    .catch((error: Error) => console.log('Error creating table kelompok: ', error));