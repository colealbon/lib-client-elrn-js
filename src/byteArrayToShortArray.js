export default function byteArrayToShortArray(byteArray){
    return(!byteArray) ?
    Promise.reject(new Error('Called byteArrayToShortArray without input param')) :
    new Promise((resolve, reject) => {
        try{
            var shortArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var i;
            for (i = 0; i < 16; i++) {
                shortArray[i] = byteArray[i * 2] | byteArray[i * 2 + 1] << 8;
            }
            resolve(shortArray);
        }catch (err) {
            reject(err);
        }
    });
}
