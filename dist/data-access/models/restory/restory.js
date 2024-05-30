import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
;
;
;
export class Restory extends Model {
}
;
Restory.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_story: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'story',
            key: 'id'
        },
    },
    kode_kelompok: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'kelompok',
            key: 'id',
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
}, {
    tableName: 'restory',
    timestamps: false,
    sequelize: sequalize,
});
sequalize.sync({ force: false })
    .then(() => console.log('Restory table created!!!'))
    .catch((error) => console.log('Error creating table restory: ', error));
