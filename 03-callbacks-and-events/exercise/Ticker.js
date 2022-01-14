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

//tick 수가 적다는 건 timer에 쌓인 콜백이 돌아가는데 더 많은 시간이 걸렸다는 뜻 (timer말고 이벤트가 없기에.)
//Ticker2.js는 거의 고정적으로 500ms에 8tick이다. Ticker의 repeate가 더 시간이 걸리는 callback인 듯하다.
//참고로 8틱이 나온다는 것은 setTimeout이든 setInterval이든 50+callback시간이 걸리는 것을 알 수 있다.
// 60 * 8 < 500 or 70 * 7 < 500