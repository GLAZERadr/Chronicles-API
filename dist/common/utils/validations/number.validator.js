import { ElementInvalidException } from '../../exceptions/exceptions';
export const throwExceptionIfNumberLessThan = (val, min, message) => {
    if (val < min) {
        throw new ElementInvalidException(message);
    }
};
export const throwExceptionIfNumberGreaterThan = (val, max, message) => {
    if (val > max) {
        throw new ElementInvalidException(message);
    }
};
export const throwExceptionIfNotNumber = (val, message) => {
    if (!val || isNaN(val)) {
        throw new ElementInvalidException(message);
    }
};
