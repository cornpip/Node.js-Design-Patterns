const b = "test hi";
const c = JSON.stringify(b);
console.log(c);
console.log(Buffer.from(c));
const d = JSON.parse(c);
console.log(d);