import ReactDOM from 'react-dom'
import React from 'react'
import h from 'react-hyperscript'
import {
  Segment, Icon, Container, Header
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
    const { things } = this.state
    things.push(s)
    this.setState({ things })
  }

  deleteItem (index) {
    const { things } = this.state
    things.splice(index, 1)
    this.setState({ things })
  }

  render () {
    const { things } = this.state

    return h(Container, [
      h(Header, {
        as: 'h1',
        content: `Hello, world ${things.length}`,
        textAlign: 'center',
        inverted: true,
        style: {
          paddingTop: '3em',
          paddingBottom: '3em',
          backgroundColor: '#22A'
        }
      }),
      h(Segment.Group, { className: 'things' }, things.map((thing, i) => (
        h(Segment, { key: i }, [
          `Item: ${thing}`,
          h(Icon, {
            className: 'delete',
            color: 'red',
            onClick: () => this.deleteItem(i)
          })
        ])
      ))),
      h(AddItemForm, { addItem: this.addItem })
    ])
  }
}

ReactDOM.render(h(App), document.getElementById('root'))
