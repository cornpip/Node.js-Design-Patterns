# 04-an-unpredictable-function

This example demonstrates how a function can behave synchronously under certain circumstances and asynchronously under other.

## Run

To run the example launch:

```bash
node index.js
```
# function flow
`createFileReader(data.txt)` 실행,  
cb함수의 인자로 data가 들어가며 실행  cache에 없으므로 readFile로 실행(비동기)  
여기서 비동기 함수라 제어권 넘겨주고 `onDataReady` 함수부터 실행  
`onDataReady` 함수에 인자 함수를 전달해 listeners Array에 함수 추가  
이제 `onDataReady` 함수 끝났고 비동기 작업(readFile) 반환 후 실행  
cb함수 실행
```bash
top -->
[ [Function (anonymous)] ]
```
console 2개 진행되고 listeners에 들어간 함수에 data 인자로 실행됨
```bash
First call data: some data yap~
```
콘솔 찍히고 `createFileReader(data.txt)` reader2 실행됨, 이번에는 cache에 값이 있으므로 readFile __(비동기)__ 가 아닌 바로 cb함수 __(동기)__ 실행 cb함수가 실행되고 동기이므로 제어권 그대로 진행
```bash
top -->
[]
bottom -->
sync
```
남은 2개 console 마저 출력 후 readFile함수 마침
```bash
bottom -->
[ [Function (anonymous)] ]
async
```
비동기 작동의 이해보다도 함수형 프로그래밍스러운 코드 흐름이 더 어려웠다.

# Event loop
1. timers
2. pending callbacks
3. idle, prepare
4. poll
5. check
6. close callbacks

위와 같은 phase와 순서로 이벤트 루프가 동작한다.  

* timers: `setTimeout()`과 `setInterval()`로 스케줄링한 콜백을 실행한다.
* pending callbacks: 루프 반복으로 연기된 I/O 콜백들을 실행한다.
* idle, prepare: 내부용으로만 사용한다.  
* poll: 새로운 I/O 이벤트를 가져온다. I/O와 연관된 콜백(클로즈 콜백, 타이머로 스케줄링된 콜백, `setImmediate()`를 제외한 거의 모든 콜백)을 실행한다.

* check: `setImmediate()` 콜백은 여기서 호출된다.
* close callbacks: 일부 close 콜백들, 예를 들어 socket.on('close', ...).

phase마다 들어가는 특정 이벤트의 콜백들이다.  

각 phase들은 FIFO 큐를 가지고 있으며 큐를 비우면 다음 phase로 넘어간다.  

`setTimeout()`과 `setInterval()`의 콜백함수는 timers에서 바로 실행되는게 아니라 timers의 순서에서 콜백함수를 poll큐에 등록한다고 한다. 따라서 타이머 콜백은 poll phase까지 loop가 가야하고 poll큐에 먼저 등록된 콜백들이 있을 수도 있기에 파라미터로 지정한 시간을 보장하지는 않는다. 파라미터의 시간 이후에 실행된다는 기준으로 볼 수 있다.
  [관련 블로그 링크](https://sjh836.tistory.com/149)  

```
process.nextTick(callback)
```  
(추측) 어느 phase에서 실행중이던 그 phase의 큐를 끝내고 다음 phase로 가기전에 callback을 실행시키는 역할인 듯 하다.

```
function inconsistentRead (filename, cb) {
  if (cache.has(filename)) {
    setImmediate(() => console.log('setimmediate'));
    process.nextTick(() => cb(cache.get(filename)));
    console.log('sync');
  } else {
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      cb(data)
      console.log('async')
    })
  }
}
``` 
예제의 일부분을 다음과 같이 수정했다.  

`setImmediate(callback)`는 check phase이다.  
현재 I/O 콜백을 처리하는 poll phase일 것이고 `process.nextTick(callback)`은  poll단계 큐가 끝나고 바로 동작할 것이다. 실행해보면 nextTick(callback) 다음으로 setImmediate가 실행됨을 확인할 수 있다. [노드 공식페이지 관련 글](https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/)  

>이벤트 루프를 공부하게 된 흐름
>>function flow의 예제에서 봤듯이 비동기와 동기가 섞여있으면 에러로 나오지 않을 결함이 생길 수 있다. 그래서 함수의 실행을 동기로 전부 일치시키거나 비동기로 일치시키는 방법이 나온다. 비동기로 일치시키는 방법에서 `process.nextTick()`과 `setImmediate()`의 차이에 대해 나왔고 책으론 이해가 되지않아 찾아보다가 이벤트 루프를 공부하게 되었다.  

>>참고로 함수를 동기로만 맞추는 것은 모든 I/O 이벤트를 블로킹 방식으로 다룬다는 것으로 node에서 추천하는 방식이 아니라고 한다.
----
:heavy_plus_sign: js에서 callback 인자는 함수의 실행값이 아니라 함수자체를 인자로 전달하는 것을 의미한다. (주의하자)

