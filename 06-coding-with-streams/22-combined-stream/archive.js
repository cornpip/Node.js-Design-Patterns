import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { randomBytes } from 'crypto'
import { createCompressAndEncrypt, createDecryptAndDecompress } 
from './combined-streams.js'
import { Buffer } from 'buffer';

const [,, password, source] = process.argv
const iv = randomBytes(16)
const destination = `${source}.gz.enc`

// pipeline(
//   createReadStream(source),
//   createCompressAndEncrypt(password, iv),
//   createWriteStream(destination),
//   (err) => {
//     if (err) {
//       console.error(err)
//       process.exit(1)
//     }
//     console.log(`${destination} created with iv: ${iv.toString('hex')}`)
//     console.log(Buffer.from(iv.toString('hex'), 'hex'));
//     console.log(iv);
//   }
// )

const iv2 = Buffer.from('4c6cdb73c8c99c0070538824737cbf9b', 'hex');

pipeline(
  createReadStream(source),
  createDecryptAndDecompress(password, iv2),
  createWriteStream('./yap_re.txt'),
  (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Decrypt success created with iv: ${iv.toString('hex')}`)
  }
)
