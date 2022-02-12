import react from 'react'
import htm from 'htm'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes.js'

const html = htm.bind(react.createElement)

export class App extends react.Component {
  render () {
    return html`<${Switch}>
      ${routes.map(routeConfig =>
        html`<${Route} key=${routeConfig.path} ...${routeConfig}/>`
      )}
    </>`
  }
}

//`<${Route} key=${routeConfig.path} ...${routeConfig}/>`
// 위 문법은 아래와 같은 형태를 뜻한다.
// <${Route}
  // key= "/"
  // path="/"
  // exact=${true}
  // component=${AuthorsIndex}
// />