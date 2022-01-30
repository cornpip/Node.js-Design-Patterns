# 25-multiplexing

This examples shows how to perform multiplexing and demultiplexing using Node.js streams.


## Run

To run the example you need to start a server in a terminal window with:

```bash
node server.js
```

Then you can start a client:

```bash
node client.js generate-data.js
```
--- 
readable.read()는 한번 읽으면 버퍼가 소비된다.  
```

ex) <Buffer 00 00 00 00 05 6f 75 74 31 0a>  
read(4) = <Buffer 00 00 00 00>  
read() = <Buffer 05 6f 75 74 31 0a>
```
read(size) size따로 지정안할시 전부 buffer에 있는거 전부 read한다.  

>'readable' may be triggered multiple times as data is buffered in  

readable은 데이터가 버퍼링 될 때 여러번 트리거된다.  

>Each call to readable.read() returns a chunk of data, or null. The chunks are not concatenated. A while loop is necessary to consume all data currently in the buffer. When reading a large file .read() may return null, having consumed all buffered content so far, but there is still more data to come not yet buffered. In this case a new 'readable' event will be emitted when there is more data in the buffer. Finally the 'end' event will be emitted when there is no more data to come.

read()할 때의 갖고 있는 버퍼를 소비하는데 data가 다 버퍼링된게 아니라면 data가 들어올 때 readable이 트리거된다.  

> A while loop is necessary to consume all data currently in the buffer.
>>ex) while (null !== (chunk = readable.read()))

while loop를 권장한다? 한번 비우면 null이 되는데 예외적인 경우가 있어서 while을 추천하나?  

공유 채널(socket) 이용이 스트림 결합은 아니다.