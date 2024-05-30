import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Kelas } from "../kelas/kelas";
import { Tugas } from "../tugas/tugas.";
export class Guru extends Model {
}
;
Guru.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "guru",
    timestamps: false,
    sequelize: sequalize,
});
Guru.hasMany(Kelas, { foreignKey: 'id_guru', as: 'guru' });
Guru.hasMany(Tugas, { foreignKey: 'id_guru', as: 'tugas_guru' });
sequalize.sync({ force: false })
    .then(() => console.log('Guru table created!!!'))
    .catch((error) => console.log('Error creating table guru:', error));
