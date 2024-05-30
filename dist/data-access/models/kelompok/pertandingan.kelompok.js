import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelompok } from "./kelompok";
;
;
export class Pertandingan extends Model {
}
Pertandingan.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    kode_kelompok_ganjil: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Kelompok,
            key: 'id',
        }
    },
    kode_kelompok_genap: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Kelompok,
            key: 'id',
        }
    },
}, {
    tableName: 'pertandingan',
    timestamps: true,
    sequelize: sequalize,
});
Pertandingan.belongsTo(Kelompok, { foreignKey: 'kode_kelompok_ganjil', as: 'kelompokGanjil' });
Pertandingan.belongsTo(Kelompok, { foreignKey: 'kode_kelompok_genap', as: 'kelompokGenap' });
sequalize.sync({ force: false })
    .then(() => console.log('Pertandingan table created!!'))
    .catch((error) => console.log('Error creating table pertandingan: ', error));
