# 06-revealing-constructor-immutable-buffer

This example demonstrate how to use the revealing constructor pattern to implement an immutable buffer.

## Run

To run the example launch:

```bash
node index.js
```

---
for ...in 은 obejct를 읽을 때 주로 쓴다. _(object key값 받아옴)_  

object.length = undefined  
Object.keys(object).length 로 obejct의 길이를 볼 수 있다.  

buffer는 obejct다.  

Array.prototype.some(cb): array 요소중 하나라도 cb함수에서 true를 뱉으면 true반환  

String.prototype.startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 true 또는 false로 반환  

함수1 안의 함수2에서 this는 함수1 _( 보통 정의할 때의 상위 것이 this. )_  

Function.prototype.bind(object): 함수내의 this를 object를 가르키도록 고정시킨다.