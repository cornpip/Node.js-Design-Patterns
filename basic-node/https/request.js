const https = require('node:https');

const url = "https://jsonplaceholder.typicode.com/todos/1"

const req = https.request(url, (res) => {
    res.on('data', (d) => {
        let data = d.toString();
        data = JSON.parse(data);
        console.log(data, "async-request");
    });
})
req.on('error', (e) => {
    console.error(e);
});
req.end();

//바로가능한 method
https.get(url, (res) => {
    res.on('data', (d) => {
        let data = d.toString();
        data = JSON.parse(data);
        console.log(data, "async-get");
    });
})

console.log("script");