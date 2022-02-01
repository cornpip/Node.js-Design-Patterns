# 08-singleton-dependencies

This example shows how to wire dependencies using the singleton pattern

## Dependencies

Install all necessary dependencies with:

```shell script
npm install
```

## Run

To run the example:

```shell script
node import-posts.js
node index.js
```
---
sqlite3: File Disk 기반 database로 sql query맛보기  

import.meta.url = 현재 파일 위치를 FileUrl로 반환  
url.fileURLToPath('~'): 운영체제 맞춰서 fileUrl을 path로 반환  

```
join('./a.js', 'b.txt') ==> ./a.js/b.txt
```
join은 dirname역할 없음. _주의_