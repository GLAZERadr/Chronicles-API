import { Model, DataTypes } from "sequelize"
import { sequalize } from "../../../common/config/database"
import { Kelas } from "./kelas";
import { Murid } from "../murid/murid";

interface KelasMuridAttributes {
    id_kelas: string,
    id_murid: string
};

export interface KelasMuridInput extends KelasMuridAttributes {};
export interface KelasMuridOutput extends Model<KelasMuridAttributes>, KelasMuridAttributes {};

export class KelasMurid extends Model<KelasMuridAttributes, KelasMuridInput> implements KelasMuridAttributes {
    public id_kelas!: string;
    public id_murid!: string;
};

KelasMurid.init(
    {
        id_kelas: {
            type: DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'kelas',
                key: "id_kelas",
            },
        },
        id_murid: {
            type: DataTypes.STRING(915),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'murid',
                key: "id_murid",
            },
        },
    },
    {
        tableName: 'kelas_murid',
        timestamps: false,
        sequelize: sequalize,
    },
);

Kelas.belongsToMany(Murid, { through: KelasMurid, foreignKey: 'id_kelas', otherKey: 'id_murid', as: 'kelas' });
Murid.belongsToMany(Kelas, { through: KelasMurid, foreignKey: 'id_murid', otherKey: 'id_kelas', as: 'murid' });

sequalize.sync({ force: false })
    .then(() => console.log('Kelas murid table created!!!'))
    .catch((error: Error) => console.log('Error creating table kelas murid: ', error));