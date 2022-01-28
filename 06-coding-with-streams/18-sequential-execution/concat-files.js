import { createWriteStream, createReadStream } from 'fs'
import { Readable, Transform } from 'stream'

export function concatFiles (dest, files) {
  return new Promise((resolve, reject) => {
    const destStream = createWriteStream(dest)
    Readable.from(files) // ①
      .pipe(new Transform({ // ②
        objectMode: true,
        transform (filename, enc, done) {
          const src = createReadStream(filename)
          src.pipe(destStream, { end: false })
          src.on('error', done)
          src.on('end', done) // ③
        }
      }))
      .on('error', reject)
      .on('finish', () => { // ④
        destStream.end()
        resolve() // concatFiles()의 cb()함수를 호출??
        // await에 제어권을 돌려주는 역할을 하는 듯
        // resolve없으면 main함수가 마저 돌지않는다. ( + 당연히 then의 cb도 안돈다 )
      })
  })
}
