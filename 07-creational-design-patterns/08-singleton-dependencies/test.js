import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

console.log(import.meta.url);
//output = file:///C:/Users/choi/VscodeProject/Design-Patterns/07-creational-design-patterns/08-singleton-dependencies/test.js
// file url로 나옴

const a = new URL('./aaaa', import.meta.url);
console.log(a.pathname);

const __filename = fileURLToPath(a); // 이렇게 URL인스턴스와도 사용할 수 있음
console.log(__filename);
//output = C:\Users\choi\VscodeProject\Design-Patterns\07-creational-design-patterns\08-singleton-dependencies\aaaa

const __filename2 = fileURLToPath(import.meta.url);
console.log(__filename2);
//output = C:\Users\choi\VscodeProject\Design-Patterns\07-creational-design-patterns\08-singleton-dependencies\test.js

const jj = join(__filename2, 'asd.txt');
console.log(jj);
//output = C:\Users\choi\VscodeProject\Design-Patterns\07-creational-design-patterns\08-singleton-dependencies\test.js\asd.txt
//dir아니여도 저렇게 붙는다.

const jj2 = join(dirname(__filename2), 'asd.txt');
console.log(jj2)
// join전에 dirname