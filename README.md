# zcash-rpc
Website for zcashd RPC documentation

---

 Clone this repository and enter the directory:
 ```
 $ git clone https://github.com/james-katz/zcash-rpc.git
 $ cd zcash-rpc
 ```

 The first thing you should do is generate the documentation.
 This is done automatically running the script `generate_rpclist.js`

 in `src/rpc/generate_rpclist.js - line 8` set the path for your `zcash-cli` binary and execute the script:

 ```
 $ node src/rpc/generate_rpclist.js
 ```

 A file called `rpclist.json` will be automatically generated.

 Then serve your application:
 ```
 $ yarn serve
 ```

 Or build it for production

```
$ yarn build
```