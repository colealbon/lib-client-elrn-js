/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('accountIdToAlias', function() {
    test('accountIdToAlias returns known alias', function() {
        let expectedResult = 'bigfoot';
        return elrnClient.accountIdToAlias('NXT-T32U-S3BT-GSV5-DXNWX')
        .then(result => assert.equal(result, 'bigfoot'))
        .catch(err => {
            console.log(err);
            assert.equal(true, false)
        });
    });
    // test('accountIdToAlias returns nothing if no alias found', function() {
    //     return elrnClient.accountIdToAlias('NXT-000-000-000-000')
    //     .then(result => assert.equal(result, undefined))
    //     .catch(err => assert.equal(true, false));
    // });
});
