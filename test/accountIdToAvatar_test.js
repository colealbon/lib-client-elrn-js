/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('accountIdToAvatar', function() {
    test('accountIdToAvatar returns known avatar', function() {
        return elrnClient.accountIdToAvatar( 'NXT-T32U-S3BT-GSV5-DXNWX' )
        .then((result) => {
            return assert.equal(result.name, config.avatar_property_key)
        })
    });
});
