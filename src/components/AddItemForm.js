import React from 'react'
import h from 'react-hyperscript'
import { Input, Button, Grid } from 'semantic-ui-react'

import './AddItemForm.scss'

export default class AddItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {inputValue: ''}
    this.addItem = props.addItem

    // bind event handlers
    this.onAddItem = this.onAddItem.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
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
    return h(Grid, [
      h(Input, {
        className: 'AddItemForm',
        type: 'text',
        action: {
          content: 'Add Item',
          color: 'green',
          onClick: this.onAddItem
        },
        value: this.state.inputValue,
        onChange: this.onInputChange
      })
    ])
  }
}
