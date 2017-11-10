export default function byteArrayToHexString(bytes) {
    var charToNibble = {};
    var nibbleToChar = [];
    var i;
    for (i = 0; i <= 9; ++i) {
        var character = i.toString();
        charToNibble[character] = i;
        nibbleToChar.push(character);
    }

    for (i = 10; i <= 15; ++i) {
        var lowerChar = String.fromCharCode('a'.charCodeAt(0) + i - 10);
        var upperChar = String.fromCharCode('A'.charCodeAt(0) + i - 10);

        charToNibble[lowerChar] = i;
        charToNibble[upperChar] = i;
        nibbleToChar.push(lowerChar);
    }

    return (!bytes) ?
    Promise.reject(new Error(
        'Called byteArrayToHexString without input param')) :
    new Promise((resolve, reject) => {
        try {
            var str = '';
            for (var i = 0; i < bytes.length; ++i) {
                if (bytes[i] < 0) {
                    bytes[i] += 256;
                }
                str += nibbleToChar[bytes[i] >> 4] + nibbleToChar[bytes[
                    i] & 0x0F];
            }
            resolve(str);
        } catch (err) {
            reject(err);
        }
    })
}
