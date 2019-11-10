import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import {
  Segment, Item, Input, Button, Container, Header
  } from 'semantic-ui-react'

import './styles/app.scss'
import 'semantic-ui-css/semantic.min.css'

import AddItemForm from './components/AddItemForm'

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
        textAlign: 'center',
        inverted: true,
        style: {
          paddingTop: '3em',
          paddingBottom: '3em',
          backgroundColor: '#22A',
        }
      }),
      h(Segment.Group, this.state.things.map(i => (
        h(Segment, {content: `Item: ${i}`})
      ))),
      h(AddItemForm, {addItem: this.addItem.bind(this)})
    ])
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
