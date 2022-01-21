import fs from 'fs';
import path from 'path';

let arg = process.argv[2];

// function recursiveFind(dir, keyword, cb){
//     fs.readdir(dir, 'utf-8', (err, files)=>{
//         // 1. txt만 남긴다 --> path.extname으로 확장자 추출하고 소문자 일치시키고 filter로 true false 
//         // -----------  너가 큐스택이고

//         // 2. txt 내용 read하고 매칭되는 단어 있나 본다 --> string.prototype.match() + regex
//         // 3. filter이용 매칭된 친구들만 살린다. (이게 안되지)
//         // ------------ 너가 큐스택을 뺄때 해야할 일이고

//         // 4. 큐 스택 만들어서 일을 2개 실행하자. --> shift로 빼면서 일 잡아가기
//         // 일 2개 넣어놓은 함수를 실행하자
//     });
// }

function checktxt(dir, cb){
    const EXTENSION = '.txt';
    let texts = []
    // fs.readdirs(dir, 'utf-8', (err, files)=>{
    //     texts = files.filter((file)=>{
    //         return path.extname(file).toLowerCase() === EXTENSION;
    //     });
    //     return texts
    // });
    texts = fs.readdirSync(dir, 'utf-8').filter((file)=>{
        return path.extname(file).toLowerCase() === EXTENSION;
    });
    return texts;
}

function read(dir, cb){
    fs.readFile(dir, 'utf-8', (err, data)=>{
        if(err)
            return cb(err);
        matchstring(data, condition, cb)
    });
}

function matchstring(data, keyword, cb){
    const matcharr = data.match(keyword);
    if(matcharr){
        finalarr.push(dir); // 이렇게가 클로저가 되려나
        // ㄴㄴ 안된다 dir이 지금 이 function 정의할 때 전역에도 없자나
        // 안됨 클로저는 함수 정의할 때 전역인거 까지 맥락 같이가는거야

        // 사용할 때 가 아니라 정의할 때 이다.
    }
}

console.log(checktxt(arg, null));
console.log(`synccccc`);

