# 07-frontend-only-app

This example demostrates how to build the frontend app for our Universal JavaScript application.

## Dependencies

Install all the necessary dependencies with:

```bash
npm install
```

## Run

To run the example in the browser (interactively):

```bash
npm start # or node_modules/.bin/webpack-dev-server --config webpack.config.cjs
```

Alternatively, you can build a static version of the frontend app with:

```bash
npm run build # or node_modules/.bin/webpack --config webpack.config.cjs
```

Then you can run the built static frontend by running:

```bash
npx http-server public
```

And then pointing your favorite browser to http://localhost:8080.

---
key 속성은 엘리먼트의 배열을 렌더링할 때마다 필요한 특별한 속성이다.  
모든 엘리먼트는 고유한 키를 제공해야 한다.  

match 속성은 렌더링 시 라우터에 의해 컴포넌트로 전달되며 현재 경로에 동적 매개 변수가 존재할 경우 params 객체에 덧붙여진다.  

`document.getElementById('root')`: Router관련 리액트 문법같다.