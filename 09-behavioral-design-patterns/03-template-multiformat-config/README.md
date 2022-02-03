# 03-template-multiformat-config

This sample demonstrates how to use the Template pattern to create different configuration managers supporting different file formats.

## Run

Install the necessary dependencies with `npm install` and then run:

```
node index.js
```
----
## async/await 복습  
await는 Promise기반 함수 앞에 놓을 수 있다.  

await안써도 async는 Promise로 반환하는 역할이 있고
```
async function hi(){
    return "hi"
}

hi().then((value)=>console.log(value));
```
이런식의 쓰임새를 가질 수 있다. _( async만으로 )_  

## + await, Promisify
await는 프라미스의 이행결과를 기다리는 키워드다. 즉 resolve()를 실행하기를 기다리는 것. 

promisify는 cb의 실행에서 resolve()를 실행한다. == cb실행 타이밍이 await가 곧 풀릴시점  

await를 쓰기위해 Promisify한 함수가 의도대로 동작하는지는 cb의 실행시점이 적절한가에 있어.  

>함수의 프로미스화는 딱히 걸릴 것이 없고 cb의 실행시점을 주의하면 될 것 같다.

## Promisify 복습
```
function promisify (callbackBasedApi) {
  return function promisified (...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        function (err, result) {
          if (err) {
            return reject(err)
          }

          resolve(result)
        }
      ]
      callbackBasedApi(...newArgs)
    })
  }
}
```
promisify()() == new Promise ......  이고  

promisify() == Function: promisified 이다.  

함수안의 n단 return은 순서대로 반환된다. _( 한번에 제일 안쪽의 return 반환이 아니다. )_