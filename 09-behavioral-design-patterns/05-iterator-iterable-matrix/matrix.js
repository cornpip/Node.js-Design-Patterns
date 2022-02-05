export class Matrix {
  constructor (inMatrix) {
    this.data = inMatrix
  }

  get (row, column) {
    if (row >= this.data.length || column >= this.data[row].length) {
      throw new RangeError('Out of bounds')
    }
    return this.data[row][column]
  }

  set (row, column, value) {
    if (row >= this.data.length || column >= this.data[row].length) {
      throw new RangeError('Out of bounds')
    }
    this.data[row][column] = value
  }

  [Symbol.iterator] () {
    let nextRow = 0
    let nextCol = 0

    return {
      next: () => {
        if (nextRow === this.data.length) {
          return { done: true }
        }

        const currVal = this.data[nextRow][nextCol]

        if (nextCol === this.data[nextRow].length - 1) {
          nextRow++
          nextCol = 0
        } else {
          nextCol++
        }

        return { value: currVal }
      }
    }
  }

  // ----------------------------------------------------
  // [Symbol.iterator](){
  //   this.nextRow = 0;
  //   this.nextCol = 0;
  //   return this
  // }
  
  // next(){
  //   if (this.nextRow === this.data.length) {
  //     return { done: true }
  //   }

  //   const currVal = this.data[this.nextRow][this.nextCol]

  //   if (this.nextCol === this.data[this.nextRow].length - 1) {
  //     this.nextRow++
  //     this.nextCol = 0
  //   } else {
  //     this.nextCol++
  //   }

  //   return { value: currVal }
  // }

}
