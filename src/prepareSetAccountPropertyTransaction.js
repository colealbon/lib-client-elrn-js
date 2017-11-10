const fetch = require('isomorphic-fetch')

export default function prepareSetAccountPropertyTransaction (publisherPublicKey, propertyAccountId, propertyKey, propertyValue) {
    if(!this.ardor_host) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no ardor_port configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no chain_id configured'))}
    if(!publisherPublicKey) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no publisherPublicKey'))}
    if(!propertyAccountId) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction without a propertyAccountId'))}
    if(!propertyKey) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no propertyKey'))}
    if(!propertyValue) {return Promise.reject(new Error('called prepareSetAccountPropertyTransaction with no propertyValue'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=setAccountProperty&chain=${this.chain_id}&publicKey=${publisherPublicKey}&recipient=${propertyAccountId}&property=${propertyKey}&value=${propertyValue}`, {method:'POST'})
            .then((response) => {
                resolve(response.json())
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
