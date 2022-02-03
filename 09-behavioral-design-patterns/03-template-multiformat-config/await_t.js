import { promisify } from './promisify_t.js'

async function hi() {
    const a = await time2_p(5, 1000)
    // const a = await time(10, 1000);
    console.log('start');
    console.log(a);
    console.log('finish');
    return 'hio'
}

function time(desc, sec){
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
        resolve(desc)  
     }, sec);   
    })
}

function time2(desc, sec, cb){
    setTimeout(() => {
        desc++;
        cb(null, desc);
    }, sec);
    return
}
// await는 프라미스의 이행결과를 기다리는 키워드야
// cb()실행 시점이 settimeout밖에 있다면 settime이 끝나기전에 resolve에 값을 전달하겠지
// 그럼 원하는 타이밍의 동작이 아니야

// 프로미스화할 어떤 함수든 cb의 실행위치만 적절한 곳에 있다면 적절한 타이밍에 resolve에 값을 전달하고 이후의 코드가 진행될거다.

const time2_p = promisify(time2);


// hi(4).then(result => console.log(result));
hi();
