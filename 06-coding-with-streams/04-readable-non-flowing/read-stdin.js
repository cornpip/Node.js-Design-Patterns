process.stdin
  .on('readable', () => {
    let chunk
    console.log('New data available')
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        `Chunk read (${chunk.length} bytes): "${chunk.toString()}"`
      )
    }
  })
  .on('end', () => console.log('End of stream'))
  //process.stdin에서 end이벤트 방출이 안됨(linux는 될지도?)


// import readline from 'readline';
// process.stdin.setEncoding('utf-8');
// console.log("input is a TTY?",process.stdin.isTTY);

// var rl = readline.createInterface({input: process.stdin, output: process.stdout});
// rl.setPrompt('> ');
// rl.prompt();
// rl.on('line' ,function(aText) { 
//   console.log('echo: "%s"',aText); 
//   rl.prompt(); 
// });
// rl.on('close',function(){ 
//   console.log('input has closed'); 
//   /* ... */ 
// });