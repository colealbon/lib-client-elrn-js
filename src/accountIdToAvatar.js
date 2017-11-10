const fetch = require('isomorphic-fetch')

export default function accountIdToAvatar( accountId ) {
    if(!this.ardor_host) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called acountIdToAvatar with no ardor_port configured'))}
    if(!this.avatar_property_key) {return Promise.reject(new Error('called acountIdToAvatar with no avatar_property_key configured'))}
    if(!this.chain_id) {return Promise.reject(new Error('called acountIdToAvatar with no chain_id configured'))}
    if(!accountId) {return Promise.reject(new Error('called acountIdToAvatar with no accountId'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=getAccountProperties&recipient=${accountId}`)
            .then((response) => response.json())
            .then((result) => {
                return new Promise((resolve, reject) => {
                    try {
                        if (result.properties.length === 0) {
                            reject(new Error(`no properties set for account ${accountId}`));
                        }
                        result.properties.map((property) => {
                            if (property.property == this.avatar_property_key) {
                                resolve(property.value)
                            }
                        })
                    } catch (error) {
                        reject(error)
                    }
                })
            })
            .then((fullHash) => {
                return fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=getTransaction&chain=${this.chain_id}&recipient=${accountId}&fullHash=${fullHash}`)
            })

            .then((response) => response.json())
            .then((response) => resolve(response.attachment))
            .catch(function (error) {
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
