import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Story } from "../story/story";
import { Restory } from "../restory/restory";
import { KelasMurid } from "../kelas/kelas_murid";

interface KelompokAttributes {
    kode_kelompok: string,
    nama_kelompok: string,
    status: string, // re-story or story
    ketua: string,
}

export interface KelompokInput extends KelompokAttributes {};
export interface KelompokOutput extends Model<KelompokAttributes>, KelompokAttributes {};

export class Kelompok extends Model<KelompokAttributes, KelompokInput> implements KelompokAttributes {
    declare kode_kelompok: string;
    declare nama_kelompok: string;
    declare status: string;
    declare ketua: string;
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
            allowNull: true,
            references: {
                model: 'murid',
                key: 'id',
            },
        },
    },
    {
        tableName: 'kelompok',
        timestamps: true,
        sequelize: sequalize,
    },
);

Kelompok.hasOne(Story, { foreignKey: 'kode_kelompok', as: 'kelompok_story' });
Kelompok.hasOne(Restory, { foreignKey: 'kode_kelompok', as: 'kelompok_restory' })

sequalize.sync({ force: false })
    .then(() => console.log('Kelompok table created!!!'))
    .catch((error: Error) => console.log('Error creating table kelompok: ', error));