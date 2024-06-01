"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existingPertandinganByid = exports.getStoryFromKelompokByPertandingan = exports.getKelompokByPertandingan = exports.deletePertandingan = exports.createPertandingan = void 0;
const exceptions_1 = require("../../../common/exceptions/exceptions");
const kelompok_1 = require("../../models/kelompok/kelompok");
const pertandingan_kelompok_1 = require("../../models/kelompok/pertandingan.kelompok");
const story_1 = require("../../models/story/story");
const createPertandingan = async (newPertandingan) => {
    try {
        return await pertandingan_kelompok_1.Pertandingan.create(newPertandingan);
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.createPertandingan = createPertandingan;
const deletePertandingan = async (id) => {
    try {
        const result = await pertandingan_kelompok_1.Pertandingan.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Pertandingan not deleted';
        }
        return `Pertandingan ${id} not deleted`;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.deletePertandingan = deletePertandingan;
const getKelompokByPertandingan = async (id) => {
    try {
        const pertandingan = await pertandingan_kelompok_1.Pertandingan.findByPk(id, { include: kelompok_1.Kelompok });
        return pertandingan || null;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.getKelompokByPertandingan = getKelompokByPertandingan;
const getStoryFromKelompokByPertandingan = async (id) => {
    try {
        const pertandingan = await pertandingan_kelompok_1.Pertandingan.findByPk(id, {
            include: [
                {
                    model: kelompok_1.Kelompok,
                    include: [story_1.Story],
                },
            ],
        });
        return pertandingan;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.getStoryFromKelompokByPertandingan = getStoryFromKelompokByPertandingan;
const existingPertandinganByid = async (id) => {
    try {
        const result = await pertandingan_kelompok_1.Pertandingan.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.existingPertandinganByid = existingPertandinganByid;
