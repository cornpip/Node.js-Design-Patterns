# 16-connecting-streams-using-pipes

This examples shows how to connect streams using `.pipe()`.


## Run

To run the example:

```bash
echo Hello World! | node replace.js World Node.js
```
---
process.stdin은 echo로 값이 들어간다. echo없이 node만 돌리면 동작은하는데 좀 다르게 동작함  
( echo로 하자 )  

shell에서  
| <-- 이게 입력 개체를 변수에 바인딩하는 그런 역할?  
파이프라인 입력을 받는 실행이 아니면 못쓰는 듯 ( echo a | echo b )하면 관련 err던짐