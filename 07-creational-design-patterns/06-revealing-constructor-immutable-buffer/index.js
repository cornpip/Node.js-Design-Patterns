import { ImmutableBuffer } from './immutableBuffer.js'

const hello = '2ello!'
const immutable = new ImmutableBuffer(hello.length,
  ({ write }) => {
    write(hello)
  })

console.log(immutable.readInt8());
console.log(String.fromCharCode(immutable.readInt8(1)))

//(immutable.readInt8(0)))
// the following line will throw
// "TypeError: immutable.write is not a function"

// immutable.write('Hello?')

// modifiers에 넣어둔 함수는 생성자 생성때 실행함수에서만 사용할 수 있고 class this에 들어간 함수는 생성자 생성 후 immutablebuffer 인스턴스에서도 사용할 수 있다. --> 결국 immutablebuffer는 사용자와 내부 buffer 객체 사이에서 프록시 역할을 한다.  
