import { createServer } from 'http'
import Chance from 'chance'

const chance = new Chance()

const server = createServer((req, res) => {
  let num = 0;
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  function generateMore () { // ①
    console.log(`함수===${num++}`);
    let num2 = 0;
    while (chance.bool({ likelihood: 95 })) {
      console.log(`while===${num2++}`);
      const randomChunk = chance.string({ length: (16 * 1024) - 1 }) // ②
      const shouldContinue = res.write(`${randomChunk}\n\n\n`) // ③
      if (!shouldContinue) {
        console.log('back-pressure')
        return res.once('drain', generateMore)
      }
      console.log('hummmmm');
    }
    res.end('\n\n====================')
  }
  generateMore()
  res.on('finish', () => console.log('All data sent'))
})

server.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})
