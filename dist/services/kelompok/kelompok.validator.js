import * as stringValidators from '../../common/utils/validations/string.validator';
export const validateKelompok = (newKelompok) => {
    validateNamaKelompok(newKelompok.nama_kelompok);
    validateStatus(newKelompok.status);
};
export const validateNamaKelompok = (nama_kelompok) => {
    stringValidators.throwExeptionIfEmptyString(nama_kelompok, 'Nama kelompok cannot be empty');
    stringValidators.throwExceptionIfMinLength(nama_kelompok, 5, 'Nama kelompok must be at least 5 characters long');
};
export const validateStatus = (status) => {
    stringValidators.throwExeptionIfEmptyString(status, 'Status cannot be empty');
};
