# 24-merging-streams

This examples shows how to merge streams.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example:

```bash
node merge-lines.js <destination> <source1> <source2> <source3> ...
```
## Stream
기본적으로 readable.on('event유형', cb)으로 이벤트에 해당하는 로직을 작성하는 것 같다.  

```
general, developers should choose one of the methods of consuming data and should never use multiple methods to consume data from a single stream. Specifically, using a combination of on('data'), on('readable'), pipe(), or async iterators could lead to unintuitive behavior.
```
일반적으로 하나의 메소드만을 사용하길 권장한다. 섞어서 쓰면 직관적이지 못하다고 한다. ( from node docs )  

```
Use of the readable.pipe() method is recommended for most users as it has been implemented to provide the easiest way of consuming stream data. Developers that require more fine-grained control over the transfer and generation of data can use the EventEmitter and readable.on('readable')/readable.read() or the readable.pause()/readable.resume() APIs.
```
pipe()가 비교적 쉽게 다루는 함수이고 세부적 컨트롤을 원하면 on(), read(), pause(), resume() 등을 사용하라 한다.  

## Child_process
프로그램을 실행하면 OS는 프로그램을 실행하기 위한 시스템 자원을 프로세스에 할당한다.  
프로세스에 할당된 `메모리는 Code, Data, Stack, Heap의 형식으로 할당`해준다.  

프로세스 내부에 실행하는 단위를 쪼개는 '스레드'를 이용하게 되면서 Context Switching 비용을 줄일 수 있게 되었다. 스레드는 한 프로세스 안에서 코드가 실행되는 수행 경로다. `같은 프로세스 내부에 존재하는 스레드는 메모리의 정보를 공유`한다.  

메모리 중 Stack 형식으로 할당된 영역은 각 스레드가 각각 가지고 있으며 나머지 `Code, Data, Heap 형식은 스레드가 공유`합니다.  

![process의 메모리 할당 형식](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEA3vV%2FbtqG61L6llS%2FxJYG1tycBA61T1phkZkoEk%2Fimg.png)  


![thread 공유 메모리](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FUgXgj%2FbtqHcfWSERj%2FiOWqxJvsi376HXph3HmaWk%2Fimg.png)  
_( 출처: https://darrengwon.tistory.com/763?category=907676 )_
