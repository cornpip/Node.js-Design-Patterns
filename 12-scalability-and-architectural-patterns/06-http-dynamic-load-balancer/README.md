# 06-http-dynamic-load-balancer

This example demostrates how to implement a dynamic load balancer in Node.js using consul as a service discovery mechanism.

## Dependencies

Install all the necessary dependencies with:

```bash
npm install
```

You will also need to install consul following the [instructions for your system](https://nodejsdp.link/consul-install), or by running:

```bash
sudo apt-get install consul # on debian / ubuntu based systems
# or
brew install consul # on mac with brew installed
```


## Run

Run consul with:

```bash
npm run start:consul # or `consul agent -dev`
```

Once this is started, you can access consul web ui at http://localhost:8500/.

To run some applications:

```bash
npm run start:apps # or `forever start -f --killSignal=SIGINT app.js api-service && forever start -f --killSignal=SIGINT app.js api-service && forever start -f --killSignal=SIGINT app.js webapp-service`
```

To run the load balancer:

```bash
npm run start:loadBalancer # or `node_modules/.bin/forever start loadBalancer.js`
```

Now you can finally access the application at http://localhost:8080.

Try http://localhost:8080/api or simply http://localhost:8080/ to access the different apps.


To run a benchmark:

```bash
npm run benchmark # or `npx autocannon -c 200 -d 10 http://localhost:8080`
```

You can stop consul with ctrl+c in the terminal where consul is running.

To stop all the Node.js services use:

```bash
npm run stop # or `node_modules/.bin/forever stopall`
```
---
## window ubuntu  

root 계정 /mtn/c 로 윈도우 c파일에 접근가능  

window 우분투에서 열어놓은 서버와 window에서 열어놓은 서버가 분리돼 있다.  
예를 들면 우분투에서 8000열고 윈도우에서 curl 요청하면 응답없다.    

Vscode 터미널에서 우분투열어도 거기서의 모든 작업은 윈도우와는 분리된 우분투다.  
_( 그래서 consul agent -dev를 우분투에서 열어도 윈도우 8500에서 ui화면 확인 못함 )_

powershell에서도 curl 명령어 동작한다.  

window에서 linux subsystem으로 또는 그 반대로  
어떻게 네트워크 설정하면 localhost의 접근이 되는 듯 하다.  
_( 그러면 우분투에서 서버 열고 윈도우 크롬으로 확인할 수 있다던가 등등 가능하다. )_
