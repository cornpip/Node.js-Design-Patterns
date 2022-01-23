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

프라미스는 spider에서 객채받고(a로 받았다면) a; 로 실행해야 그때 프라미스가 실행되는거  
즉 프라미스의 자기함수가 도는 때는 객체받고 실행할 때  
+) 프라미스의 실행(정의)는 한번인듯 for문으로 돌려도 한번만 실행(정의)되고 만다. resolve 동작은 for문 횟수만큼 돈다.