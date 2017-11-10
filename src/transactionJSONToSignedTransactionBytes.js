import {transactionBytesToSignedTransactionBytes} from './transactionBytesToSignedTransactionBytes.js';

export default function transactionJSONToSignedTransactionBytes (unsignedTransactionJSON, secretPhrase) {
    return (!unsignedTransactionJSON) ?
    Promise.reject(new Error('called signTransactionJSON with no param')):
    new Promise((resolve, reject) => {
        try {
            transactionBytesToSignedTransactionBytes(unsignedTransactionJSON.unsignedTransactionBytes, secretPhrase)
            .then((signedTransactionBytes) => resolve(signedTransactionBytes))
            .catch((err) => console.log(err))
        } catch (err) {
            console.log(err);
            reject(err);
        }
    })
};
