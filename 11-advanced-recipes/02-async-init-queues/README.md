# 02-async-init-queues

This sample demonstrates how to use pre-initialization queues with an asynchronously initialized component.

## Run

To run the example, launch:

```
node index.js
```
---
프라미스 자체가 비동기 동작을 뜻하는 것은 아니나 _( 비동기 동작이 없다면 순서대로 처리 )_  
.then은 비동기 순서에 들어간다.  

이행값, 거부값을 결정안해도 err는 아니다.