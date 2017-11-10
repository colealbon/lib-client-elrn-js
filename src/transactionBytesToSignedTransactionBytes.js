import stringToHexString from './stringToHexString.js';
import signBytes from './signBytes.js';

export default function transactionBytesToSignedTransactionBytes (unsignedTransactionBytes, secretPhrase) {
    return (!unsignedTransactionBytes) ?
    Promise.reject(new Error('called transactionBytesToSignedTransactionBytes with no param')):
    new Promise((resolve, reject) => {
        try {
            stringToHexString(secretPhrase)
            .then((hexString) => signBytes(unsignedTransactionBytes, hexString))
            .then((signature) => {
                let sigPos = 2 * 69; // 2 * (bytes before signature from TransactionImpl newTransactionBuilder())
                let sigLen = 2 * 64;
                resolve(unsignedTransactionBytes.substr(0, sigPos) + signature + unsignedTransactionBytes.substr(sigPos + sigLen))
            })
            .catch((err) => console.log(err))
        } catch (err) {
            console.log(err);
            reject(err);
        }
    })
};
