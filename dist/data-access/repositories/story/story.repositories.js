"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGambar = exports.existingStoryById = exports.existJudulOfStory = exports.getKelompokByStory = exports.deleteStory = exports.createStory = void 0;
const exceptions_1 = require("../../../common/exceptions/exceptions");
const kelompok_1 = require("../../models/kelompok/kelompok");
const story_1 = require("../../models/story/story");
const createStory = async (newStory) => {
    try {
        return await story_1.Story.create(newStory);
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.createStory = createStory;
const deleteStory = async (id) => {
    try {
        const result = await story_1.Story.destroy({ where: { id: id } });
        if (result === 0) {
            return 'Story not deleted';
        }
        return `Story ${id} is deleted`;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.deleteStory = deleteStory;
const getKelompokByStory = async (id) => {
    try {
        const story = await story_1.Story.findByPk(id, { include: kelompok_1.Kelompok });
        return story || null;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.getKelompokByStory = getKelompokByStory;
const existJudulOfStory = async (judul) => {
    try {
        const result = await story_1.Story.findOne({ where: { judul: judul } });
        return !!result;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.existJudulOfStory = existJudulOfStory;
const existingStoryById = async (id) => {
    try {
        const result = await story_1.Story.findByPk(id);
        return !!result;
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.existingStoryById = existingStoryById;
const updateGambar = async (id, url_gambar) => {
    try {
        await story_1.Story.update({ url_gambar: url_gambar }, { where: { id: id } });
        return await story_1.Story.findByPk(id);
    }
    catch (error) {
        throw new exceptions_1.DatabaseException(error.message);
    }
};
exports.updateGambar = updateGambar;
