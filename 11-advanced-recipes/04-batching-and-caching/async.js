function settimepromise(a){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log(a)
            resolve('success!')
        },2000)
    })
}
// await는 프라미스함수의 resolve를 기다리는거다
// 그냥 비동기함수의 결과를 기다리는게 아니지


// async function hu(a){
//     await setTimeout(()=>{
//         console.log(a)
//     }, 2000)
//     console.log('heloo');
//     return 'one two three'
// }

async function hu(a){
    await settimepromise(a);
    console.log('hu finished');
    return 'hu result'
}

function test2(){
    const abc = hu(15);
    console.log(abc);
    abc.then((m)=>console.log(`then이예요~~${m}`))
    abc.finally(()=>{
        // console.log(abc);  = console.log(cc);
        console.log(cc);
        console.log('finally예요');
    })
    console.log('----------------');
    return abc;
}

// finally던 then이던 프라미스가 처리된 후에 실행되고 프라미스를 반환한다. ( == 비동기 작동이다 )

// finally에서 반환 후 then은 한순서 뒤로 밀리더라 (참고) then보다 한 프라미스 더 감싸져있는 것 처럼 동작함

// finally는 이행되던 거부되던 처리된 후 한번은 동작하는 용도

// 프라미스의 chain 동작이 원래 프라미스를 변경하지 않는다.

// then으로 resolve를 변경 후에 찍어봐도 처음의 resolve로 출력된다.
// (사실 의도하지 않은 이상 프라미스는 비동기에서 동작하므로 원본이 변경된 동작을 걱정할 일이없다.)

const cc = test2();
console.log(`===========>`);
console.log(cc);

// Promise { <pending> }
// PromiseState: pending 은 아직 이행되거나 거부되지 않은 초기상태를 뜻한다.