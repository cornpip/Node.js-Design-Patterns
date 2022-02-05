import { Matrix } from './matrix.js'

const matrix2x2 = new Matrix([
  ['11', '12', '56'],
  ['21', '22', '145']
])

const iterator = matrix2x2[Symbol.iterator]()
console.log(iterator);
let iterationResult = iterator.next()
console.log(iterationResult);
while (!iterationResult.done) {
  console.log(iterationResult.value)
  iterationResult = iterator.next()
}

// for (const a of matrix2x2){
//   console.log(a);
// }
// 위의 과정을 해주는게 for of (for of iterable에만 가능함)