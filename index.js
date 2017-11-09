import getTime from './src/getTime.js';
import accountIdToAlias from './src/accountIdToAlias.js';
import accountIdToElrnBalance from './src/accountIdToElrnBalance.js';

export default class Elrn {
    constructor(options) {
        let defaultOptions = {
            getPrivateKey: () => {},
            ardor_host: '127.0.0.1',
            ardor_port: '000000',
            chain_id: '2'
        };
        this.options = Object.call(defaultOptions,options);
    }
    getTime () {
        return getTime.call(this.options);
    }
    accountIdToAlias (accountId) {
        return accountIdToAlias.call(this.options, accountId);
    }
    accountIdToElrnBalance (accountId) {
        return accountIdToElrnBalance.call(this.options, accountId);
    }
};
