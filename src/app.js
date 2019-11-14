import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import h from 'react-hyperscript'
import {
  Segment, Icon, Container, Header
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './styles/app.scss'

import AddItemForm from './components/AddItemForm'
import Nav from './components/Nav'

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

function bindMutation (component, actions, actionName) {
  const callNamedAction = (...args) => {
    component.setState(actions[actionName](...args))
  }
  return callNamedAction.bind(component)
}

class App extends React.Component {
  constructor (props) {
    super(props)
    const { state, actions } = props

    this.state = { ...state }
    const stateActions = actions(this.state)

    this.addItem = bindMutation(this, stateActions, 'addItem')
    this.deleteItem = bindMutation(this, stateActions, 'deleteItem')
  }

  render () {
    const { things } = this.state

    return h(Container, [
      h(Header, {
        as: 'h1',
        className: 'hello',
        content: `Hello, world ${things.length}`,
        textAlign: 'center',
        inverted: true
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

App.propTypes = {
  state: PropTypes.shape({
    things: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  actions: PropTypes.func.isRequired
}

const { initial, actions } = model

ReactDOM.render(
  h(Router, [
    h(Nav),
    h(App, { state: initial, actions })
  ]),
  document.getElementById('root')
)
