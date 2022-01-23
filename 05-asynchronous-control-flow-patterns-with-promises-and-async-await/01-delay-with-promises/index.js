function delay (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(new Date())
      resolve('전달값이여여ㅕㅕ여여');
      console.log('hi')
    }, milliseconds)
  })
}

// console.log(`Delaying...${new Date().getSeconds()}s`)

// delay(1000)
//   .then((newDate,a) => {
//     // console.log(`Done ${newDate.getSeconds()}s`)
//     console.log(newDate);
//     console.log(a);
//     process.nextTick(()=> console.log('hhhhhhhhhhhhhhh'));
//   }).then((a) =>{
//     setTimeout(()=> console.log('aaaaaaa'), 1000)
//   })

// for (i=0; i<3; i++){
//   delay();
// };

// const a = console.log('aaa예요');

  //이렇게 then에 process.nexttick있어도 뒤에 then이 더 먼저다

// process.nextTick(()=> console.log('11223333'));

const a = new Promise((resolve, reject) => {
  console.log('111');
  setTimeout(() => {
    // resolve(new Date())
    resolve('전달값이여여ㅕㅕ여여');
    console.log('hello')
  }, 1)
});

// const b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(new Date())
//     resolve('전달값bbbbbbbbbb');
//     console.log('hibbbbbbb')
//   }, 1000)
// });

async function test(){
  for (i=0; i<3; i++){
    await a; //프라미스의 실행? 은 한번인듯 resolve는 3번도는데 console.log('hi')는 한번돔
    // await a;
    console.log('1111111111111111');
  }
}

// a;
// a;

test();
// console.log('과연');