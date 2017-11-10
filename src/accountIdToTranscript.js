const fetch = require('isomorphic-fetch')

export default function accountIdToTranscript(accountId) {
    if(!this.ardor_host) {return Promise.reject(new Error('called accountIdToTranscript with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called accountIdToTranscript with no ardor_port configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called accountIdToTranscript with no chain_id configured'))}
    if(!accountId) {return Promise.reject(new Error('called accountIdToTranscript with no accountId'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=getAccountTaggedData&chain=${this.chain_id}&account=${accountId}`)
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
