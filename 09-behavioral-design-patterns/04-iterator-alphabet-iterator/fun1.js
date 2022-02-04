function 함수1() {
    return function 함수2() {
        return { value: 123, hi: 'yes' }
    }
}

function 함수3() {
    return {
        함수4() {
            return { value: 123, hi: 'yes' }
        }
    }
}
//객체 리터럴로 return한거

console.log(함수1()());
console.log(함수3().함수4());


function 클로저재귀() {
    let num = 0;
    function 재귀(){
        let fnum = num;
        console.log(num++);
        if (num > 10) {
            return console.log('finish');
        }
        재귀();
        console.log( fnum );
    }
    재귀();
}
//비동기로 재귀안하니까 재귀가 전부 끝나야 안쪽부터 차례로 끝나지
//이래서 비동기써야함
// 클로저재귀();

function 비동기재귀(){
    let num = 0;
    function 재귀(){
        let fnum = num++;
        if(num > 10){
            return console.log('finish');
        }
        setTimeout(()=> console.log(num), 1000);
        재귀();
        console.log(`fnum = ${fnum}`);
    }
    재귀();
}
// 비동기재귀();
//이러면 setTimeout은 비동기지만 재귀는 비동기가 아니지
//재귀할 함수를 비동기로 동작하게끔 해야지

function 비동기재귀2(){
    let num = 0;
    function 재귀(){
        console.log(num++)
        setTimeout(()=>{
            if(num <5) 재귀()
        }, 1000);
        console.log('yap');
    }
    재귀();
    재귀();
    //동시성 테스트
}

비동기재귀2();