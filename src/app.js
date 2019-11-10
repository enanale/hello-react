import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import { List, Item, Input, Button, Container, Header } from 'semantic-ui-react'

import './styles/app.scss'
import 'semantic-ui-css/semantic.min.css'

function ThingList (props) {
  return h(List, {className: 'divided'}, props.things.map(i => (
    h(Item, `Item ${i}`)
  )))
}


class AddItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {inputValue: ''}
    this.addItem = props.addItem
  }

  onAddItem () {
    this.addItem(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  onInputChange (event) {
    this.setState({inputValue: event.target.value})
  }

  render (props) {
    console.log('render')
    return h('div',[
      h(Input, {
        type: 'text',
        value: this.state.inputValue,
        onChange: this.onInputChange.bind(this)
      }),
      h(Button, {
        size: 'large',
        color: 'green',
        onClick: this.onAddItem.bind(this)
      }, 'Add Item' )
    ])
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      things: ['A', 'B', 'C!']
    }
  }

  addItem (s) {
    this.state.things.push(s)
    this.setState({things: this.state.things})
  }

  render () {
    return h(Container, [
      h(Header, {
        as: 'h1',
        content: `Hello, world ${this.state.things.length}`,
        inverted: true,
        color: 'red',
        size: 'huge',
        textAlign: 'center'
      }),
      h(ThingList, {things: this.state.things, className: 'thinglist'}),
      h(AddItemForm, {addItem: this.addItem.bind(this), className: 'additem'})
    ])
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
