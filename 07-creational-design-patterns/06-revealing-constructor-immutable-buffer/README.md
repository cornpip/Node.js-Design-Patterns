# 06-revealing-constructor-immutable-buffer

This example demonstrate how to use the revealing constructor pattern to implement an immutable buffer.

## Run

To run the example launch:

```bash
node index.js
```

---
+ for ...in 은 obejct를 읽을 때 주로 쓴다. _(object key값 받아옴)_  

+ object.length = undefined  
Object.keys(object).length 로 obejct의 길이를 볼 수 있다.  

+ __buffer는 obejct다.__  

+ Array.prototype.some(cb): array 요소중 하나라도 cb함수에서 true를 뱉으면 true반환  

+ String.prototype.startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인하여 true 또는 false로 반환  

+ 함수1 안의 함수2에서 this는 함수1 _( 보통 정의할 때의 상위 것이 this. )_  

+ Function.prototype.bind(object): 함수내의 this를 object를 가르키도록 고정시킨다.  

+ __Class도 객체다.__ classA 에서 this[a]=b() 라는 건 _( 생성한 )_ classA.a() 로 사용할 수 있음을 의미함  

----

```
function ({first}){
    console.log(first);
}
```
이 함수는 들어온 객체에 first라는 key가 있다면 first의 value를 보겠다는 의미  
_( 들어온 객체를 인자로 받는 것이 아닌 객체 속의 특정 value를 인자로 받겠다.)_  
_( fucntion내에서는 입력 객체를 인자로 다룰수 없다. )_  

---
아스키코드 --> 유니코드로 확장 --> 유니코드의 가변성을 잡아주는게 인코딩 타입 _( utf-8, 16....)_  

아스키코드: 1bit는 parity bit + 7bit로 문자 = 128개 문자 표현가능  
유니코드: 2byte 이상 사용  

+ String.fromCharCode(): 아스키코드나 유니코드 숫자를 문자로 변환해줌  

## immutableBuffer  
modifiers에 들어간 함수는 생성할 때 실행함수에서만 사용할 수 있고 class this에 들어간 함수는 생성자 생성 후 인스턴스에서 사용할 수 있다. --> 결국 immutablebuffer는 사용자와 내부 buffer 객체 사이에서 프록시 역할을 한다.