import { EventEmitter } from 'events'

function ticker(number, cb){
    const emitter = new EventEmitter();
    let count = 0
    setInterval(() => {return emitter.emit('tick', count++)}, 50)
    setTimeout( () => {
        return cb(count)
    }, number)
    
    return emitter
}

ticker(549, count => {console.log(`${count} ticks`);  process.exit();} )
.on('tick', count => count%2==0?console.log(`Tick`) : console.log(`Tock`) )