import { FailsafeSocket } from './failsafeSocket.js'

const failsafeSocket = new FailsafeSocket({ port: 5000 })

let num = 0;

setInterval(() => {
  // send current memory usage
  failsafeSocket.send(num++)
}, 1000)

//process.memoryUsage()