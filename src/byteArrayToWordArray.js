// create a wordArray that is Big-Endian
export default function byteArrayToWordArray(byteArray) {
    return (!byteArray) ?
    Promise.reject(new Error('called byteArrayToWordArray with no param')) :
    new Promise((resolve, reject) => {
        try {
            let i = 0,
                offset = 0,
                word = 0,
                len = byteArray.length;
            let words = new Uint32Array(((len / 4) | 0) + (len % 4 == 0 ?
                0 : 1));

            while (i < (len - (len % 4))) {
                words[offset++] = (byteArray[i++] << 24) | (byteArray[i++] <<
                    16) | (byteArray[i++] << 8) | (byteArray[i++]);
            }
            if (len % 4 != 0) {
                word = byteArray[i++] << 24;
                if (len % 4 > 1) {
                    word = word | byteArray[i++] << 16;
                }
                if (len % 4 > 2) {
                    word = word | byteArray[i++] << 8;
                }
                words[offset] = word;
            }
            let wordArray = new Object();
            wordArray.sigBytes = len;
            wordArray.words = words;
            process.nextTick(() => resolve(wordArray))

        } catch (err) {
            reject(err);
        }
    })
}
