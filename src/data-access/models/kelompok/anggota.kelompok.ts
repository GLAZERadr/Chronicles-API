import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelompok } from "./kelompok";
import { Murid } from "../murid/murid";

interface AnggotaAttributes {
    kode_kelompok: string,
    id_murid: string
};

export interface AnggotaInput extends AnggotaAttributes {};
export interface AnggotaOutput extends Model<AnggotaAttributes>, AnggotaAttributes {};

export class Anggota extends Model<AnggotaAttributes, AnggotaInput> implements AnggotaAttributes {
    declare kode_kelompok: string;
    declare id_murid: string;
};

Anggota.init(
    {
        kode_kelompok: {
            type: DataTypes.STRING,
            // primaryKey: true,
            allowNull: false,
            references: {
                model: 'kelompok',
                key: 'kode_kelompok',
            },
        },
        id_murid: {
            type: DataTypes.STRING,
            // primaryKey: true, 
            allowNull: false,
            references: {
                model: 'murid',
                key: 'id',
            },
        },
    },
    {
        tableName: 'anggota',
        timestamps: false,
        sequelize: sequalize,
    }
);

Kelompok.belongsToMany(Murid, { through: Anggota, foreignKey: 'kode_kelompok', otherKey: 'id_murid', as: 'kelompok' });
Murid.belongsToMany(Kelompok, { through: Anggota, foreignKey: 'id_murid', otherKey: 'kode_kelompok', as: 'anggota_murid' });

sequalize.sync({ force: false })
    .then(() => console.log('Anggota table created!!!'))
    .catch((error: Error) => console.log('Error creating table anggota: ', error));