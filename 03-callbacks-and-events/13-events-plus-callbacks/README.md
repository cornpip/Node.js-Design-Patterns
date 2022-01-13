# 13-events-plus-callbacks

This sample demonstrates how the `glob` package, combines callbacks
and the EventEmitter.

# uncaught-errors
암묵적 룰?  
err는 `callback(err)`로 반환하자.  
callback의 첫번째 인자는 err, 없다면 `callback(null, parse)` 이런 식으로 하자.

예외처리를 하면 애플리케이션을 종료시키지않고 진행할 수 있다.

__캐치되지 않는 예외__  
비동기(readFile 같은)의 콜백에서 에러를 발생시키면 예외가 이벤트 루프로 이동하고 이것은 해결되지 않고 이벤트 루프의 진행을 막는다. (애플리케이션이 중간에 종료된다.) 그리고 비동기의 콜백에서의 에러는 try catch로 잡지못하고 종료된다. ( 블록 동작의 스택과 콜백 호출의 스택이 다르기 때문 )  

위에서 말했듯 예외가 이벤트 루프에 도달하면 중단되는데 그 때의 예외처리를 하는 함수 `process.on('uncaughtException',(err)=>{})`

# eventemitter
`emitter.emit`로 이벤트를 발생시키며 인자를 넘겨주고  
`emitter.on` 에 등록된 이벤트에 따른 리스너를 실행한다.  

__emit는 기본적으로 비동기가 아니다.__  
즉 `on`이 먼저 실행되지 않으면 `emit`가 발생해도 실행할 `listener`가 없다.  
비동기 함수 `callback`안에 `emit`를 넣어두면 블로킹 함수들이 먼저 동작한 후에 비동기 `callback`이 실행될 것이므로 리스너를 후에 등록해도(on()) 동작한다.  
비동기 실행을 하지 않는 위치에 `emit`이 있다면 리스너의 등록순서를 주의하자.  

class method의 return을 this로 주면  
```
b
.plus(3)
.plus(5)  //이런 리터럴로 사용가능
```
plus method의 return이 this가 아니면 저런식으로 이어서 못 쓴다. 

## callback
---
__callback이 기본적으로 비동기 동작을 하는건 아니다.__  
콜백함수가 비동기동작을 하는 함수 안에 있다면 비동기적 실행을 할 것이다.  

비동기적 기반의 두 갈래를 `callback`과 `EventEmitter`라 한다. 하지만 둘다 스스로 비동기 동작을 하는 것은 아니다. 콜백과 이벤트 에미터의 대부분의 패턴이 비동기 함수안에 쓰이기에 그렇게 말하는 것 같다.