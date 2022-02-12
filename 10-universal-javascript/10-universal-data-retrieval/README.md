# 10-universal-data-retrieval

This example demostrates how to pre-load data asynchronously on the server when needed and how to share this data with the
frontend for the first page load.

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
```
...Arr, ...Str, ...Map, ...Set, ...Dom
```
Spread 연산자: 대상 배열 또는 이터러블(iterable)을 "개별" 요소로 분리한다.  
_( rest 파라미터와 쓰임새 차이 주의 )_  

```
...obj2
```
그냥 object에 spread연산자는 non-callable @@iterator 라고 err를 반환하지만  
```
{...obj2}
```
위처럼은 사용가능 하다.  
```
const obj1 = {hi:1, hello:2, yo:3, haaa:4};
const obj2 = {yap:obj1.hi, ...obj1}

console.log(obj2) //{yap: 1, hi: 1, hello: 2, yo: 3, haaa: 4}
```
그래서 이런식으로 Spread연산자 이용해 객체복제 가능  

---
지금 이 예제는 react앱에 서버와 클라이언트 로직을 둘 다 고려해서 만든다.  

+ 서버측과 브라우저측 둘 다의 로직에 렌더링 전에 비동기 로딩과정을 추가 
+ 그냥 비동기 동작은 렌더링이 끝난 후에 동작하기에 프라미스를 이용  
--
+ 서버와 브라우저는 react앱을 공유 
+ 공유하는 react앱에서 적절히 서버와 브라우저의 로직을 분리해야함  
--
+ 결과적으로 서버와 브라우저의 응답이 일치하는 애플리케이션을 만듦
