async function test(a){
    console.log(a)
    return new Promise((resolve, reject) => {
        hi(a).then(resolve, reject)  // hi프라미스의 이행값을 test프라미스의 이행값으로 반환  
        //(test프라미스의 이행값이 프라미스b 이므로 프라미스b의 이행값을 반환하는 거고)
    })
}

async function hi(a){
    console.log(`hi예요 => ${a}`);
    return 'hiii'
}

let hoo;

async function testb(a){
    console.log(`testb예요~~${a}`)
    return new Promise((resolve, reject) => {
        hoo = () =>{
            hi().then(resolve, reject);
        }        
        console.log('hhhh');
    })
}
// resolve, reject가 없어도 err는 아니다.

test(1).then(
    (result) => {
        console.log('=====');
        console.log(result)
    }
)


console.log(test(2));

testb(3).then((result)=>console.log(`~~~~~~~${result}`));

// hoo() // hoo가 실행된 후라면 testb의 이행값이 있다.