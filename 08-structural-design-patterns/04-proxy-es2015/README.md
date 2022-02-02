# 04-proxy-es2015

This example demonstrate how to create proxies using the ES2015 Proxy helper

## Run

To run the example launch:

```bash
node safe-calculator.js
```

Or

```bash
node even-numbers.js
```
## in 연산자
```
0 in Array
```
Array의 0 인덱스가 있으면 true  
```
'car' in Object
```
object에 'car' 프로퍼티가 있으면 true  

## Proxy  
프록시의 트랩은 JS명세서의 정의된 내부 메서드의 호출을 가로챌 수 있다. 그래서 강력함