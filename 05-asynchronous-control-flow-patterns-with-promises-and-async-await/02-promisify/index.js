import { randomBytes as rb } from 'crypto'
// import mkdirp from 'mkdirp';

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

//promisified가 있는 이유 => promisify는 함수를 반환하는 거지
//함수1 return ==> 함수2 return ==> value 라면
//함수1()() ==> value가 출력된다.
//함수1() ==> 함수2 가 출력됨

const randomBytesP = promisify(rb)
console.log(randomBytesP);
randomBytesP(32)
  .then(buffer => {
    console.log('-----------------');
    console.log(`Random bytes: ${buffer.toString()}`)
  })