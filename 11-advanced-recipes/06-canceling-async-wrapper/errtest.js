function 에러(){
    return Promise.reject('zz');
}

async function test(){
    console.log('!!!');
    await new Promise((resolve, reject)=>{
        reject(new Error('zzz'));
    });

    // throw new Error('zz')
    console.log('~~~~');
}

// try{
//     test();
// }catch(e){
//     console.log('에러에요')
//     console.log(e)    
// }

test().catch(err =>{
    console.log('에러에요2');
    console.log(err);
})


// 그냥 function에서는 throw쓰자. (그냥 function에서는 try{}catch(){} 로 핸들링한다.)
// function에서 reject일 때 try, catch에서 안잡힌다.

// 애초에 async에서도 await로 거부값을 받고 catch로 잡힌다.

// async function에서는 throw, reject 둘다 Promise.catch에서 잡힌다.