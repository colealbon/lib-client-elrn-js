import * as CryptoJS from 'crypto-js';
import byteArrayToWordArray from './byteArrayToWordArray.js';
import wordArrayToByteArrayImpl from './wordArrayToByteArrayImpl.js';

export default function simpleHash(byteArray1, byteArray2) {
    return (!byteArray1) ?
    Promise.reject(new Error('please provide simpleHash at least one byte Array')) :
    new Promise((resolve, reject) => {
        try {
            let sha256 = CryptoJS.algo.SHA256.create();
            byteArrayToWordArray(byteArray1)
            .then((wordArray1) => sha256.update(wordArray1))
            .then(() => {
                return new Promise((resolve, reject) => {
                    try {
                        if (byteArray2) {
                            byteArrayToWordArray(byteArray2)
                            .then((wordArray2) => sha256.update(wordArray2))
                            .then(() => resolve())
                        } else {
                            resolve();
                        }
                    } catch (err) {
                        reject(err);
                    }
                })
            })
            .then(() => sha256.finalize())
            .then((hash) => wordArrayToByteArrayImpl(hash, false))
            .then((byteArrayImpl) => resolve(byteArrayImpl));
        } catch (err) {
            reject(err);
        }
    });
};
