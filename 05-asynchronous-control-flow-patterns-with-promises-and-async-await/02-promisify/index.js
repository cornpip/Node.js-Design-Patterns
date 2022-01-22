import { randomBytes as rb } from 'crypto'
import mkdirp from 'mkdirp';

function promisify (callbackBasedApi) {
  return function promisified (...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        function (err, result) {
          if (err) {
            return reject(err)
          }

          resolve(result)
        }
      ]
      callbackBasedApi(...newArgs)
    })
  }
}

const randomBytesP = promisify(rb)
randomBytesP(32)
  .then(buffer => {
    console.log('-----------------');
    console.log(`Random bytes: ${buffer.toString()}`)
  })