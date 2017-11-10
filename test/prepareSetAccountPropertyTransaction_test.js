/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('prepareSetAccountPropertyTransaction', function() {
    test('prepareSetAccountPropertyTransaction returns a known transaction json', function() {
        const publicKey = '4de2f96aaf8ab20508b9c1265f3efc001c811d8d0bb054bc0b8def3fe62dce08'
        const accountId = 'NXT-T32U-S3BT-GSV5-DXNWX'
        const propertyKey = 'elrn-profile-photo'
        const propertyValue = 'd76be7e2a8589cf83b26231b7471c62e8dd70ab1a992cfb4d42c6da6d054cc78'
        return elrnClient.prepareSetAccountPropertyTransaction( publicKey, accountId, propertyKey, propertyValue )
        .then((result) => {
            assert.deepEqual(result.transactionJSON.senderPublicKey, publicKey);
            return;
        })
        .catch((error) => {
            assert.equal(`unexpected error`, error.toString())
            return;
        })
    })
});
