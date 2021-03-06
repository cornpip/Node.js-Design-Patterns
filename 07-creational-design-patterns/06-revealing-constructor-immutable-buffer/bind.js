//bind 관련
const module = {
    x: 42,
    getX: function() {
        console.log('=========');
        return this.x
    }
  };
  
  const unboundGetX = module.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42

//closures는 함수관련 개념

const c = {a: 123};
function a({a}){ // 이거 뜻은 인자로 들어온 객체에 key값이 a인게 있느냐
    console.log(a);
                    // a는 진짜 key이름, 있으면 a key의 value 반환
    // console.log({a});
}

console.log({c});

console.log('--------------')
a(c);
console.log('--------------')
a({c});
