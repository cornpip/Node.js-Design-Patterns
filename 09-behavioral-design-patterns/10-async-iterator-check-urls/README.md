# 10-async-iterator-check-urls

This sample demonstrates how to use a generator in place of a standard iterator.

## Run

To run the example install its dependencies with `npm install`, then launch:

```
node index.js
```
----
callback, Promise, async/await 다 비동기 동작에서 순서를 잡아주기 위한 방법들이야  
저것들을 쓴다고 비동기 동작을 하는건 아니야.  

```
const symbolarr = arr[Symbol.iterator]()
```
위와 같은 방법은 Array Iterator를 ~~구현하는~~ 사용하는 방식이다.  
_( Array는 기본적으로 반복가능한 객체이다 )_  
@@Iterator객체는 여러 내장api 구문들을 활용하여 만들 수 있다.  

async next()라면 for await ...of만 가능하다. _( for...of err남 )_  
애초에 await는 프라미스 이행또는 거부를 기다린다. 비동기 반복자가 프라미스를 반환하므로 가능한 것  
_( await가 프라미스를 기다리기는 하지만 그냥 함수 앞에 써도 에러는 없다. 동작은 안함 )_  
_( 반대로 프라미스 객체를 then이나 await없이 그냥 함수 처럼 쓴다면 `Promise { <pending> }` 이렇게 반환함 )_  

>이게 await가 프라미스 이행을 기다리는 문법이라고 볼 뿐아니라  
>then을 활용하지 않아도 프라미스함수의 이행값을 받을 수 있게하는 역할이라 볼 수 있다.

---
for...of는 반복가능한 객체에서 사용할 수 있는데  
`Array, Map, Set, String` 등이 포함된다.  
위의 객체들은 따로 @@iterator구현 안해도 for...of 사용가능하다.