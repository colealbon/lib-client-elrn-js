export default function shortArrayToHexString (ary) {
    return(!ary) ?
    Promise.reject(new Error ('Please provide a valid input array')):
    new Promise((resolve, reject) => {
        try {
            let str = '';
            let charToNibble = {};
            let nibbleToChar = [];
            let i;
            for (i = 0; i <= 9; ++i) {
                let character = i.toString();
                charToNibble[character] = i;
                nibbleToChar.push(character);
            }

            for (i = 10; i <= 15; ++i) {
                let lowerChar = String.fromCharCode('a'.charCodeAt(0) + i - 10);
                let upperChar = String.fromCharCode('A'.charCodeAt(0) + i - 10);
                charToNibble[lowerChar] = i;
                charToNibble[upperChar] = i;
                nibbleToChar.push(lowerChar);
            }

            let res = '';
            for (i = 0; i < ary.length; i++) {
                res += nibbleToChar[(ary[i] >> 4) & 0x0f] + nibbleToChar[ary[i] & 0x0f] + nibbleToChar[(ary[i] >> 12) & 0x0f] + nibbleToChar[(ary[i] >> 8) & 0x0f];
            }

            resolve(res);

        }catch(err) {
            reject(err);
        }
    });
}
