# 06-asyncawait-web-spider-v2

Web spider example to demostrate sequential asynchronous execution with async/await

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://example.com
```

You can optionally specify the maximum depth of crawling by passing a second parameter:

```bash
node spider-cli.js https://example.com 5
```
----
동일 라운드에 호출이 여러개면 병렬 (라운드 단어 좋다)  

~~프라미스는 spider에서 객채받고(a로 받았다면) a; 로 실행해야 그때 프라미스가 실행되는거~~   
~~즉 프라미스의 자기함수가 도는 때는 객체받고 실행할 때~~  
+) 프라미스의 실행(정의)는 한번인듯 for문으로 돌려도 한번만 실행(정의)되고 만다. resolve 동작은 for문 횟수만큼 돈다.  

프라미스는 어디서든 정의될 때(return이나 변수 할당도 정의될 때에 포함) 실행될거야 다만 비동기작업이니까 완료안돼도 진행하고 있어  
예를 들어 a라는 프라미스를 생성(정의)했고 async함수에 await a가 있다면 a프라미스가 실행된 후에 진행하라는 애긴데  
__a프라미스는 await a순간에 실행되고 기다리는게 아니라 정의한 시점에서 실행되고 있고 await a는 그 실행을 기다리고 있는거야.__  