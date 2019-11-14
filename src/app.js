import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import h from 'react-hyperscript'

import HomePage from './pages/HomePage'
import Nav from './components/Nav'

import 'semantic-ui-css/semantic.min.css'
import './styles/app.scss'


const model = {
  initial: {
    things: ['A', 'B', 'C!']
  },
  actions: (state) => ({
    addItem: (item) => {
      state.things.push(item)
      return state
    },
    deleteItem: (index) => {
      state.things.splice(index, 1)
      return state.things
    }
  })
}

const { initial, actions } = model

function Page1 () {
  return h('h2', 'Page1')
}

function Page2 () {
  return h('h2', 'Page2')
}

ReactDOM.render(
  h(Router, [
    h(Nav),
    h(Switch, [
      h(Route, { path: '/page1' },
        h(Page1)),
      h(Route, { path: '/page2' },
        h(Page2)),
      h(Route, { path: '/' },
        h(HomePage, { state: initial, actions }))
    ])
  ]),
  document.getElementById('root')
)
