import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Gambar } from "../gambar/gambar";
import { Restory } from "../restory/restory";

interface StoryAttributes {
    id: string,
    id_tugas: string,
    judul: string
    orientation: string,
    complication: string,
    resolution: string,
    reorientation: string,
    kode_kelompok: string
}

export interface StoryInput extends StoryAttributes {};
export interface StoryOutput extends Model<StoryAttributes>, StoryAttributes {};

export class Story extends Model<StoryAttributes, StoryInput> implements StoryAttributes {
    declare id: string;
    declare id_tugas: string;
    declare judul: string;
    declare orientation: string;
    declare complication: string;
    declare resolution: string;
    declare reorientation: string;
    declare kode_kelompok: string;
};

Story.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        id_tugas: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'tugas',
                key: 'id'
            },
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orientation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        complication: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        resolution: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        reorientation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        kode_kelompok: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'kelompok',
                key: 'id',
            },
        },  
    },
    {
        tableName: 'story',
        timestamps: true,
        sequelize: sequalize,
    },
);

Story.hasOne(Gambar, { foreignKey: 'id_story', as: 'story' });
Story.hasOne(Restory, { foreignKey: 'id_story', as: 'real_story' });

sequalize.sync({ force: false })
    .then(() => console.log('Story table created!!!'))
    .catch((error: Error) => console.log('Error creating table story: ', error));