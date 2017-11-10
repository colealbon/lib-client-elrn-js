/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';
const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config)

suite('accountIdToCatalog', function() {
    test('accountIdToCatalog returns goods only for given eltAccountId', function() {
        const accountId = 'NXT-T32U-S3BT-GSV5-DXNWX';
        return elrnClient.accountIdToCatalog(accountId)
        .then(result => {
            result.goods.map((good) => {
                let requestedAccountId = accountId || good.sellerRS;
                assert.equal(good.sellerRS, requestedAccountId)
            })
        })
        .catch(err => assert.equal(true, false));
    });
});
