import {EventEmitter} from 'events'

const Ticker = (number, callback) =>{
  const start = Date.now();
  const emitter = new EventEmitter();
  let count = 0;
  const repeate = () => {
    if(Date.now()-start >= number) return callback(null, count, Date.now()-start);
    emitter.emit('tick');
    count += 1;
    setTimeout(repeate, 50);
  }

  setTimeout(repeate, 50);
  return emitter
};

Ticker(500, (err, count, ptime)=> console.log(count, ptime))
.on('tick', ()=>console.log(`tick`))