/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;

import secretPhraseToPublicKey from '../src/secretPhraseToPublicKey.js';

suite('secretPhraseToPublicKey', function() {
    test('secretPhraseToPublicKey throws error on missing secret phrase', function() {
        return secretPhraseToPublicKey()
        .then(result => result)
        .catch(err => assert.equal(err.toString(), 'Error: called secretPhraseToPublicKey with no param'));
    });
    test('secretPhraseToPublicKey returns a known public key', function() {
        let secretPhrase = 'swim book position hollow experience grew jump whisper jealous moral neck passion'
        return secretPhraseToPublicKey(secretPhrase)
        .then((accountid) => {
            assert.equal(accountid, '4de2f96aaf8ab20508b9c1265f3efc001c811d8d0bb054bc0b8def3fe62dce08');
            return;
        })
        .catch((error) => {
            assert.equal(`unexpected error`, error.toString())
            return;
        })
    })
});
