import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import './styles/app.scss'

var things = ['A', 'B', 'C']

function ThingListItem (props) {
 return h('li', {key: props.name}, `Item ${props.name}`)
}

function AddItem (props) {
  return [
    h('input', {type: 'text'}),
    h('button', {type: 'button'}, 'Add Item' )
  ]
}

class App extends React.Component {
  render () {
    return [
      h('h1', 'Hello, world'),
      h('ul', things.map(i => (
        h(ThingListItem, {name: i})
      ))),
      h(AddItem)
    ]
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
