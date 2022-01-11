/* eslint handle-callback-err: 0 */

import { readFile } from 'fs'

const cache = new Map()

function inconsistentRead (filename, cb) {
  if (cache.has(filename)) {
    // invoked synchronously
    // cb(cache.get(filename))
    setImmediate(() => console.log('setimmediate'));
    process.nextTick(() => cb(cache.get(filename)));
    console.log('sync');
  } else {
    // asynchronous function
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      cb(data)
      console.log('async')
    })
  }
}

function createFileReader (filename) {
  const listeners = []
  inconsistentRead(filename, value => {
    console.log(`top -->`);
    console.log(listeners);
    listeners.forEach(listener => listener(value))
    console.log(`bottom -->`);
    console.log(listeners);
  })

  return {
    onDataReady: listener => listeners.push(listener)
  }
}

const reader1 = createFileReader('data.txt')
reader1.onDataReady(data => {
  console.log(`First call data: ${data}`)
  // ...sometime later we try to read again from
  // the same file
  const reader2 = createFileReader('data.txt')
  reader2.onDataReady(data => {
    console.log(`Second call data: ${data}`)
    console.log(`--------------`);
  })
})

function inconsistentRead2 (filename, cb) {
  if (cache.has(filename)) {
    // invoked synchronously
    cb(cache.get(filename))
    // process.nextTick(() => cb(cache.get(filename)));
    console.log('sync');
  } else {
    // asynchronous function
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      cb(data)
      console.log('async')
    })
  }
}

function createFileReader2 (filename) {
  const listeners = []
  inconsistentRead2(filename, value => {
    console.log(`top2 -->`);
    listeners.forEach(listener => listener(value))
    console.log(`bottom2 -->`);
  })

  return {
    onDataReady: listener => listeners.push(listener)
  }
}

// const reader3 = createFileReader2('data.txt')