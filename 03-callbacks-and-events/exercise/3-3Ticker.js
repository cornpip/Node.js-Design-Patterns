import {EventEmitter} from 'events'

const Ticker = (number, callback) =>{
  const start = Date.now();
  const emitter = new EventEmitter();
  let count = 0;
  const repeate = () => {
    const ptime = Date.now()-start;
    if(ptime >= number) return callback(null, count, ptime);
    if(ptime % 5 !== 0){
      emitter.emit('tick');
    }else if(ptime % 5 === 0){
      emitter.emit('err', errcall(), ptime);
    }
    count += 1;
    setTimeout(repeate, 50);
  }

  const errcall = () => new Error(`can divide to 5`)

  process.nextTick(()=>emitter.emit('first tick'));
  setTimeout(repeate, 50);
  return emitter
};

// Ticker(500, (err, count, ptime)=> console.log(count, ptime))
Ticker(500, (err, count, ptime)=> err !== null? console.log(err) : console.log(count, ptime))
.on('tick', ()=>console.log(`tick`))
.on('first tick', ()=>console.log(`first tick`))
.on('err', (e, ptime)=>console.log(`${e} --> ${ptime}`));