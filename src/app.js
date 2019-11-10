import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import {
  Segment, Item, Input, Icon, Container, Header
  } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './styles/app.scss'


import AddItemForm from './components/AddItemForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      things: ['A', 'B', 'C!']
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem (s) {
    this.state.things.push(s)
    this.setState({things: this.state.things})
  }

  deleteItem (index) {
    console.log('remove', index)
    this.state.things.splice(index, 1)
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
      h(Segment.Group, {className: 'things'}, this.state.things.map((thing, i) => (
        h(Segment, {key: i}, [
          `Item: ${thing}`,
          h(Icon, {
            className: 'delete',
            // className: 'mini',
            onClick: () => this.deleteItem(i)
          })
        ])
      ))),
      h(AddItemForm, {addItem: this.addItem})
    ])
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
