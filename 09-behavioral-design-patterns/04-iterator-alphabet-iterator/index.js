const A_CHAR_CODE = 65
const Z_CHAR_CODE = 90

function createAlphabetIterator () {
  let currCode = A_CHAR_CODE

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
}

const iterator = createAlphabetIterator()
// console.log(iterator);
// let iterationResult = iterator.next()
// while (!iterationResult.done) {
//   console.log(iterationResult.value)
//   iterationResult = iterator.next()
// }

for (const letter of iterator){
  console.log(letter);
}

//원래 return iterator만 있었음
//반복가능자가 아니라 반복자를 반환하는 함수를 api에서 사용하려면?
//반복자 객체에 반복가능자를 return this로 구현하면 된다.

//1. iterable이 iterator를 return한다.
//2. 객체 리터럴로 return하고 iterable과 iteraotr를 반환한다. (iterable은 return this이다.) 