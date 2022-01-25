let queue = [];

function delay (milliseconds) {
  return new Promise((resolve, reject) => {
      // resolve(new Date())
      // resolve('전달값이여여ㅕㅕ여여');
      console.log('hi')
      queue.push(resolve);
      // queue.shift()('aa');
  })
}


// let b = delay(1).then(queue.shift()(33));

// b.then((a)=>console.log(a));

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

// const a = new Promise((resolve, reject) => {
//   console.log('111');
//   setTimeout(() => {
//     // resolve(new Date())
//     resolve('전달값이여여ㅕㅕ여여');
//     console.log('hello')
//   }, 1)
// });
function delay2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(new Date())
      // resolve('전달값bbbbbbbbbb');
      // reject('123');
      //resolve와 reject는 택 1이다 동시에 안됨
      console.log('hibbbbbbb')
    }, 1000)
  });
}

// delay2()

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  }, 1000);
}).catch((b)=>console.log(b));

import buffer from 'buffer'
console.log(buffer.constants.MAX_LENGTH);