/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('accountIdToElrnBalance', function() {
    test('accountIdToElrnBalance returns something not undefined', function() {
        const accountId = 'NXT-T32U-S3BT-GSV5-DXNWX';
        return elrnClient.accountIdToElrnBalance(accountId)
        .then(result => assert.notEqual(result, undefined))
    });
});
