import fs from 'fs';

// const concatFiles = (...arg, dest, cb) =>{
//     arg.reduce((acc, cur)=>{
//         fs.readFile(cur, (err, data)=>{
//             if(err) throw err;
//             return acc + data
//         })
//     }, 0)  
// }

const concatFiles = (dest, arg, cb) =>{
    let index = 0;
    let content = '';

    const readtxt = () =>{    
        if(index < arg.length){
            fs.readFile(`./text/${arg[index]}`,'utf-8', (err, data)=>{
                if(err) throw err;
                index++;
                content += data;
                readtxt();
            })
        }
        if( index === arg.length){
            cb(dest, content);
        }
    }

    readtxt(arg[index]);
}

const writefile = (dest, content)=>{
    if(fs.existsSync(dest)) return console.log('already exists')
    fs.writeFile(dest, content, 'utf-8', (err)=>{
        if(err) throw err;
        console.log('finish');
    })
}

fs.readdir('./text','utf-8',(err, files)=>{
    concatFiles('./text/final.txt', files, writefile);
})