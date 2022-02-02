# 02-proxy-object-literal

This example demonstrate how to create a proxy object using object literals

## Run

To run the example launch:

```bash
node index.js
```
----
```
function yap(a, b){
    this.hi = ()=> console.log('hi');
    return console.log(a+b);
}
```
함수에 이런식으로 this있다면 new yap()으로 생성하면서 __this.hi정의되야 사용할 수 있다.__  
_생성안하면 this.hi가 undefined여서 err반환하는 것,_   
_class처럼 사용하는거지 ( class에서 생성안하고 사용할 수 있는게 static이고 )_  
```
const yap2 = new yap();
```
new가 빈 객체 _{}_ 를 생성하고 거기에다가 yap을 정의(실행)하니까 this가 선언할 때 상위scope를 가르키므로 yap2가 this고 yap2.hi가 정의되는 것.   
_( class constructor의 this도 같은 맥락 )_