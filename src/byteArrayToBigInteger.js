const BigInteger = require('big-integer');

export default function byteArrayToBigInteger(byteArray) {
    return (!byteArray) ?
    Promise.reject(new Error(
        'Called byteArrayToBigInteger without input param')) :
    new Promise((resolve, reject) => {
        try {
            var value = new BigInteger("0", 10);
            var temp1, temp2;
            for (var i = byteArray.length - 1; i >= 0; i--) {
                temp1 = value.multiply(new BigInteger("256", 10));
                temp2 = temp1.add(new BigInteger(byteArray[i].toString(
                    10), 10));
                value = temp2;
            }
            resolve(value);
        } catch (err) {
            reject(err);
        }
    });
}
