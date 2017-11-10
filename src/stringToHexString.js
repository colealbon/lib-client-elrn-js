import byteArrayToHexString from './byteArrayToHexString.js';
import stringToByteArray from './stringToByteArray.js';

export default function stringToHexString(str) {
    return (!str) ?
    Promise.reject(new Error('called stringToHexString with no param')) :
    new Promise((resolve, reject) => {
        try {
            stringToByteArray(str)
            .then((byteArray) => byteArrayToHexString(byteArray))
            .then((hexString) => resolve(hexString))
        } catch (err) {
            reject(err);
        }
    });
};
