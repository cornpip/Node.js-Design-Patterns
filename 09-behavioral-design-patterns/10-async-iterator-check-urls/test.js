let arr = [1,2,3,4,5,6,7,8,9,10];
const symbolarr = arr[Symbol.iterator]();
console.log(symbolarr);
const iteratorResult = symbolarr.next();
console.log(iteratorResult);

for (const a of symbolarr){
    console.log(a);
}

function test(){
    console.log('hello');
}