'use strict';
/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;

import secretPhraseToPrivateKey from '../src/secretPhraseToPrivateKey.js';

suite('secretPhraseToPrivateKey', function() {
    test('secretPhraseToPrivateKey throws error on missing secret phrase', function() {
        return secretPhraseToPrivateKey()
        .then(result => result)
        .catch(err => assert.equal(err.toString(), 'Error: called secretPhraseToPrivateKey without a parameter'));
    });
    test('secretPhraseToPrivateKey returns a known PrivateKey', function() {
        let secretPhrase = 'swim book position hollow experience grew jump whisper jealous moral neck passion'
        return secretPhraseToPrivateKey(secretPhrase)
        .then((PrivateKey) => {
            assert.equal(PrivateKey, '30ad7bf3da884a7c13197ed7253d6186a10cd5cb1cf33c2255d7a470a2f6c84b');
            return;
        })
        .catch((error) => {
            assert.equal(`unexpected error`, error.toString())
            return;
        })
    })
});
