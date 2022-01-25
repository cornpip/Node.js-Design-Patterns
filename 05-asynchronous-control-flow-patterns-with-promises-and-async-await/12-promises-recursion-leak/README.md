# 12-promises-recursion-leak

This sample demonstrate how infinite chains of unresolved Promises can lead to memory leaks.

## Run

To run the example launch:

```bash
node index.js
```
----
foreach, map에서는 await가 무시된다. await는 for또는 while을 쓰자  

프라미스 체인은 상관x, resolve 체인은 메모리 누수의 원인  

resolve와 reject는 택1이다. (2개 동시에 써도 하나만 진행됨)