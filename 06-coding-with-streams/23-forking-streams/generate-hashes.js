import { createReadStream, createWriteStream } from 'fs'
import { createHash } from 'crypto'

const filename = process.argv[2]
const sha1Stream = createHash('sha1').setEncoding('hex')
const md5Stream = createHash('md5').setEncoding('hex')

const inputStream = createReadStream(filename)

console.log('start');
inputStream
  .destroy(console.log('errrr'))
  .pipe(sha1Stream)
  .pipe(createWriteStream(`${filename}.sha1`))
  .end(()=>setTimeout(()=>console.log('aa'),2000))
// destroy 되면 이후 push()는 ignored 된다는데 그래도 파일이 생긴다?
// end()는 destroy돼도 동작하는게 맞다.

// sha1과 md5 해시를 출력한다는게 무슨말이지

console.log('start2');
inputStream
  .pipe(md5Stream)
  .pipe(createWriteStream(`${filename}.md5`))
  .end(()=>console.log('bb'))
  // .end('bbbbb~~')
