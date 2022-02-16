# 08-cpu-bound

This sample demonstrates how to run a CPU-bound task in Node.js
using setImmediate or multiple processes.

To start the server, run:

```shell script
  node index.js
```

Then try to send one or more request to trigger the subset sum task:

```shell script
  curl -G http://localhost:8000/subsetSum --data-urlencode "data=[116,119,101,101,-116,109,101,-105,-102,117,-115,-97,119,-116,-104,-105,115]" --data-urlencode "sum=0"
```
  
While a subset sum task is running, you can check the responsiveness of the server with a command like this:

```shell script
  curl -G http://localhost:8000
```

If the subset sum takes too long on your machine or is too fast for checking the responsiveness of the server, try to reduce or increase the number of items of the array given as input.

In the file `index.js`, try to swap between the various implementations
of the `SubsetSum` API to compare the differences in the responsiveness of the 
server.

```
//import { SubsetSum } from './subsetSum.js'
//import { SubsetSum } from './subsetSumDefer.js'
//import { SubsetSum } from './subsetSumFork.js'
//import { SubsetSum } from './subsetSumThreads.js'
```
----
`process.nextTick()`은 `대기중인 I/O` 이전에 작업을 실행하도록 예약함  
즉 `setImmediate()` 느려도 중간에 응답 가능하지만 `nextTick`은 `I/O(응답)` 작업 맨 뒤로 밀림  

subsetSum에 console안찍으면 응답 바로됨 _( console이 이렇게 지연시킬 수 있구나 )_  

`event listener` 기본으로 개수 제한 걸려있고 __메모리 누수의 주된 원인__ 중 하나다.  
`emitter.reamovelistener`를 잊지말자.

keyword: 메시지 기반 통신 채널  

---

>index - subsetSumFork - processPool - subsetSumProcessWorker - subsetSum   
_( 이런 관계의 흐름으로 보면 된다. )_

작업자 쓰레드 제대로 동작안함  
1. 응답은 바로오고 console은 후에 찍힌다.
2. console을 처리하는 동안 이벤트 리스너도 막힌다.  
_( ???? )_