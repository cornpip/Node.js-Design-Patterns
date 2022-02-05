# 11-async-generator-check-url

This sample demonstrates how to use an async generator to implement an async iterator.

## Run

To run the example install its dependencies with `npm install`, then launch:

```
node index.js
```
---
제너레이터는 `return {done: , value: }` 를 일일히 안써도 돼서 편해  
value는 둘째치고 done:true 시점을 따로 안잡아줘도 yield가 없으면 반복자를 종료하는게 코드를 간결하게 만드는 듯
