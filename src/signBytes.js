import {hexStringToByteArray} from './hexStringToByteArray.js';
import {simpleHash} from './simpleHash.js';
import {byteArrayToHexString} from './byteArrayToHexString.js';

export default function signBytes (message, secretPhrase) {
    return (!message || !secretPhrase) ?
        Promise.reject(new Error('called signBytes without proper parameter')):
    new Promise((resolve, reject) => {
        try {
            hexStringToByteArray(message)
            .then((messageBytes) => {
                hexStringToByteArray(secretPhrase)
                .then((secretPhraseBytes) => {
                    let curve25519 = require('./lib/curve25519.js');
                    simpleHash(secretPhraseBytes)
                    .then((digest) => {
                        let s = curve25519.keygen(digest).s;
                        simpleHash(messageBytes)
                        .then((m) => {
                            simpleHash(m, s)
                            .then((x) => {
                                let y = curve25519.keygen(x).p;
                                simpleHash(m, y)
                                .then((h) => {
                                    let v = curve25519.sign(h, x, s);
                                    byteArrayToHexString(v.concat(h))
                                    .then((hexString) => resolve (hexString));
                                });
                            });
                        });

                    });
                })
            })
        }catch(err) {
            reject(err);
        }
    });
};
