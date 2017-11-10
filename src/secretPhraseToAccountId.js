import secretPhraseToPublicKey from './secretPhraseToPublicKey.js';
import publicKeyToAccountId from './publicKeyToAccountId.js';
var curve25519 = require('./lib/curve25519.js');

export default function secretPhraseToAccountId(secretPhrase) {
    return (!secretPhrase) ?
    Promise.reject(new Error('called secretPhraseToAccountId with no param')) :
    new Promise((resolve, reject) => {
        try {
            secretPhraseToPublicKey(secretPhrase)
            .then((publicKey) => publicKeyToAccountId(publicKey,true))
            .then((accountId) => resolve(accountId))
        } catch (err) {
            reject(err);
        }
    })
};
