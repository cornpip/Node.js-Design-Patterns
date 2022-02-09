# 06-react-stateful-component

This example demostrates how to build a simple React hello world application.

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

Then you can open the file `dist/index.html` with your favorite browser.

---

`e.preventDefault()` 주로 사용되는 경우는

1. a 태그를 눌렀을때 href 링크로 이동하지 않게 할 경우

2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)  


