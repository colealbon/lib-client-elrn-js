# lib-client-elrn-js

### installation (in your project):
```npm install --save  @universal-productions/lib-client-elrn```

### node.js example
```
const fetch = require('node-fetch');
import { accountIdToAlias } from 'lib-client-elt';

const eltNodeUrl = config.eltNodeUrl;        // 'localhost:26876'
const eltAccountId = config.eltAccountId;    // 'NXT-T32U-S3BT-GSV5-DXNWX'
const eltChainId = config.eltChainId;        // 2

return accountIdToAlias(fetch, eltNodeUrl, eltAccountId, eltChainId)
.then(result => console.log(result)) // 'bigfoot'
.catch(err => assert.equal(true, false));
```

### installation/integration tests (development):
```

## plagarized from:
Ardor Client from Jelurida
https://bitbucket.org/Jelurida/ardor/downloads/
