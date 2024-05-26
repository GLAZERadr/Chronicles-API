import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";

interface KelasAttributes {
    id: string,
    nama_kelas: string,
    id_guru: string
};

export interface KelasInput extends KelasAttributes {};
export interface KelasOutput extends Model<KelasAttributes>, KelasAttributes {};

export class Kelas extends Model<KelasAttributes, KelasInput> implements KelasAttributes {
    public id!: string;
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

sequalize.sync({ force: false })
    .then(() => console.log('Kelas table created!!!'))
    .catch((error: Error) => console.log('Error creating table kelas: ', error));