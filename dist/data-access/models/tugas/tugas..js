import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Story } from "../story/story";
;
;
export class Tugas extends Model {
}
Tugas.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    instruksi_tugas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nilai_kelompok: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    nilai_similaritas: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    komentar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_guru: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'guru',
            key: 'id'
        },
    },
}, {
    tableName: 'tugas',
    timestamps: true,
    sequelize: sequalize,
});
Tugas.hasMany(Story, { foreignKey: 'id_story', as: 'story' });
sequalize.sync({ force: false })
    .then(() => console.log('Tugas table created!!!'))
    .catch((error) => console.log('Error creating table tugas: ', error));
