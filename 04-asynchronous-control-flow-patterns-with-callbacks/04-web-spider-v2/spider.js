import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import mkdirp from 'mkdirp'
import { urlToFilename, getPageLinks } from './utils.js'

function saveFile (filename, contents, cb) {
  mkdirp(path.dirname(filename), err => {
    if (err) {
      return cb(err)
    }
    fs.writeFile(filename, contents, cb)
  })
}

function download (url, filename, cb) {
  console.log(`Downloading ${url}`)
  superagent.get(url).end((err, res) => {
    if (err) {
      return cb(err)
    }
    saveFile(filename, res.text, err => {
      if (err) {
        return cb(err)
      }
      console.log(`Downloaded and saved: ${url}`)
      cb(null, res.text)
    })
  })
}

function spiderLinks (currentUrl, body, nesting, cb) {
  console.log(`nesting---> ${nesting}`);
  if (nesting === 0) {
    console.log(`nesting zero`)
    // Remember Zalgo?
    return process.nextTick(cb)
  }

  const links = getPageLinks(currentUrl, body) // [1]
  console.log(`links.length====${links.length}`);
  console.log(`${links[0]}`)
  if (links.length === 0) {
    console.log(`length zero`)
    return process.nextTick(cb)
  }

  function iterate (index) { // [2]
    if (index === links.length) {
      console.log(`length cut ---> ${links.length} and index --> ${index}`);
      console.log(`${cb}`);
      return cb() //이 콜백이 머지
    }

    spider(links[index], nesting - 1, function (err) { // [3]
      if (err) {
        console.log(`not found index`);
        return cb(err)
      }
      console.log(nesting);
      console.log(`index---> ${index}`);
      console.log(`-----------------`);
      iterate(index + 1)
    })
  }

  iterate(0) // [4]
}

export function spider (url, nesting, cb) {
  const filename = urlToFilename(url)
  fs.readFile(filename, 'utf8', (err, fileContent) => {
    if (err) {
      if (err.code !== 'ENOENT') {
        return cb(err)
      }

      // The file doesn't exist, so let’s download it
      return download(url, filename, (err, requestContent) => {
        if (err) {
          return cb(err)
        }

        spiderLinks(url, requestContent, nesting, cb)
      })
    }

    // The file already exists, let’s process the links
    spiderLinks(url, fileContent, nesting, cb)
  })
}
