import fs from 'fs';
import path from 'path';
import {TaskQueue} from './TaskQueue.js'

let arg = process.argv[2];
const queue = new TaskQueue(2)
const keyword = /one/;

function recursiveFind(dir, keyword, cb){
    const txtdir = checktxt(dir, cb);
    const queue = new TaskQueue(2, txtdir);

    queue.task(queue.task(keyword, cb));
    queue.task(queue.task(keyword, cb));
}

function checktxt(dir, cb){
    const EXTENSION = '.txt';
    let texts = []
    texts = fs.readdirSync(dir, 'utf-8').filter((file)=>{
        return path.extname(file).toLowerCase() === EXTENSION;
    });
    return texts;
}


recursiveFind(arg, keyword, (err)=>console.log(err));