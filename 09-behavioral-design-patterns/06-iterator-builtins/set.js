let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

for (const a of map){
    console.log(a)
}

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
console.log(typeof set);
for (const a of set){
    console.log(a)
}

//map과 set은 따로 설정안잡아도 iterable객체 인듯하다.
// 둘 다 type은 object이다. object의 또 다른 자료구조라 생각하자.

let obj = {
    a: 1,
    b: 2,
    c: 3
};

// for (const a of obj){
//     console.log(a)
// }

// ==> obj is not iterable

// const set2 = new Set(obj);
// ==> iterable 객체가 아니면 안됨, map도 마찬가지