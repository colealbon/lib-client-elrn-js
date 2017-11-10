import getTime from './src/getTime.js';
import accountIdToAlias from './src/accountIdToAlias.js';
import accountIdToElrnBalance from './src/accountIdToElrnBalance.js';
import accountIdToAvatar from './src/accountIdToAvatar.js';
import prepareUploadTaggedDataTransaction from './src/prepareUploadTaggedDataTransaction.js';
import secretPhraseToPublicKey from './src/secretPhraseToPublicKey.js';
import secretPhraseToAccountId from './src/secretPhraseToAccountId.js';
import accountIdToCatalog from './src/accountIdToCatalog.js';
import publicKeyToAccountId from './src/publicKeyToAccountId.js';
import secretPhraseToPrivateKey from './src/secretPhraseToPrivateKey.js';
import accountIdToTranscript from './src/accountIdToTranscript.js';
import transactionBytesToSignedTransactionBytes from './src/transactionBytesToSignedTransactionBytes.js';
import signedTransactionBytesToFullhash from './src/signedTransactionBytesToFullhash.js';
import prepareSetAccountPropertyTransaction from './src/prepareSetAccountPropertyTransaction.js';

export default class Elrn {
    constructor(options) {
        let defaultOptions = {
            getPrivateKey: () => {},
            ardor_host: '127.0.0.1',
            ardor_port: '000000',
            chain_id: '2'
        };
        this.options = Object.call(defaultOptions,options);
    }
    getTime () {
        return getTime.call(this.options);
    }
    accountIdToAlias (accountId) {
        return accountIdToAlias.call(this.options, accountId);
    }
    accountIdToElrnBalance (accountId) {
        return accountIdToElrnBalance.call(this.options, accountId);
    }
    accountIdToAvatar (accountId) {
        return accountIdToAvatar.call(this.options, accountId);
    }
    prepareUploadTaggedDataTransaction (publicKey, data, name) {
        return prepareUploadTaggedDataTransaction.call(this.options, publicKey, data, name);
    }
    accountIdToCatalog (accountId) {
        return accountIdToCatalog.call(this.options, accountId);
    };
    accountIdToTranscript (accountId) {
        return accountIdToTranscript.call(this.options, accountId);
    };
    signedTransactionBytesToFullhash (transactionBytes, attachmentJSON) {
        return signedTransactionBytesToFullhash.call(this.options, transactionBytes, attachmentJSON)
    };
    prepareSetAccountPropertyTransaction (publisherPublicKey, propertyAccountId, propertyKey, propertyValue) {
        return prepareSetAccountPropertyTransaction.call(this.options, publisherPublicKey, propertyAccountId, propertyKey, propertyValue)
    };
    transactionBytesToSignedTransactionBytes(unsignedTransactionBytes, secretPhrase){
        return prepareSetAccountPropertyTransaction.call(this.options, unsignedTransactionBytes, secretPhrase)
    }
};

export {secretPhraseToPublicKey};
export {secretPhraseToAccountId};
export {publicKeyToAccountId};
export {secretPhraseToPrivateKey};
export {transactionBytesToSignedTransactionBytes};
