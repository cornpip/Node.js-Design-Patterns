# 02-runtime-code-branching

This example demostrates how implement runtime code branching in a module shared by the browser and Node.js.

## Dependencies

Install all the necessary dependencies with:

```bash
npm install
```

## Run

To run the example server side:

```bash
node src/server.js
```

To run the example in the browser (interactively):

```bash
npm start # or node_modules/.bin/webpack-dev-server --config webpack.config.cjs
```

Alternatively, you can build a static version of the frontend app with:

```bash
npm run build # or node_modules/.bin/webpack --config webpack.config.cjs
```

Then you can open the file `dist/index.html` with your favorite browser.

----
AND(&&)연산자: 첫 번째 falsy를 반환  
OR(||)연산자: 첫 번째 truthy를 반환  

js연산자 우선순위  
괄호 > 증감 연산자 > 산술 연산자 > 비교 연산자 > 논리 연산자 > 대입 연산자