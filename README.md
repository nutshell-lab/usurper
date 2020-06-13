# Usurper
*Usurp a user identity by checking a header presence*

## Usage

__Install it__

```bash
npm i usurper
#OR
yarn add usurper
```

__Use it__

```js
const Usurper = require('usurper')

//Optionnaly configure it
Usurper.configure(options)

const [success, identity] = Usurper.usurp(ctx.request.headers.authorization)
const user = sucess && await findUser(identity) // do anything you want with usurped user Id
```

## Options

name | description | default
-----|-------------|---------
disabled | turn off usurper | `process.env.USURPER_DISABLED === 'true' || process.env.SLS_STAGE === 'dev' || process.env.NODE_ENV === 'dev'`
verbose | Log in console usurped identity | false
