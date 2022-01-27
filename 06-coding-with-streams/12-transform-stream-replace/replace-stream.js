import { Transform } from 'stream'

export class ReplaceStream extends Transform {
  constructor (searchStr, replaceStr, options) {
    super({ ...options })
    this.searchStr = searchStr
    this.replaceStr = replaceStr
    this.tail = ''
  }

  _transform (chunk, encoding, callback) {
    const pieces = (this.tail + chunk).split(this.searchStr)
    // console.log(pieces);

    const lastPiece = pieces[pieces.length - 1]
    // console.log(lastPiece);

    const tailLen = this.searchStr.length - 1
    this.tail = lastPiece.slice(-tailLen)
    // console.log(`~~~~~~~~~ ${lastPiece.slice(-tailLen)}`);

    pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen)
    // console.log(`~~~~~~~~~ ${lastPiece.slice(0, -tailLen)}`);

    // console.log(pieces);
    this.push(pieces.join(this.replaceStr))
    callback()
  }

  _flush (callback) {
    console.log(`ffffffffffffffffff${this.tail}`);
    this.push(this.tail)
    callback()
  }
}
