import { Buffer } from 'buffer';

const buff = {};
const buf = Buffer.alloc(5);

buf.writeUInt8(1, 0);
console.log(buf);

buff['swap16'] = buf['swap16'].bind(buf)
console.log(buf['swap16'].bind(buf))
console.log(buff);

let i=0;

// for (const a in buf){
//     // console.log(typeof buf[a]);
//     // console.log(++i);
//     // console.log(a);
//     console.log(buf[a])
// }


const MODIFIER_NAMES = ['swap', 'write', 'fill']

console.log(MODIFIER_NAMES.some(m => 'swap34'.startsWith(m))
);