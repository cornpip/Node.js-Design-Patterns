# 04-module-swapping

This example demostrates how to swap modules at build time with Webpack.

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

---
정규표현식을 _( config.cjs 기준 )_ ./src/say-hello.js 가 아니라   
진입 js기준으로 ./say-hello.js 로 지정해야 build시에 인식한다.