import * as stringValidators from '../../common/utils/validations/string.validator';
export const validateKelas = (newKelas) => {
    validateNamaKelas(newKelas.nama_kelas);
};
export const validateNamaKelas = (nama_kelas) => {
    stringValidators.throwExeptionIfEmptyString(nama_kelas, 'Nama kelas cannot be empty');
    stringValidators.throwExceptionIfMinLength(nama_kelas, 3, 'Nama kelas must be at least 3 characters long');
};
