import { fork } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerFile = join(__dirname,
  'appp.js')

// const aa = fork(workerFile);
// aa.send('SIGUSR2')