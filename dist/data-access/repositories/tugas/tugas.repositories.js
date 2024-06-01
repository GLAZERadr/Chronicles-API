"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuruByTugas = exports.existingTugasById = exports.deleteTugas = exports.createTugas = void 0;
const exceptions_1 = require("../../../common/exceptions/exceptions");
const guru_1 = require("../../models/guru/guru");
const tugas_1 = require("../../models/tugas/tugas.");
const createTugas = async (newTugas) => {
    try {
        return await tugas_1.Tugas.create(newTugas);
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.createTugas = createTugas;
const deleteTugas = async (id) => {
    try {
        const result = await tugas_1.Tugas.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Tugas not deleted';
        }
        return `Tugas ${id} is deleted`;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.deleteTugas = deleteTugas;
const existingTugasById = async (id) => {
    try {
        const result = await tugas_1.Tugas.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.existingTugasById = existingTugasById;
const getGuruByTugas = async (id) => {
    try {
        const tugas = await tugas_1.Tugas.findByPk(id, { include: [{ model: guru_1.Guru, as: 'guru' }] });
        return tugas || null;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.getGuruByTugas = getGuruByTugas;
