"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tugasRouter = void 0;
const express_1 = __importDefault(require("express"));
const tugasController = __importStar(require("../controllers/tugas/tugas.controllers"));
const auth_middlewares_1 = require("../common/middlewares/auth.middlewares");
exports.tugasRouter = express_1.default.Router();
exports.tugasRouter.get('/get/guru/:id', auth_middlewares_1.verifyJWTToken, tugasController.getGuruByTugas);
exports.tugasRouter.post('/post', auth_middlewares_1.verifyJWTToken, tugasController.createTugas);
exports.tugasRouter.post('/post/:id/grading/:id_story', auth_middlewares_1.verifyJWTToken, tugasController.gradingStory);
exports.tugasRouter.delete('/delete', auth_middlewares_1.verifyJWTToken, tugasController.deleteTugas);
exports.tugasRouter.patch('/update/nilai-komentar/:id', auth_middlewares_1.verifyJWTToken, tugasController.updateNilaiAndKomentar);
