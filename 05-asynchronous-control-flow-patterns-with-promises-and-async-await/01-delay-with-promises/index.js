function delay (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(new Date())
      resolve('전달값이여여ㅕㅕ여여');
      console.log('hi')
    }, milliseconds)
  })
}

console.log(`Delaying...${new Date().getSeconds()}s`)

delay(1000)
  .then((newDate,a) => {
    // console.log(`Done ${newDate.getSeconds()}s`)
    console.log(newDate);
    console.log(a);
  })
