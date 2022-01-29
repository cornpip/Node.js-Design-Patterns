# 22-combined-stream

This examples shows how to create a combined stream using `pumpify`.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example:

```bash
node archive.js <a_password> <path/to/a/file>
```
---
`pipeline(,,,cb)`의 마지막 인자 콜백은 
+ 스트림이 완료될 때 호출된다.  
+ 또한 에러로 인해 종료되면 지정된 에러를 첫 번째 인자로 사용하여 콜백이 호출된다.  
---
encoding, decoding, binary data 같은 서버스러운 것들의 해결책은 js가 아니라 node의 코어 모듈에서 찾아라.   
_ex: Buffer 데이타의 인코딩, 디코딩은 `Buffer` 모듈 이용_  
이런 경우 구글링도 node위주로 하자.  

crypto모듈 (stream) 암호, 복호 쓸 때 송수신에 secret key와 iv의 공유가 필요하다.