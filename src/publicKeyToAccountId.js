import hexStringToByteArray from './hexStringToByteArray.js';
import simpleHash from './simpleHash.js';
import byteArrayToHexString from './byteArrayToHexString.js';
import byteArrayToBigInteger from './byteArrayToBigInteger.js';
const NxtAddress = require('./lib/nxtaddress.js');

export default function publicKeyToAccountId(publicKey, RSFormat) {
    return (!publicKey) ?
    Promise.reject(new Error(
        'called publicKeyToAccountId with no parameters')) :
    new Promise((resolve, reject) => {
        try {
            hexStringToByteArray(publicKey)
            .then((byteArray) => simpleHash(byteArray))
            .then((account) => byteArrayToHexString(account))
            .then((hexAccount) => hexStringToByteArray(hexAccount))
            .then((slice) => byteArrayToBigInteger(slice.slice(0, 8)))
            .then((accountId) => {
                accountId = accountId.toString()
                if (!RSFormat) resolve(accountId);
                let address = new NxtAddress();
                resolve((address.set(accountId)) ? address.toString() : "");
            });
        } catch (err) {
            reject(err);
        }
    })
};
