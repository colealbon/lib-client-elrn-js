import stringToHexString from './stringToHexString.js';
import byteArrayToHexString from './byteArrayToHexString.js';
import hexStringToByteArray from './hexStringToByteArray.js';
import simpleHash from './simpleHash.js';
var curve25519 = require('./lib/curve25519.js');

export default function secretPhraseToPublicKey(secretPhrase) {
    return (!secretPhrase) ?
    Promise.reject(new Error('called secretPhraseToPublicKey with no param')) :
    new Promise((resolve, reject) => {
        try {
            stringToHexString(secretPhrase)
            .then((hexedSecretPhrase) => hexStringToByteArray(hexedSecretPhrase))
            .then((secretPhraseBytes) => simpleHash(secretPhraseBytes))
            .then((digest) => byteArrayToHexString(curve25519.keygen(digest).p))
            .then((publicKey) => resolve(publicKey))
        } catch (err) {
            reject(err);
        }
    })
};
