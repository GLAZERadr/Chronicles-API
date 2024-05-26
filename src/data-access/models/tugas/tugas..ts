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
    public id!: string;
    public instruksi_tugas!: string;
    public nilai_kelompok!: number;
    public nilai_similaritas!: number;
    public komentar!: string;
    public id_guru!: string;
}

Tugas.init(
    {
        id: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
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