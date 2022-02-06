# 13-middleware-zmq

This sample demonstrates how to build a middleware infrastructure for ZMQ.

## Run

To run the example install its dependencies with `npm install`, then run the following commands in two different terminals:

```
node server.js
```

And then:

```
node client.js
```
-----
## middleware
<img src="https://user-images.githubusercontent.com/74674780/152691102-39c37e09-5ab1-4101-956c-5913d28e7624.jpg" width="700">

server는 main진행에서 new zmqMiddleware 생성시에 handleIncoming에서 대기상태가 된다.  
client도 마찬가지로 생성시에 handle에서 message가 올 때까지 대기상태가 된다.  

client에서 socket.send가 발생되면 server의 handle이 진행되며 server에서 socket.send가 발생하고  
server의 socket.send로 client의 handle이 마저 진행되며 echo출력을 보여준다.



