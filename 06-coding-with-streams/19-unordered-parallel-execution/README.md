# 19-unordered-parallel-execution

This examples shows how to create a parallel execution flow using streams.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example:

```bash
node check-urls.js urls.txt
```

Then check the content of the results file with:

```bash
cat results.txt
```
---
```
function a(){
    ....
}
```  
있을 때 a && a() ==> a() 이다.  
함수 실행은 논리 연산자 어디에 있던 웬만하면 실행된다.  
_( 단, null && a() 와 같이 처음이 false면 함수도 실행안됨, 처음만 아니면 함수는 실행됨 )_  

```
a && b()
```
그래서 if문 처럼 쓸 수 있지 a가 true면 b()함수를 실행한다는 뜻
