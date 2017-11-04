/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('getTime', function() {
    test('getTime returns object with time value not undefined', function() {
        return elrnClient.getTime()
        .then(result => assert.notEqual(result.time, undefined))
    });
});
