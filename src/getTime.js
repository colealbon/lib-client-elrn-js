const fetch = require('isomorphic-fetch')

export default function getTime() {
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
