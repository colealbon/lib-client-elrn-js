export default class Elrn {
    constructor(options) {
        let defaultOptions = {
            getPrivateKey: () => {},
            ardor_host: '127.0.0.1',
            ardor_port: '000000',
            chain_id: '2',
        };
        this.options = Object.assign(defaultOptions,options);
        this.fetch = require('isomorphic-fetch');
    }
    getTime() {
        return new Promise((resolve, reject) => {
            try {
                this.fetch(`http://${this.options.ardor_host}:${this.options.ardor_port}/nxt?requestType=getTime`)
                .then((response) => resolve(response.json()))
                .catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    }
}
