# 05-promises-web-spider-v4

Web spider example to demostrate limited parallel asynchronous execution with Promises

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://example.com
```

You can optionally specify the maximum depth of crawling in the second parameter and the maximum concurrency in the third:

```bash
node spider-cli.js https://example.com 5 2
```
----
하.. 스파이더 예제  
프라미스는 비동기 순서에서 돌게됨, test해보면 nexttick보다 먼저 돈다.  
then1에 nexttick이 있으면 then2, then3....이 먼저 다 돈후에 nexttick이 돈다.  
(주의 비동기부터는 속도이므로 then2에서 settimeout과 같이 시간이 걸린다면 nexttick이 먼저돔)  
결론 => 준비된 then까지는 tick보다 먼저 돈다.  

걍 nexttick섞으면 비동기 순서가 불확실해지는데 섞는게 좋은가?  
05예제의 TaskQueue의 nexttick은 정확히 어느 순서지  
==> then에 막히는 거 없으면 nexttick은 then다음으로 생각하자(프라미스도 막히는게 아니다)  
(push먼저 넣어두고 돌리는게 맞겠지)

`promise.then(onFulfilled, onRejected)`은 또 다른 프라미스를 동기적으로 반환  
onfullfilled나 onRejected 함수가 x라는 값을 반환한다면  
1. x가 값이면 x를 가지고 이행한다.
2. x가 프라미스면 프라미스 x의 이행값을 가지고 이행한다.
3. x가 프라미스면 프라미스 x의 거부 사유를 최종적인 거부 사유로 하여 거부한다.  

이렇게 then이 다른 프라미스르 반환하므로 계속 이어서 쓸 수 있음 == 프라미스 체인  

----
콜백 기반 함수 --> 프라미스(아직도 자주쓰는거에 비해 번잡스럽다) --> async/await
