import { ImmutableBuffer } from './immutableBuffer.js'

const hello = 'hello!'
const immutable = new ImmutableBuffer(hello.length,
  ({ write }) => {
    write(hello)
  })

// console.log(immutable.readInt8(0));
console.log(String.fromCharCode(immutable.readInt8(0))) //buffer write의 default는 utf-8로 아스키코드로 쓴다봐도 되고 read도 Int8로 아스키코드 숫자로 읽는다.

// 아스키코드 숫자를 아스키코드 테이블 대로 문자로 매핑해준다 == fromCharCode


// immutable.write('Hello?')
// the following line will throw
// "TypeError: immutable.write is not a function"