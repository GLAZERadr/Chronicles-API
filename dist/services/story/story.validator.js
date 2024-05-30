import * as stringValidators from '../../common/utils/validations/string.validator';
export const validateStory = (newStory) => {
    validateJudul(newStory.judul);
    validateOrientation(newStory.orientation);
    validateComplication(newStory.complication);
    validateResolution(newStory.resolution);
    validateReorientation(newStory.reorientation);
};
export const validateJudul = (judul) => {
    stringValidators.throwExeptionIfEmptyString(judul, 'Judul cannot be empty');
    stringValidators.throwExceptionIfMinLength(judul, 5, 'Judul must be contain at least 5 letter');
};
export const validateOrientation = (orientation) => {
    stringValidators.throwExeptionIfEmptyString(orientation, 'Orientation cannot be empty');
    stringValidators.throwExceptionIfMinLength(orientation, 5, 'Orientation must be contain at least 5 letter');
};
export const validateComplication = (complication) => {
    stringValidators.throwExeptionIfEmptyString(complication, 'Complication cannot be empty');
    stringValidators.throwExceptionIfMinLength(complication, 5, 'Complication must be contain at least 5 letter');
};
export const validateResolution = (resolution) => {
    stringValidators.throwExeptionIfEmptyString(resolution, 'Resolution cannot be empty');
    stringValidators.throwExceptionIfMinLength(resolution, 5, 'Resolution must be contain at least 5 letter');
};
export const validateReorientation = (reorientation) => {
    stringValidators.throwExeptionIfEmptyString(reorientation, 'Reorientation cannot be empty');
    stringValidators.throwExceptionIfMinLength(reorientation, 5, 'Reorientation must be contain at least 5 letter');
};
