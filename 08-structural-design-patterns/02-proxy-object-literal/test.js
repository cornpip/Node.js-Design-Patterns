function yap(a, b){
    this.hi = ()=> console.log('hi');
    return console.log(a+b);
}
const yap2 = new yap();
// new가 빈 객체를 생성해주고 거기에다가 yap정의(실행)하니까
// this가 하나 상위거라했을 때 yap2가 this가된거지
yap2.hi();

// yap(1,2);
// 이런 this로 정의해놓은 함수는 hi()말고 그냥 yap도 못쓴다
// Cannot set properties of undefined (setting 'hi')
// 생성하기 전에는 정의가 this.hi가 정의가 안됐다는거지

// 이런 함수는 무조건 생성자 함수로 쓰라는 경우다.