import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Story } from "../story/story";

interface TugasAttributes {
    id: string,
    instruksi_tugas: string,
    nilai_kelompok: number,
    nilai_similaritas:  number,
    komentar: string,
    id_guru: string  
}

export interface TugasInput extends TugasAttributes {};
export interface TugasOutput extends Model<TugasAttributes>, TugasAttributes {};

export class Tugas extends Model<TugasAttributes, TugasInput> implements TugasAttributes {
    declare id: string;
    declare instruksi_tugas: string;
    declare nilai_kelompok: number;
    declare nilai_similaritas: number;
    declare komentar: string;
    declare id_guru: string;
}

Tugas.init(
    {
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false,
        },
        instruksi_tugas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nilai_kelompok: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        nilai_similaritas: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        komentar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_guru: {
            type: DataTypes.STRING(15),
            allowNull: false,
            references: {
                model: 'guru',
                key: 'id'
            },
        },
    },
    {
        tableName: 'tugas',
        timestamps: true,
        sequelize: sequalize,
    },
);

Tugas.hasMany(Story, { foreignKey: 'id_story', as: 'story'});

sequalize.sync({ force: false })
    .then(() => console.log('Tugas table created!!!'))
    .catch((error: Error) => console.log('Error creating table tugas: ', error));