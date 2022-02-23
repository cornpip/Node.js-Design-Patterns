async function test(){
    while(true){
        await 비동기()
    }
}

test().catch(err=>{console.log('yap')});

console.log('ddd');

function 비동기(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('hi');
            // resolve('finish')
            // reject('haha')
        }, 1000)
    })
}