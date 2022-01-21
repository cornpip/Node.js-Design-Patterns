import fs from 'fs'
import path from 'path'

//Application fields
let arg = process.argv[2]; //get directory

function listNestedFiles (dir, cb){
    readdir(dir, cb);
    cb();
};

function readdir(dir, cb){
    fs.readdir(dir, 'utf-8', (err, files) =>{
        if (err) 
            return cb(err);
        files.map((file) => path.join(dir, file))
        .map((file)=> {checkdir(file, cb)});
    });
}

function checkdir(file, cb){
    fs.stat(file, (err, stats)=>{
        if(err) 
            return cb(err);
        if(stats.isDirectory()) 
            return readdir(file, cb);
        console.log(file);
    })
}

listNestedFiles(arg, (err)=>{
    if(err) 
        console.log(err);
    console.log('finish');
})