const fetch = require('isomorphic-fetch')

export function signedTransactionBytesToFullhash(signedTransactionBytes, prunableAttachmentJSON) {

    if(!this.ardor_host) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_port configured'))}
    if(!this.avatar_property_key) {return Promise.reject(new Error('called acountIdToAvatar with no avatar_property_key configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called acountIdToAvatar with no chain_id configured'))}
    if(!signedTransactionBytes) {return Promise.reject(new Error('called signedTransactionBytesToFullhash with no signedTransactionBytes'))}
    if(!prunableAttachmentJSON) {return Promise.reject(new Error('called signedTransactionBytesToFullhash with no prunableAttachmentJSON'))}
    return new Promise((resolve, reject) => {
        try {
            const formData = new FormData()
            formData.append('requestType', 'broadcastTransaction')
            formData.append('transactionBytes', signedTransactionBytes);
            formData.append('prunableAttachmentJSON', prunableAttachmentJSON);
            let request = new XMLHttpRequest();
            request.open('POST', `http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt`);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject(request.statusText);
                }
            };
            request.onerror = () => reject(xhr.statusText);
            request.send(formData);
        } catch (err) {
            reject(err);
        }
    });
}
