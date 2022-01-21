import fs from 'fs';

export class TaskQueue {
    constructor (concurrency, dir){
        this.concurrency = concurrency;
        this.running = 0;
        this.firstqueue = dir;
        this.finalqueue = [];
    }

    task(keyword, cb){
        function readf(txt, cb){
            fs.readFile(txt, 'utf-8', (err, data)=>{
                if(err)
                    return cb(err);
                matchstring(data, keyword, cb)
            });
        }
    
        function matchstring(data, keyword, cb){
            const matcharr = data.match(keyword);
            if(matcharr){
                this.finalqueue.push(txt);
                this.task(this.firstqueue, keyword, cb)
            }
        }

        while ( this.firstqueue.length > 0){
            const txt = this.firstqueue.shift();
            readf(txt, cb);
        }
        console.log(this.finalqueue);
    }
}