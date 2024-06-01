import * as stringValidators from '../../common/utils/validations/string.validator';
import * as numberValidators from '../../common/utils/validations/number.validator';
import { TugasInput } from '../../data-access/models/tugas/tugas.';

export const validateTugas = (newTugas: TugasInput): void => {
    validateInstruksiTugas(newTugas.instruksi_tugas);
}

export const validateInstruksiTugas = (instruksi_tugas: string): void => {
    stringValidators.throwExeptionIfEmptyString(instruksi_tugas, 'Instruksi tugas cannot be empty');
    stringValidators.throwExceptionIfMinLength(instruksi_tugas, 10, 'Instruksi tugas must be more than 10 characters');
    stringValidators.throwExceptionIfMaxLength(instruksi_tugas, 50, 'Instruksi tugas must be less than 50 character');
}

export const validateNilaiKelompok = (nilai_kelompok: number): void => {
    numberValidators.throwExceptionIfNotNumber(nilai_kelompok, 'Nilai kelompok cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_kelompok, 0, 'Nilai kelompok must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_kelompok, 100, 'Nilai kelompok must be less than 100');
}

export const validateNilaiSimilaritas = (nilai_similaritas: number): void => {
    numberValidators.throwExceptionIfNotNumber(nilai_similaritas, 'Nilai simllaritas cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_similaritas, 0, 'Nilai simllaritas must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_similaritas, 100, 'Nilai simllaritas must be less than 100');
}

export const validateKomentar = (komentar: string): void => {
    stringValidators.throwExeptionIfEmptyString(komentar, 'Komentar cannot be empty');
    stringValidators.throwExceptionIfMinLength(komentar, 10, 'Komentar must be more than 10 characters');
}