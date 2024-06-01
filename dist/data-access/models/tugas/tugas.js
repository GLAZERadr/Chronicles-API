"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tugas = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../common/config/database");
const story_1 = require("../story/story");
const restory_1 = require("../restory/restory");
;
;
class Tugas extends sequelize_1.Model {
}
exports.Tugas = Tugas;
Tugas.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    instruksi_tugas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nilai_kelompok: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    nilai_similaritas: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true,
    },
    komentar: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    id_guru: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'guru',
            key: 'id'
        },
    },
}, {
    tableName: 'tugas',
    timestamps: true,
    sequelize: database_1.sequalize,
});
Tugas.hasMany(story_1.Story, { foreignKey: 'id_story', as: 'story' });
Tugas.hasMany(restory_1.Restory, { foreignKey: 'id_restory', as: 'restory ' });
database_1.sequalize.sync({ force: false })
    .then(() => console.log('Tugas table created!!!'))
    .catch((error) => console.log('Error creating table tugas: ', error));
