# 14-command

This sample demonstrates a simple implementation of the Command pattern.

## Run

To run the example install its dependencies with `npm install`, then run the following commands in two different terminals:

```
node server.js
```

And then:

```
node client.js
```
----

+ 대상 = statusUpdateService = 호출의 주체  
+ 명령 = createPostStatusCmd = 함수를 호출하는데 필요한 정보를 캡슐화하는 객체  
+ 호출자 = Invoker = 명령의 실행 담당 객체  

클라이언트는 위의 요소를 활용하여 패턴 구현  

명령을 직접 실행하는 것 보다 호출자를 통해 실행하면  
직렬화, 동기화, 충돌 해결, 작업취소 등의 구현에 용이함  

>단순 함수 호출은 명령까지 구현하는게 적당 _( '명령'은 클로저,bind라 봐도 무방 )_ 

>되돌리기 및 직렬화, 동기화, 충돌 해결이 필요하면 호출자까지

