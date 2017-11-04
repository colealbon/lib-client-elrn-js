const fetch = require('isomorphic-fetch')

export default function accountIdToAlias(accountId) {
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
                console.log(error);
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
