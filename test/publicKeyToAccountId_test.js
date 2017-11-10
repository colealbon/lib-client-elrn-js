'use strict';
/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;

import publicKeyToAccountId from '../src/publicKeyToAccountId.js';

suite('publicKeyToAccountId', function() {
    test('publicKeyToAccountId throws error on missing parameters',
        function() {
            return publicKeyToAccountId()
            .then(result => result)
            .catch(err => assert.equal(err.toString(),
                'Error: called publicKeyToAccountId with no parameters'
            ));
        });
    test(
        'publicKeyToAccountId returns a known accountid with RSFormat = true',
        function() {
            let publicKey = '4de2f96aaf8ab20508b9c1265f3efc001c811d8d0bb054bc0b8def3fe62dce08'
            return publicKeyToAccountId(publicKey, true)
            .then((accountid) => {
                assert.equal(accountid,
                    'NXT-T32U-S3BT-GSV5-DXNWX');
                return;
            })
            .catch((error) => {
                assert.equal(`unexpected error`, error.toString())
                return;
            })
        })
    test(
        'publicKeyToAccountId returns a known accountid with RSFormat = false',
        function() {
            let publicKey = '4de2f96aaf8ab20508b9c1265f3efc001c811d8d0bb054bc0b8def3fe62dce08'
            return publicKeyToAccountId(publicKey, false)
            .then((accountid) => {
                assert.equal(accountid,
                    '13759233260932334618');
                return;
            })
            .catch((error) => {
                assert.equal(`unexpected error`, error.toString())
                return;
            })
        }
    )
});
