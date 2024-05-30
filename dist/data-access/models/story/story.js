import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
import { Gambar } from "../gambar/gambar";
import { Restory } from "../restory/restory";
;
;
export class Story extends Model {
}
;
Story.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    id_tugas: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'tugas',
            key: 'id'
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
    kode_kelompok: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'kelompok',
            key: 'id',
        },
    },
}, {
    tableName: 'story',
    timestamps: true,
    sequelize: sequalize,
});
Story.hasOne(Gambar, { foreignKey: 'id_story', as: 'story' });
Story.hasOne(Restory, { foreignKey: 'id_story', as: 'real_story' });
sequalize.sync({ force: false })
    .then(() => console.log('Story table created!!!'))
    .catch((error) => console.log('Error creating table story: ', error));
