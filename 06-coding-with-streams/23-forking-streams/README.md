# 23-forking-streams

This examples shows how to fork a stream.


## Run

To run the example:

```bash
node generate-hashes.js <path/to/a/file>
```
----
pipe()를 호출할 때 { end: false } 옵션을 지정하지 않는 한, inputStream이 종료될 때 자동으로 종료된다.  

스트림은 자연스럽게 비동기로 동작한다.  

파이프라인(스트림 흐름)을 차단하려면 PassThrough 스트림을 이용해야 될 거 같다.  
readable.pause(), readable.destroy() 같은 함수들은 스트림 흐름을 중지시키지는 않는다.  
_( 둘 다 흐름은 계속 진행됨 )_