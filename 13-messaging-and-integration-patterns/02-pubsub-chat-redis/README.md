# 02-pubsub-chat-redis

This sample demonstrates how to integrate different server instances of a chat application using Redis as message broker

## Run

As a pre-requisite to this sample, you first need to install [Redis](http://redis.io/download) and have it running locally on its default port.

If you have docker installed you can easily run an ephemeral redis instance locally with:

```bash
docker run -it -p 6379:6379 redis redis-server --appendonly yes
```

To run the sample, install all dependencies with:
 
```shell script
npm install
``` 

Then run (in two separate terminals):

```shell script
node index.js 8081
node index.js 8082
```
  
To access the application open a browser tab at the address:

```
http://localhost:8081
```

Then, at the same time open another browser tab at the following address:

```
http://localhost:8082
```
---
Redis (window)  
작업 관리자 -> 서비스에 Redis 중지되어 있다면  
C:\Program Files\Redis 위치에서 server 키고 있는 동안은 on  

작업 관리자 -> 서비스에 Redis 실행 중 이면 항시 on