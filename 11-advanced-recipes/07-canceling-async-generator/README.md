# 07-canceling-async-generator

This sample demonstrates it's possible to seamlessly create asynchronous cancelable function with the aid of generators.

## Run

To run the example launch: 

```shell script
node index.js
```
----
createAsyncCancelable.js의 nextstep의 역할  
+ next()를 반복 
+ 이전 next()값 기다린 후 다음 next에 넘겨주고 진행  
? 첫번째 catch는 generate func또는 asyncRoutine의 err처리  
? 두번째 catch는 무슨 err2를 처리하는거지?