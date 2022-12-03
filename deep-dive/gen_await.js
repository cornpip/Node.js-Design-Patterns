import fetch from 'node-fetch';

const url = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url).then(r=>r.json()).then(r=>console.log(r, 'FETCH'))

//제너레이터 실행기
const async = generator => {
    generator = generator();

    const onResolved = arg => {
        const result = generator.next(arg);
        // console.log(result);

        return result.done ? result.value : result.value.then(res => onResolved(res));
    };
    return onResolved;
}

const fetchTodo = function* () {
    let res = yield fetch(url);
    res = yield res.json();
    console.log(res);
    console.log("function script");
}

async(fetchTodo)();
