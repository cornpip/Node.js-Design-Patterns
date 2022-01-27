# 10-writable-http-entropy-server-backpressure

This examples shows how to write into a writable stream, specifically an HTTP response sent by a server also taking back-pressure into account.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the server:

```bash
node entropy-server.js
```

Now you can make requests to the server by pointing your browser to [http://localhost:8080] or with curl as follows:

```bash
curl -i -vvv http://localhost:8080/
```
---- 
return은 함수를 종료하는 것( 주의__ if문, while문 탈출 아니다. )  
while은 true면 무한반복 탈출은 break  

res.write만 있는 예제에서는 res.end()없으면 res.on('finish')이벤트 동작안한다.