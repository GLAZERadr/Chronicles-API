import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Story } from "../story/story";
import { Restory } from "../restory/restory";
;
;
export class Kelompok extends Model {
}
;
Kelompok.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nama_kelompok: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ketua: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anggota1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anggota2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anggota3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anggota4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_kelas: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'kelas',
            key: 'id',
        },
    },
}, {
    tableName: 'kelompok',
    timestamps: true,
    sequelize: sequalize,
});
Kelompok.hasOne(Story, { foreignKey: 'kode_kelompok', as: 'kelompok_story' });
Kelompok.hasOne(Restory, { foreignKey: 'kode_kelompok', as: 'kelompok_restory' });
sequalize.sync({ force: false })
    .then(() => console.log('Kelompok table created!!!'))
    .catch((error) => console.log('Error creating table kelompok: ', error));
