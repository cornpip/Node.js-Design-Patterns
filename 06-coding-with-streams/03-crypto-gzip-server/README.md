# 03-crypto-gzip-server

This examples shows how to implement a add an encryption layer to the previous example.

## Run

To run the server you need to launch:

```bash
node crypto-gzip-receive.js
```

This will print an encryption secret (hex string) that will need to be used by clients.

Than you can send any file with:

```bash
node crypto-gzip-send.js <path_of_the_file_to_send> localhost <encryption_secret>
```

The received files will be saved in the folder `received_files`

-----
byte나 binary로 갈때만 encoding이 아니고 여러 설정 타입에 맞춰주는 것들 다 encoding      
맥락상 encoding한거 뒤로 갈때나 또는 이제 사람이 볼 수 있는 언어로 돌아오는 경우를 decoding이라 말한다 보면 될 듯   

## crypto  
서버측: 비밀key, 클라이언트의 초기 벡터  
클라이언트측: 서버의 비밀key 공유되야하고 생성한 초기 벡터 서버에 보내줘야함