import { EventEmitter } from 'events'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { ProcessPool } from './processPool.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerFile = join(__dirname,
  'workers', 'subsetSumProcessWorker.js')
const workers = new ProcessPool(workerFile, 2)

export class SubsetSum extends EventEmitter {
  constructor (sum, set) {
    super()
    this.sum = sum
    this.set = set
  }

  async start () {
    const worker = await workers.acquire()
    worker.send({ sum: this.sum, set: this.set }) //fork(this.file) 에 send를 해주는 것

    const onMessage = msg => {
      if (msg.event === 'end') {
        worker.removeListener('message', onMessage) // 이벤트 리스너 열어두는거 메모리 누수 원인이라 지우고 끝낸다.
        workers.release(worker)
      }

      this.emit(msg.event, msg.data)
    }

    worker.on('message', onMessage)
  }
}
