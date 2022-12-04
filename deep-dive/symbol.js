Array.prototype.hello = function(){
    console.log("hello not Symbol");
}

// 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않는다.
// 심벌은 유일무이하다. 기존 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 즉 하위 호환성을 보장하기 위해 도입됨

// 빌트인 이터러블이 아닌 이터러블 객체를 구현할 때 Symbol.iterator를 키로 갖는 메서드를 추가하는 것도 같은 맥락이다.
// 메서드의 키 Symbol.iterator는 기존 프로퍼티 키 또는 미래에 추가될 프로퍼티 키와 절대로 중복되지 않을 것이다.
Array.prototype[Symbol.for('hello')] = function(){
    console.log("hello Symbol");
    return;
}

// node로 하면 prototype확장 순서가 브라우저랑 좀 다른 듯 하다.
// 바로 확장한 method쓰면 cannot read properties 나옴, 브라우저는 바로 사용가능
Array.prototype; 

[1,2][Symbol.for('hello')]();
[1,2].hello();