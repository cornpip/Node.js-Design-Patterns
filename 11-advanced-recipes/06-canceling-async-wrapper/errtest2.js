const promise = new Promise((resolve, reject) => {
    let num = 0
    async function test(){
        console.log(num++);
        if( num == 5){
            return reject('zzz');
        }
        try{
            test()
        }catch(err){
            console.log(`~~~~hi`);
            console.log(err);
        }
    }
    test(); 
})

async function hi2(){
    const b = await promise;
    console.log(`~~~${b}`);
}

// promise.catch(
//     err => console.log(err)
// );