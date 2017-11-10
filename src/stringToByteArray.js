export default function stringToByteArray(str) {
    return (!str) ?
    Promise.reject(new Error('Please provide a valid input string')) :
    new Promise((resolve, reject) => {
        try {
            str = unescape(encodeURIComponent(str)); //temporary
            var bytes = new Array(str.length);
            for (var i = 0; i < str.length; ++i)
                bytes[i] = str.charCodeAt(i);
            resolve(bytes);
        } catch (err) {
            reject(err);
        }
    });
};
