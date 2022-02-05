import superagent from 'superagent'

export class CheckUrls {
  constructor (urls) {
    this.urls = urls
  }

  [Symbol.asyncIterator] () {
    const urlsIterator = this.urls[Symbol.iterator]()
    console.log(this.urls);
    // for (const a of this.urls){
    //   console.log(a);
    // };
    console.log(urlsIterator);

    return {
      async next () {
        const iteratorResult = urlsIterator.next()
        if (iteratorResult.done) {
          return { done: true }
        }

        const url = iteratorResult.value
        try {
          console.log('start');
          const checkResult = await superagent
            .head(url)
            .redirects(2)
          return {
            done: false,
            value: `${url} is up, status: ${checkResult.status}`
          }
        } catch (err) {
          return {
            done: false,
            value: `${url} is down, error: ${err.message}`
          }
        }
      }
    }
  }
}
