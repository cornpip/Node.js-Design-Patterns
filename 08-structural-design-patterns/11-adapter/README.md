# 11-adapter

This examples shows how to use the adapter pattern to build an FS-like interface that writes to level db instead


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example:

```bash
node index.js
```
---
path.resolve(): 인자를 상대경로 _(./db)_ 로 넣으면 실행 위치기반으로 전체경로 반환해줌  

## 어댑터 패턴
기존 객체의 인터페이스를 가져와서 사용자가 예상하는 다른 인터페이스와 호환되도록 사용하는 것.  
_( 겉만 기존의 인터페이스이고 내부 동작은 사용자가 예상한 인터페이스로 동작하는 것 )_
