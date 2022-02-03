function a1(){
    return function a2(){
        return 5
    }
}
// console.log(a1()());

export function promisify (callbackBasedApi) {
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