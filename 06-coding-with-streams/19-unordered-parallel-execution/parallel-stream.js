import { Transform } from 'stream'

export class ParallelStream extends Transform {
  constructor (userTransform, opts) {
    super({ objectMode: true, ...opts })
    this.userTransform = userTransform
    this.running = 0
    this.terminateCb = null
  }

  _transform (chunk, enc, done) {
    this.running++
    this.userTransform(
      chunk,
      enc,
      this.push.bind(this),
      this._onComplete.bind(this)
    )
    console.log('ddd');
    done()
  }

  _flush (done) {
    console.log('aaaa');  // 3개 청크가 _transform 먼저 돌고나서 _flush돈다.
    if (this.running > 0) {
      this.terminateCb = done
    } else {
      done()
    }
  }

  _onComplete (err) {
    this.running--
    if (err) {
      return this.emit('error', err)
    }
    if (this.running === 0) {
      this.terminateCb && this.terminateCb()
    }
  }
}
