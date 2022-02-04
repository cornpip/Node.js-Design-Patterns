# 09-iterator-matrix-generator

This sample demonstrates how to use a generator in place of a standard iterator.

## Run

To run the example launch:

```
node index.js
```
---
Symbol은 type이다. 객체에 unique한 속성을 만들기위해 나왔다.  
Symbol은 객체의 속성을 순회하기 위한 `for in, Object.keys(obj), Object.getOwnPropertyNames(obj)`에 걸리지 않는다. _( unique하기 위해 )_  
```
let prop2 = Symbol('prop2')
let obj = {
    prop1: 1,
    [prop2]: 2,
};
console.log(obe[prop2]) //2
```
Symbol은 위처럼 대괄호로 정의하며 대괄호로 접근 가능하다. _( Symbol이 아니면 객체의 속성을 []로 정의안됨 )_  
Symbol.iterator는 상용 심볼이다.  

for of는 iterable 객체에서만 사용할 수 있다.  
iterable객체란 Symbol.iterator를 가지고 있고 iterator 객체를 반환하는 객체를 말한다.  
for of 루프는 순회를 시작하기 전, `[Symbol.iterator]()` 메소드를 호출하여 이터레이터 객체를 얻은 후, 순차적으로 next() 메소드를 호출하면서 하나씩 순회하는 것이다.  

구현은 이런 느낌이다.  
```
  return {
      [Symbol.iterator](){
        return this
      },
      next: function() {
        const currChar = String.fromCodePoint(currCode)
        if (currCode > Z_CHAR_CODE) {
          return { done: true }
        }
        currCode++
        return { value: currChar, done: false }
      }
    }
```
하나의 객체 리터럴에 iterable( Symbol.iterator를 뜻함 )과 iterator( next를 뜻함 )를 구현하는 방법과  
```
  [Symbol.iterator] () {
    let nextRow = 0
    let nextCol = 0

    return {
      next: () => {
        if (nextRow === this.data.length) {
          return { done: true }
        }
            .....
            .....
        return { value: currVal }
      }
    }
  }
```
iterable의 return이 iterator인 방법으로 구현할 수 있다.  

---
generator는 @@iterator _(= iterable + iterator)_ 객체이다. 그래서  
```
  * [Symbol.iterator] () {
    let nextRow = 0
    let nextCol = 0

    while (nextRow !== this.data.length) {
      yield this.data[nextRow][nextCol]

      if (nextCol === this.data[nextRow].length - 1) {
        nextRow++
        nextCol = 0
      } else {
        nextCol++
      }
    }
  }
```
위처럼 제너레이트 함수를 사용하여 @@iterator를 구현할 수 있다.  
next()가 호출되면 yield문에 도달한 다음 일시 중단되고 값을 반환한다. 다음 next()가 호출되면 이어서 다음 yield문 까지 실행 후 다시 중단되고 값을 반환한다. ..... (반복)   

yield가 return { value: currChar, done: false } 의 역할이다.  

---
Map, Set은 object이다.  
object의 또다른 자료구조라고 생각하자.  
Map: 키가 있는 데이터를 저장한다. 키에 다양한 자료형을 허용한다.  
Set: 키가 없는 값이 저장되며 중복을 허용하지 않는다.