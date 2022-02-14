# 04-batching-and-caching

This sample demonstrates how asynchronous batching and caching work.

To try the sample, first install its dependencies:

```
npm install
```
  
Next, populate the database with some sample data:

```
node populateDb.js
```

The command above will create 100000 random sales transactions
in the format:

```
{amount, product}
```
  
Next, to start the server, run:

```
node server.js
```

To test the server with multiple concurrent request, simply run:

```
node loadTest.js
```

In the file `server.js`, try to swap between the various implementations
of the `totalSales()` API to compare their performances. Please note that
using the vanilla implementation (`totalSales`) the load test may 
take up to a minute or more to complete.

```
import { totalSales } from './totalSales.js'
// import {totalSales} from './totalSalesBatch.js'
// import {totalSales} from './totalSalesCache.js'
```
---
await는 프라미스함수의 resolve를 기다리는거지 비동기함수 결과를 기다리는게 아니다. _( 주의 )_  

finally던 then이던 프라미스가 처리된 후에 실행되고 __프라미스를 반환한다.__ _( = 비동기 작동이다 )_  
finally는 이행되던 거부되던 프라미스 처리 후 한번은 동작하는 용도  

__프라미스의 chain 동작이 원래 프라미스를 변경하지 않는다.__  
_then으로 resolve를 변경 후에 찍어봐도 처음의 resolve로 출력된다._  
_( 사실 의도하지 않은 이상 프라미스는 비동기에서 동작하므로 원본이 변경된 동작을 걱정할 일이없다. )_  

`Promise { <pending> }`  
PromiseState: pending 은 아직 이행되거나 거부되지 않은 초기상태를 뜻한다.