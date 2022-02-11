import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import react from 'react'
import reactServer from 'react-dom/server.js'
import htm from 'htm'
import fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import { StaticRouter } from 'react-router-dom'
import { App } from './frontend/App.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const html = htm.bind(react.createElement)

//{ content }
const template = ({ content }) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My library</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="text/javascript" src="/public/main.js"></script>
  </body>
</html>`

//${content}
const server = fastify({ logger: true })

server.register(fastifyStatic, {
  root: resolve(__dirname, '..', 'public'),
  prefix: '/public/'
})

server.get('*', async (req, reply) => {
  const location = req.raw.originalUrl
  const staticContext = {}
  const serverApp = html` 
    <${StaticRouter}
      location=${location}
      context=${staticContext}
    >
      <${App}/>
    </>
  `
  // 지금 예제는 서버와 클라이언트가 주는 걸 일치시키려 한다.

  const content = reactServer.renderToString(serverApp)
  // renderToString 쓰는 순간에 send에 포함안되도 서버 렌더링은 적용된다. (404 뜨는게 적용되고 있는 거)
  // 서버의 요청에 대해 라우트 로직이 적용이 된거지

  // template({content})는 curl에 대한 출력 정보와 관련된다.

  // ------------------------------------------------------------------------
  // renderToString을 안했을 때 브라우저 라우터가 작동하고 있는지 확인할 방법이 뭘까?
  // 질문이 의미없는 듯 하다.

  // 서버 렌더링은 curl로 줄 정보를 다루는 부분이다.
  // 서버렌더링을 안해도 브라우저의 react앱은 (브라우저 라우트 포함) 정상 작동한다.
  // 즉 StaticRouter는 서버에서(point) 라우트마다 주는 정보를 다르게 하기위해서다. (브라우저 라우트와는 무관하게 분리해서 생각하는게 맞다.)

  // ----------------------------------------------------
  // 1. 브라우저측의 react(reactDOM.render), 서버측의 react(reactServer.renderToString), 서버의 응답(reply.code(code).type('text/html').send(responseHtml))
  

  // insomnia preview는 브라우저 동작을 하도록 하는 것 같다
  // source code로 curl값을 확인하자.
  const responseHtml = template({ content })
  //{ content }

  let code = 200
  if (staticContext.statusCode) {
    code = staticContext.statusCode
  }

  reply.code(code).type('text/html').send(responseHtml)
})

const port = Number.parseInt(process.env.PORT) || 3000
const address = process.env.ADDRESS || '127.0.0.1'

server.listen(port, address, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
