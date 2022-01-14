import { EventEmitter } from 'events'

function ticker(number, cb){
    const emitter = new EventEmitter();
    let count = 0
    setTimeout( () => {
        return cb(count)
    }, number)
    setInterval(() => {return emitter.emit('tick', count++)}, 50)
    
    return emitter
}

ticker(500, count => {console.log(`${count} ticks`);  process.exit();} )
.on('tick', count => console.log(`tick ${count}`) )