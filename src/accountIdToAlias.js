const fetch = require('isomorphic-fetch')

export default function accountIdToAlias(accountId) {
    if(!this.ardor_host) {return Promise.reject(new Error('called accountIdToAlias with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called acountIdToAlias with no ardor_port configured'))}
    if(!accountId) {return Promise.reject(new Error('called accountIdToAlias with no accountId'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?=%2Fnxt&requestType=getAliases&chain=${this.chain_id}&account=${accountId}`)
            .then((response) => response.json())
            .then((result) => {
                if (result.aliases === undefined) {
                    resolve(undefined);
                }
                if (result.aliases.length === 0) {
                    resolve(undefined);
                }
                process.nextTick(() => resolve(result.aliases[0].aliasName))
            })
            .catch(function (error) {
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
