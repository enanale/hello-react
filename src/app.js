import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import './styles/app.scss'

function ThingList (props) {
  return h('ul', props.things.map(i => (
    h(ThingListItem, {name: i})
  )))
}

function ThingListItem (props) {
  return h('li', {key: props.name}, `Item ${props.name}`)
}

class AddItem extends React.Component {
  constructor (props) {
    super(props)
    this.newItem = null
    this.addItem = props.addItem
  }

  onAddItem () {
    this.addItem(this.newItem.value)
    this.newItem.value = ''
  }

  render (props) {
    return [
      h('input', {
        type: 'text',
        ref: (e) => {this.newItem = e}
      }),
      h('button', {
        type: 'button',
        onClick: this.onAddItem.bind(this)
      }, 'Add Item' )
    ]
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['A', 'B', 'C']
    }
  }

  addItem (s) {
    // let newThings = this.state.things.slice()
    // newThings.push(s)
    this.state.things.push(s)
    this.setState({things: this.state.things})
  }

  render () {
    return [
      h('h1', `Hello, world ${this.state.things.length}`),
      h(ThingList, {things: this.state.things}),
      h(AddItem, {addItem: this.addItem.bind(this)})
    ]
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
