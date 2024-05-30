import * as stringValidator from '../../common/utils/validations/string.validator';
export const validateLogin = (loginRequest) => {
    validateUsername(loginRequest.username);
    validatePassword(loginRequest.password);
};
export const validateUsername = (username) => {
    stringValidator.throwExeptionIfEmptyString(username, 'username is required');
};
export const validatePassword = (password) => {
    stringValidator.throwExeptionIfEmptyString(password, 'password is required');
};
