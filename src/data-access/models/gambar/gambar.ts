import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";

interface GambarAttributes {
    id: string,
    id_story: string,
    url_gambar: string
};

export interface GambarInput extends GambarAttributes {};
export interface GambarOutput extends Model<GambarAttributes>, GambarAttributes {};

export class Gambar extends Model<GambarAttributes, GambarInput> implements GambarAttributes {
    declare id: string;
    declare id_story: string;
    declare url_gambar: string;
};

Gambar.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        id_story: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'story',
                key: 'id',
            },
        },
        url_gambar: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'gambar',
        timestamps: false,
        sequelize: sequalize,
    },
);

sequalize.sync({ force: false })
    .then(() => console.log('Gambar table created!!!'))
    .catch((error: Error) => console.log('Error creating table gambar: ', error));