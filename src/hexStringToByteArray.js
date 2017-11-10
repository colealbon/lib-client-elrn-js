export default function hexStringToByteArray(str) {
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
    return (!str) ?
    Promise.reject(new Error('called hexStringToByteArray with no param')) :
    new Promise((resolve, reject) => {
        try {
            var bytes = [];
            var i = 0;
            if (0 !== str.length % 2) {
                bytes.push(charToNibble[str[0]]);
                ++i;
            }
            for (; i < str.length - 1; i += 2)
                bytes.push((charToNibble[str[i]] << 4) + charToNibble[
                    str[i + 1]]);
            resolve(bytes);
        } catch (err) {
            reject(err);
        }
    })
}
