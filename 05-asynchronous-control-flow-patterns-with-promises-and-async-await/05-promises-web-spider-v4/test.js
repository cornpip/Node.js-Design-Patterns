const a = new Promise((resolve, reject) => {
      resolve('전달값이여여ㅕㅕ여여');
})

console.log('hi');

process.nextTick(()=>console.log('heelo'));
a.then((d)=>console.log(d));