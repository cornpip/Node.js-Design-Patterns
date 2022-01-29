# 20-unordered-limited-parallel-execution

This examples shows how to create a limited parallel execution flow using streams.


## Dependencies

Install all necessary dependencies with:

```bash
npm install
```


## Run

To run the example:

```bash
node check-urls.js urls.txt
```

For a long list of urls you can alternatively use the `500urls.txt` file!


Then check the content of the results file with:

```bash
cat results.txt
```
--- 
Transform stream에서 pipeline으로 사용할 때 
```
_transform(chunk, enc, done)
```
done을 실행하면 다음 chunk로 넘어감, 모든 chunk에 대해 실행했다면 _flush로 넘어감.  
_flush의 done 또한 마찬가지로 다음 pipeline(또는 stream)으로의 진행을 의미함.  
`done() = 다음 스트림으로 진행`  

pipeline함수를 쓰면 끝나는 시점이 닫히는 거고  
stream 함수로 사용하면 따로 닫지 않으면 열려있는 거야.