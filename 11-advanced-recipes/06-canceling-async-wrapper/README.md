# 06-canceling-async-wrapper

This sample demonstrates how to create a simple wrapper function to simplify the cancelation of an async operations.

## Run

To run the example launch:

```
node index.js
```
----
### Error 핸들링  

그냥 function에서는 throw로 던지고 try...catch로 핸들링한다.  

async function에서는 `throw, reject` 둘 다 가능하고 Promise.catch 로 핸들링한다.  
_( reject는 await로 거부값을 받아야 생각한대로 err핸들링 동작한다. )_