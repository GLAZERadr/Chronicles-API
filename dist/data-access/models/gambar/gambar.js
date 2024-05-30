import { Model, DataTypes } from "sequelize";
import { sequalize } from "../../../common/config/database";
;
;
;
export class Gambar extends Model {
}
;
Gambar.init({
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
}, {
    tableName: 'gambar',
    timestamps: false,
    sequelize: sequalize,
});
sequalize.sync({ force: false })
    .then(() => console.log('Gambar table created!!!'))
    .catch((error) => console.log('Error creating table gambar: ', error));
