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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKomentar = exports.validateNilaiSimilaritas = exports.validateNilaiKelompok = exports.validateInstruksiTugas = exports.validateTugas = void 0;
const stringValidators = __importStar(require("../../common/utils/validations/string.validator"));
const numberValidators = __importStar(require("../../common/utils/validations/number.validator"));
const validateTugas = (newTugas) => {
    (0, exports.validateInstruksiTugas)(newTugas.instruksi_tugas);
};
exports.validateTugas = validateTugas;
const validateInstruksiTugas = (instruksi_tugas) => {
    stringValidators.throwExeptionIfEmptyString(instruksi_tugas, 'Instruksi tugas cannot be empty');
    stringValidators.throwExceptionIfMinLength(instruksi_tugas, 10, 'Instruksi tugas must be more than 10 characters');
    stringValidators.throwExceptionIfMaxLength(instruksi_tugas, 50, 'Instruksi tugas must be less than 50 character');
};
exports.validateInstruksiTugas = validateInstruksiTugas;
const validateNilaiKelompok = (nilai_kelompok) => {
    numberValidators.throwExceptionIfNotNumber(nilai_kelompok, 'Nilai kelompok cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_kelompok, 0, 'Nilai kelompok must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_kelompok, 100, 'Nilai kelompok must be less than 100');
};
exports.validateNilaiKelompok = validateNilaiKelompok;
const validateNilaiSimilaritas = (nilai_similaritas) => {
    numberValidators.throwExceptionIfNotNumber(nilai_similaritas, 'Nilai simllaritas cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_similaritas, 0, 'Nilai simllaritas must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_similaritas, 100, 'Nilai simllaritas must be less than 100');
};
exports.validateNilaiSimilaritas = validateNilaiSimilaritas;
const validateKomentar = (komentar) => {
    stringValidators.throwExeptionIfEmptyString(komentar, 'Komentar cannot be empty');
    stringValidators.throwExceptionIfMinLength(komentar, 10, 'Komentar must be more than 10 characters');
};
exports.validateKomentar = validateKomentar;
