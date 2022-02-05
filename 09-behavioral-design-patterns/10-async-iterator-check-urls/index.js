import { CheckUrls } from './checkUrls.js'

async function main () {
  const checkUrls = new CheckUrls([
    'https://nodejsdesignpatterns.com',
    'https://example.com',
    'https://mustbedownforsurehopefully.com'
  ])

  for await (const status of checkUrls) {
    console.log(status)
  }
}

main()

// setInterval(() => {
//   console.log('~~~~~~~');
// }, 100);

const test = [
  'https://nodejsdesignpatterns.com',
  'https://example.com',
  'https://mustbedownforsurehopefully.com'
];

const test2 = {
  a: 1,
  b: 2,
  c: 3
};

for (const a of test){
  console.log(`!!!!!!!!!${a}`)
}