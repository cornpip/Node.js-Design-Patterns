# 04-web-spider-v2

Web spider example to demonstrate sequential callbacks

## Run

Install the necessary dependencies with `npm install` and then run:

```bash
node spider-cli.js https://loige.co
```

You can optionally specify the maximum depth of crawling by passing a second parameter:

```bash
node spider-cli.js https://loige.co 5
```
----
console 여기저기 찍어도 예제 이해가 잘안됨   
그냥 단적으로 짧게 보면  
> 함수1
>> 함수2(cb = 함수1)  

이런 패턴을 한겹더 씌우고 함수2는 배열 안에 요소로 쭈르륵 있음  

그래서 index가 2개로 진행되는데 배열의 요소로 하나, 요소안의 걸로 하나 계속봐도 모르겠다.  
