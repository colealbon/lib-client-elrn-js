const fetch = require('isomorphic-fetch');

export default function prepareUploadTaggedDataTransaction(publicKey, data, name) {
    if(!this.ardor_host) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_port configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called acountIdToAvatar with no chain_id configured'))}
    if(!publicKey) {return Promise.reject(new Error('called prepareUploadTaggedDataTransaction with no publicKey'))}
    if(!data) {return Promise.reject(new Error('called prepareUploadTaggedDataTransaction with no data'))}
    if(!name) {return Promise.reject(new Error('called prepareUploadTaggedDataTransaction with no name'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=uploadTaggedData&publicKey=${publicKey}&data=${data}&name=${name}&chain=${this.chain_id}`, {method:'POST'})
            .then((response) => response.json())
            .then((result) => {
                if (result.transactionJSON.attachment.name === undefined) {
                    resolve(undefined);
                    return
                }
                process.nextTick(() => resolve(result))
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
