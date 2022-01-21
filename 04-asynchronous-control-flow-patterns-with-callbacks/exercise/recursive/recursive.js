import { TaskQueue } from './TaskQueue.js'
import fs from 'fs';
import path from 'path';

const queue = new TaskQueue(2)
let arg = process.argv[2];

let txtarr = [];
let finaltxt = [];
let stamp = false;
const keyword = /one/g;

function cb1(){
    if(stamp){
        console.log('------------------');
        console.log(finaltxt);
        console.log('------------------');
        return
    }

    if(txtarr.length === 0){
        stamp = true;
        return
    }
    matchtxt(txtarr.shift(), keyword);
}

//txt파일 + 키워드를 입력으로 넣으면 일치하는 txt만 남겨주는 함수
function matchtxt(txt, keyword){
    const dir = path.join(arg,txt);
    fs.readFile(dir, 'utf-8', (err,data)=>{
        if(err) throw err;
        const matcharr = data.match(keyword);
        if(matcharr){
            finaltxt.push(txt);
        }
        cb1();
    })
}

//txt파일 array
function checktxt(dir){
    const EXTENSION = '.txt';
    let texts = []
    texts = fs.readdirSync(dir, 'utf-8').filter((file)=>{
        return path.extname(file).toLowerCase() === EXTENSION;
    });
    return texts;
}

function task(dir){
    txtarr = checktxt(dir);
    console.log(txtarr);
    matchtxt(txtarr.shift(), keyword);
    matchtxt(txtarr.shift(), keyword);
}

function recursiveFind(){
    task(arg);
//여기서 실행 2개 하면되
// 애를 푸쉬에 넣고
// 푸쉬에서 신경쓸 점은 인자를 못 넣는다는거야
}

recursiveFind();