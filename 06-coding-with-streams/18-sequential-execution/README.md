# 18-sequential-execution

This examples shows how to create a sequential execution flow using streams.


## Run

To run the example:

```bash
node concat.js <destination> <source1> <source2> <source3> ...
```
----
프라미스에서 resolve() (빈 것)은 함수가 동작하는 곳에서 await에 제어권을 돌려주는 역활 + 당연히 then의 cb이 진행되게끔 하는 역활