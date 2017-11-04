# lib-client-elrn-js

### installation (in your project):
```npm install --save  @universal-productions/lib-client-elrn```

### node.js example
```
import Elrn from 'lib-clinet-elrn';

const options = {
    ardor_host: '127.0.0.1',
    ardor_port: 26876,
    chain_id: 2,
}

const elrnClient = new Elrn(config);

elrnClient.getTime()
.then(result => console.log(result))
```

## plagarized from:
Ardor Client from Jelurida
https://bitbucket.org/Jelurida/ardor/downloads/
