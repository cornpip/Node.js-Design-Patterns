# 09-asynchronous-data-retrieval

This example demostrates how to move the data into a dedicated api server and fetch it asynchronously from the frontend.

## Dependencies

Install all the necessary dependencies with:

```bash
npm install
```

## Run

To run the example:

```bash
npm start
```

Then you point your browser to [http://localhost:3000](localhost:3000).  

---
componentDidMount 생명 주기 함수는 서버측 렌더링 중 React에 의해 무시되는 반면, 브라우저에서는 실행된다.  
_( React서버에 curl 같은 요청을 시도하면 실제 내용을 볼 수 없을 수 있다. 생명주기함수 무시되서 )_  
_( 생명주기함수 돌아간다해도 서버 측 렌더링은 동기 작업이므로 서버에서 렌더링 동안에 비동기 데이터 로딩은 수행 할 수 없다. )_  

React에서의 console은 Brower console이다.  

브라우저에서 서로 다른 포트나 도메인에 대해 비동기 http요청을 하려면 API서버가 CORS를 지원해야 한다.  
_( 즉 React에서 비동기 요청받으려면 api가 cors를 지원해야한다. )_

서버 렌더링에서  
BrowserRouter도 있어야하고 _( index.js는 webpack진입점이자 최종 react app느낌 )_  
StaticRouter도 있어야 하는 듯
