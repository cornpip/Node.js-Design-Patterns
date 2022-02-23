# 05-pubsub-redis-streams

This sample demonstrates how to use Redis streams to provide persistent message storage and real-time capabilities to a chat application

## Run

As a pre-requisite to this sample, you first need to install [Redis](http://redis.io/download) and have it running locally on its default port.

If you have docker installed you can easily run an ephemeral redis instance locally with:

```bash
docker run -it -p 6379:6379 redis redis-server --appendonly yes
```

To try the sample, install the dependencies first:

```bash
npm install
```

Then run (in separate terminals):

```bash
node index.js 8080
node index.js 8081
```

You can try to access at the same time those addresses:

```
http://localhost:8080
http://localhost:8081
```
--- 
Redis 스트림 관련 명령어들은 5.0 부터 지원된다.  
윈도우 릴리즈 버전은 스트림관련 명령어를 포함 안하는 듯 하다.