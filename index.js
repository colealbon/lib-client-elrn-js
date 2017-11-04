import getTime from './src/getTime.js';

export default class Elrn {
    constructor(options) {
        let defaultOptions = {
            getPrivateKey: () => {},
            ardor_host: '127.0.0.1',
            ardor_port: '000000',
            chain_id: '2'
        };
        this.options = Object.assign(defaultOptions,options);
    }
    getTime () {
        return getTime.apply(this.options);
    }
};
