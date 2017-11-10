export default function wordArrayToByteArrayImpl(wordArray, isFirstByteHasSign) {
    return (!wordArray) ?
    Promise.reject(new Error('Please provide a valid input array')) :
    new Promise((resolve, reject) => {
        try {
            var len = wordArray.words.length;
            if (len == 0) {
                return new Array(0);
            }
            var byteArray = new Array(wordArray.sigBytes);
            var offset = 0,
                word, i;
            for (i = 0; i < len - 1; i++) {
                word = wordArray.words[i];
                byteArray[offset++] = isFirstByteHasSign ? word >> 24 :
                    (word >> 24) & 0xff;
                byteArray[offset++] = (word >> 16) & 0xff;
                byteArray[offset++] = (word >> 8) & 0xff;
                byteArray[offset++] = word & 0xff;
            }
            word = wordArray.words[len - 1];
            byteArray[offset++] = isFirstByteHasSign ? word >> 24 : (
                word >> 24) & 0xff;
            if (wordArray.sigBytes % 4 == 0) {
                byteArray[offset++] = (word >> 16) & 0xff;
                byteArray[offset++] = (word >> 8) & 0xff;
                byteArray[offset++] = word & 0xff;
            }
            if (wordArray.sigBytes % 4 > 1) {
                byteArray[offset++] = (word >> 16) & 0xff;
            }
            if (wordArray.sigBytes % 4 > 2) {
                byteArray[offset++] = (word >> 8) & 0xff;
            }
            resolve(byteArray);
        } catch (err) {
            reject(err);
        }
    });
}
