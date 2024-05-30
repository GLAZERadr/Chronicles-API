import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelompok } from "../kelompok/kelompok";
;
;
;
export class Kelas extends Model {
}
;
Kelas.init({
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
}, {
    tableName: 'kelas',
    timestamps: false,
    sequelize: sequalize,
});
Kelas.hasMany(Kelompok, { foreignKey: 'id_kelas', as: 'kelompok_kelas' });
sequalize.sync({ force: false })
    .then(() => console.log('Kelas table created!!!'))
    .catch((error) => console.log('Error creating table kelas: ', error));
