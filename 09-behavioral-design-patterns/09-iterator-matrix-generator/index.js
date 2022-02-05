import { Matrix } from './matrix.js'

const matrix2x2 = new Matrix([
  ['11', '12'],
  ['21', '22']
])

const iterator = matrix2x2[Symbol.iterator]()
console.log(iterator);
let iterationResult = iterator.next()
while (!iterationResult.done) {
  console.log(iterationResult.value)
  iterationResult = iterator.next()
}
