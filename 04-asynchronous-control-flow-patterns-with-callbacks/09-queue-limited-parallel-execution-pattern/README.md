# 09-queue-limited-parallel-execution-pattern

Simple example that demonstrates the callback limited parallel execution pattern using a Queue

## Run

Run:

```bash
node test.js
```
----------
`Array.prototype.filter()`:요소 하나씩 집어서 true, false로 걸러내기 위한 메소드 (true만 반환)  

`Array.prototype.map()`: 요소 가공해서 반환하기 위한 메소드(true, false자체로도 반환 가능)  

`Array.prototype.filter(Boolean)`: false, null, 0, "",NaN 같은 값들 필터링 해줌  

함수1 안에 함수2 return은 함수 2만 탈출  
if1 안에 if2 return은 if1까지 탈출  

-------------------  
순차적 = 함수1이 끝나고 비동기 콜백으로 함수2가 시작된다. (...함수2가 끝나면 또 비동기 cb로 함수3 호출하고 .... 순서대로 재귀적 실행)  
병렬적 = 함수1 함수2 함수3 함수4 를 순차적 실행하고, 비동기 콜백 4개 길로 진행, 순서무관 조건 만족될 때까지 먼저 끝나는대로 바통 터치 받아서 이어서 실행  
  
순차적 실행 예제가 좀 더 보기 어렵기는 한데 test.js 예제들은 tasks를 정하고 진행하는 예제라 헷갈려도 이해가감  
spider 예제는 cheerio가 잡는 변수와 넘어오는 Array를 제대로 확인하고 봐야 흐름을 따라갈 수 있어보임  

---
test.js로 실행의 패턴을 보자면  
1. 순차적 실행
2. 병렬 실행
3. 병렬 실행(동시성 제한)
4. 병렬 실행(하나의 작업이 여러개의 작업을 생성할 때 동시성 제한)   

흐름의 차이는 이해했고 패턴적으로 차이를 비교해보자. 
