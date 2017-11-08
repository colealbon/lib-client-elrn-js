const fetch = require('isomorphic-fetch')

export default function getTime() {
    if(!this.ardor_host) {return Promise.reject(new Error('called getTime with no ardor_host configured'))}
    if(!this.ardor_port) {return Promise.reject(new Error('called getTime with no ardor_port configured'))}
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://${this.ardor_host}:${this.ardor_port}/nxt?requestType=getTime`)
            .then((response) => response.json())
            .then((result) => {
                resolve(result);
            })
            .catch(function (error) {
                reject(error);
            });
        } catch (err) {
            reject(err);
        }
    });
}
