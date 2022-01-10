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