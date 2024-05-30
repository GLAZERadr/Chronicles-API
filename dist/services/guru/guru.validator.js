import * as stringValidators from '../../common/utils/validations/string.validator';
export const validateGuru = (newGuru) => {
    validateUsername(newGuru.username);
    validatePassword(newGuru.password);
};
export const validateUsername = (username) => {
    stringValidators.throwExeptionIfEmptyString(username, 'Username cannot be empty');
    stringValidators.throwExceptionIfMinLength(username, 3, 'Username must be at least 3 characters long');
};
export const validatePassword = (password) => {
    stringValidators.throwExeptionIfEmptyString(password, 'Password cannot be empty');
    stringValidators.throwExceptionIfMinLength(password, 6, 'Password must be at least 8 characters long');
    stringValidators.throwExceptionIfNotContainsLetters(password, 'Password must contain at least one letter');
    stringValidators.throwExceptionIfNotContainsNumbers(password, 'Password must contain at least one number');
    stringValidators.throwExceptionIfNotContainsSpecialCharacters(password, 'Password must contain at least one special character');
};
