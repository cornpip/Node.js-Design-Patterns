# 비동기 동작 (Event loop)

이벤트 루프는 비동기에만 해당하는 루프다.  

비동기 동작들은 이벤트 루프 이전에 가장 빨리 콜백부터 실행된다.(먼저 들어온 phase부터 루프의 시작점이다.)  

시작점의 큐를 비우는 동안 다른 phase로 들어온 콜백들이 대기하고 있다면 이제 이벤트 루프의 순서를 고려한다.  

대부분 (정상적인 실행속도라면)  
1. `nexttick`
2. `setimmediate`
3. `settimeout, poll`
4. `.... ` 

`poll`에 쌓인 콜백은 비동기 함수가 돌아간 후의 콜백이기 때문에 대부분의 경우에서는 `setimmediate`가 더 빠를 것이다.