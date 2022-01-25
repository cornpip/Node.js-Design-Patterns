// import { Buffer } from 'buffer';
import { createDecipheriv, randomBytes } from 'crypto'


const buf1 = Buffer.from('this is a tést');
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf1.toString());
// Prints: this is a tést
console.log(buf2.toString());
// Prints: this is a tést
console.log(buf1.toString('latin1'));
// Prints: this is a tÃ©st

const secret = randomBytes(24)
console.log(secret);
const secret2 = secret.toString('ascii')
console.log(secret2);
// console.log(Buffer.from(secret2, 'hex'));
console.log(Buffer.from('~1234AAA'));
// console.log(`Generated secret: ${secret.toString('hex')}`)