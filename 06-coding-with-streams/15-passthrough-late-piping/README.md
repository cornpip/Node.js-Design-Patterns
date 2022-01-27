# 15-passthrough-late-piping

This examples shows how to create and use a PassThrough stream for late writing into a third party API accepting content from a stream. This is implemented here through a web server that can receive files and store them locally.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example you have to start the server first:

```bash
node server.js
```

Then, in another terminal window you can run:

```bash
node upload-cli.js <path-to-file-to-upload>
```
---
스트림을 인자로 받는 함수가 있을 때 passthrough로 비동기적으로 동작하는 방법  
( _스트림, 프라미스는 반환되면 이래저래 제한없이 이용가능해 보인다._ )

스트림에서 파이프 잡기, 파이프라인에서 스트림 넣기