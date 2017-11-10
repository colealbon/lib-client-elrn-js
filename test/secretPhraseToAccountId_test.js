/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;

import secretPhraseToAccountId from '../src/secretPhraseToAccountId.js';

suite('secretPhraseToAccountId', function() {
    test('secretPhraseToAccountId throws error on missing secret phrase', function() {
        return secretPhraseToAccountId().then(result => result)
        .catch(err => assert.equal(err.toString(), 'Error: called secretPhraseToAccountId with no param'));
    });
    test('secretPhraseToAccountId returns a known accountId', function() {
        let secretPhrase = 'swim book position hollow experience grew jump whisper jealous moral neck passion'
        return secretPhraseToAccountId(secretPhrase)
        .then((accountid) => {
            assert.equal(accountid, 'NXT-T32U-S3BT-GSV5-DXNWX');
            return;
        })
        .catch((error) => {
            assert.equal(`unexpected error`, error.toString())
            return;
        })
    })
});
