/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('accountIdToTranscript', function() {
    const fetch = require('node-fetch');
    const eltNodeUrl = config.eltNodeUrl;
    const eltAccountId = config.eltAccountId;
    const eltChainId = config.eltChainId;

    test('accountIdToTranscript returns array', function() {
        const expectedResult = 'bigfoot';
        const accountId = 'NXT-T32U-S3BT-GSV5-DXNWX';
        return elrnClient.accountIdToTranscript(accountId)
        .then(result => assert.notEqual(result.data.length, 0))
        .catch(err => assert.equal(err.message, 'hint please?'));
    });
});
