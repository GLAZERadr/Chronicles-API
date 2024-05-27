import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";

interface RestoryAttributes {
    id: string,
    id_story: string,
    kode_kelompok: string,
    judul: string
    orientation: string,
    complication: string,
    resolution: string,
    reorientation: string
};

export interface RestoryInput extends RestoryAttributes {};
export interface RestoryOutput extends Model<RestoryAttributes>, RestoryAttributes {};

export class Restory extends Model<RestoryAttributes, RestoryInput> implements RestoryAttributes {
    public id!: string;
    public id_story!: string;
    public kode_kelompok!: string;
    public judul!: string;
    public orientation!: string;
    public complication!: string;
    public resolution!: string;
    public reorientation!: string;
};

Restory.init(
    {
        id: {
            type: DataTypes.STRING(15),
            primaryKey: true,
            allowNull: false
        },
        id_story: {
            type: DataTypes.STRING(15),
            allowNull: false,
            references: {
                model: 'story',
                key: 'id'
            },
        },
        kode_kelompok: {
            type: DataTypes.STRING(15),
            allowNull: false,
            references: {
                model: 'kelompok',
                key: 'kode_kelompok',
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
    },
    {
        tableName: 'restory',
        timestamps: false,
        sequelize: sequalize,
    },
);

sequalize.sync({ force: false })
    .then(() => console.log('Restory table created!!!'))
    .catch((error: Error) => console.log('Error creating table restory: ', error));