# lib-client-elrn-js

### installation (in your project):
```npm install --save  @universal-productions/lib-client-elrn```

### node.js example
```
import Elrn from 'lib-client-elrn';

const options = {
    ardor_host: 'localhost',
    ardor_port: 26876,
    chain_id: 2,
    secret_phrase: 'swim book position hollow experience grew jump whisper jealous moral neck passion',
    account_id: 'NXT-T32U-S3BT-GSV5-DXNWX',
    alias: '278471050383301288',
    avatar_property_key: 'elrn-profile-photo'
}

const elrnClient = new Elrn(config);

elrnClient.getTime()
.then(result => console.log(result))
```

## license and code:
Ardor Client from Jelurida
https://bitbucket.org/Jelurida/ardor/downloads/
