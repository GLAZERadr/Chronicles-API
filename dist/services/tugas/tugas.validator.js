import * as stringValidators from '../../common/utils/validations/string.validator';
import * as numberValidators from '../../common/utils/validations/number.validator';
export const validateTugas = (newTugas) => {
    validateInstruksiTugas(newTugas.instruksi_tugas);
    validateNilaiKelompok(newTugas.nilai_kelompok);
    validateNilaiSimilaritas(newTugas.nilai_similaritas);
    validateKomentar(newTugas.komentar);
};
export const validateInstruksiTugas = (instruksi_tugas) => {
    stringValidators.throwExeptionIfEmptyString(instruksi_tugas, 'Instruksi tugas cannot be empty');
    stringValidators.throwExceptionIfMinLength(instruksi_tugas, 10, 'Instruksi tugas must be more than 10 characters');
    stringValidators.throwExceptionIfMaxLength(instruksi_tugas, 50, 'Instruksi tugas must be less than 50 character');
};
export const validateNilaiKelompok = (nilai_kelompok) => {
    numberValidators.throwExceptionIfNotNumber(nilai_kelompok, 'Nilai kelompok cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_kelompok, 0, 'Nilai kelompok must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_kelompok, 100, 'Nilai kelompok must be less than 100');
};
export const validateNilaiSimilaritas = (nilai_similaritas) => {
    numberValidators.throwExceptionIfNotNumber(nilai_similaritas, 'Nilai simllaritas cannot be empty');
    numberValidators.throwExceptionIfNumberLessThan(nilai_similaritas, 0, 'Nilai simllaritas must be greater than 0');
    numberValidators.throwExceptionIfNumberGreaterThan(nilai_similaritas, 100, 'Nilai simllaritas must be less than 100');
};
export const validateKomentar = (komentar) => {
    stringValidators.throwExeptionIfEmptyString(komentar, 'Komentar cannot be empty');
    stringValidators.throwExceptionIfMinLength(komentar, 10, 'Komentar must be more than 10 characters');
};
