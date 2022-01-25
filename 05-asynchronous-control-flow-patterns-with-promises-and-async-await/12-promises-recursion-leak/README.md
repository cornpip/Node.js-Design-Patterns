# 12-promises-recursion-leak

This sample demonstrate how infinite chains of unresolved Promises can lead to memory leaks.

## Run

To run the example launch:

```bash
node index.js
```
----
foreach, map에서는 await가 무시된다. await는 for또는 while을 쓰자