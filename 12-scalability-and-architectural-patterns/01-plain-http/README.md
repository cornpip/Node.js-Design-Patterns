# 01-plain-http

This example demostrates how to benchmark a simple http server


## Dependencies

Install all the necessary dependencies with:

```bash
npm install
```


## Run

To run the example server:

```bash
npm start # or `node app.js`
```

To run a benchmark (in another terminal):

```bash
npm run benchmark # or `npx autocannon -c 200 -d 10 http://localhost:8080`
```

----
CPU == Process 라고 하는 듯 하다.  
그러나 OS의 프로세스 하고 CPU는 다른 듯 하다.    
_( 일단 소프트웨어적인 것과 하드웨어적인 개념이 있다고 구분해 생각하자. )_  
  
작업관리창의 Process _(200몇개 짜리)_ 는 소프트웨어적인 프로세스로 보자.  