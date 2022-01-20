import fsdd from 'fs';
// import { appendFile } from 'fs';

const test = (data)=>{
    fsdd.writeFile('yap.txt',data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('success');
    })
}

test('hanadual2');

fsdd.appendFile('yap.txt', '\ndata to append', (err) => {
  if (err) throw err;
  console.log(`The "data to append" was appended to file!`);
});

fsdd.open('yap.txt','r',function(err,fd){
     if (err) throw err;
     console.log('file open complete');
     let buffer = new Buffer.alloc(100);
     fsdd.read(fd, buffer, 0, buffer.length, 5, (err, byteread, buffer)=>{
         let data = buffer.toString('utf8');
         console.log(data);
         console.log("읽은 버퍼 크기: ", byteread);
     });
});