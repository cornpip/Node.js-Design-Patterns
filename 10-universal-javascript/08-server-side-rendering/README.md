# 08-server-side-rendering

This example demostrates how to evolve our frontend only app and add server side rendering.

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
location 속성을 통해 서버로부터 직접 현재 URL을 전달할 수 있다. _( location동작원리를 잘 모르겠다. )_  

전달된 context 속성은 staticContext 속성을 통해 Route 컴포넌트의 직접적인 하위에만 전달됨  

즉 Route --> Author --> FourohFour로 가면 Author가지만 가고 없는거야