import react from 'react'
import reactDOM from 'react-dom'
import htm from 'htm'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.js'

const html = htm.bind(react.createElement)

reactDOM.render(
  html`<${BrowserRouter}><${App}/></>`,
  document.getElementById('root') // Router관련 리액트 문법같다.
  // document.getElementsByTagName('body')[0] // 잘 동작
)
