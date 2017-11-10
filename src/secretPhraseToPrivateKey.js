import simpleHash from './simpleHash.js';
import shortArrayToHexString from './shortArrayToHexString.js';
import stringToByteArray from './stringToByteArray.js';
import byteArrayToShortArray from './byteArrayToShortArray.js';
import {curve25519_clamp} from './lib/curve25519_clamp.js';

export default function secretPhraseToPrivateKey (secretPhrase) {
     return (!secretPhrase) ?
     Promise.reject(new Error('called secretPhraseToPrivateKey without a parameter')):
     new Promise((resolve, reject) => {
        try {
            stringToByteArray(secretPhrase)
            .then((byteArray) => simpleHash(byteArray))
            .then((bytes) => byteArrayToShortArray(bytes))
            .then((shortArray) => curve25519_clamp(shortArray))
            .then((shortArray) => shortArrayToHexString(shortArray))
            .then((hexString) => resolve(hexString));
        } catch (err) {
            reject(err);
        }
     })
 }
