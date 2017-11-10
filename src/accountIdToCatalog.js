const fetch = require('isomorphic-fetch')

export default function accountIdToCatalog(accountId) {
    if(!this.ardor_host) {return Promise.reject(new Error('called acountIdToCatalog with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called acountIdToCatalog with no ardor_port configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called acountIdToCatalog with no ardor_port configured'))}
    return new Promise((resolve, reject) => {
        try {
            let sellerFilter = (accountId) ? `&seller=${accountId}` : '' ;
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=getDGSGoods&chain=${this.chain_id}${sellerFilter}`)
            .then((response) => response.json())
            .then((result) => resolve(result))
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
