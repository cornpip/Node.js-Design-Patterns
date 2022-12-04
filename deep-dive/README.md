+ [gen_await.js](./gen_await.js) : async/await 구현 원리
+ [symbol.js](./symbol.js) : Symbol의 도입 이유
+ [iteration.js](./iteration.js)
    + __iteration protocol__ 이전에는 for, for..in, forEach 등 다양한 방법으로 순회할 수 있었다.

    + ES6에서는 순회 가능한 데이터 컬렉션을 iteration protocol을 준수하는 iterable로 통일하여 for..of, spread 문법, 구조 분해할당 등의 대상으로 사용할 수 있도록 일원화했다.  

    + 이처럼 이터레이션 프로토콜은 다양한 데이터 공급자가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자와 데이터 공급자를 연결하는 인터페이스 역할을 한다.
    
    + ES6부터 약속한 프로토콜이므로 하위호완성을 보장할 필요가 있었고 Symbol type이 필요했던 이유이기도 하다.