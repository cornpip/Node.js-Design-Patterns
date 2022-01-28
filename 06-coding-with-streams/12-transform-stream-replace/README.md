# 12-transform-stream-replace

This examples shows how to create a custom transform stream.


## Run

To run the example:

```bash
node index.js
```

or

```bash
node simplified-construction.js
```
--- 
_flush는 end를 호출했을 때 동작한다.  

_transform, _flush에서  
callback을 빼면 write한번돌고 끝난다.  
( callback = 이번 순서는 잘 처리되었으며 다음을 수신할 준비가 되었다는 뜻._ )  

push가 data이벤트를 동작시키는 역할인 것 같다. ( push만 빼면 on이 동작안한다. )  
( _push = 일부 데이터만 파이프라인의 다음 단계로 도달할 수 있게 한다. 라는 의미로도_ )  
