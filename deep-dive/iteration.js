const fibonacci = function (max) {
    return {
        [Symbol.iterator]() {
            let [pre, cur] = [0, 1];

            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return { value: cur, done: cur > max };
                }
            };
        }
    }
}

for (const num of fibonacci(20)) {
    console.log(num);
}


Array.prototype[Symbol.iterator] = function () {
    let count = 0
    return {
        next() {
            return { value: 'hello', done: count++ > 5 };
        }
    }
}

for (const num of [1,2,3]) {
    console.log("second", num);
}
// built-in으로 구현된 arr iterator와 같은 기능을 구현하려면 
// arr instance의 값이든 메모리주소든 무언가가 필요할 것 같은데 어떻게 가져오려나?