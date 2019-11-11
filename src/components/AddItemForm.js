import React from 'react'
import h from 'react-hyperscript'
import PropTypes from 'prop-types'
import { Input, Grid } from 'semantic-ui-react'

import './AddItemForm.scss'

export default class AddItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { inputValue: '' }
    this.addItem = props.addItem
  }

  onAddItem () {
    const { inputValue } = this.state
    this.addItem(inputValue)
    this.setState({ inputValue: '' })
  }

  onInputChange (event) {
    this.setState({ inputValue: event.target.value })
  }

  onInputKeyDown (event) {
    if (event.key === 'Enter') {
      this.onAddItem()
    }
  }

  render () {
    const { inputValue } = this.state

    return h(Grid, [
      h(Input, {
        className: 'AddItemForm',
        type: 'text',
        action: {
          content: 'Add Item',
          color: 'green',
          onClick: this.onAddItem.bind(this)
        },
        value: inputValue,
        onChange: this.onInputChange.bind(this),
        onKeyDown: this.onInputKeyDown.bind(this)
      })
    ])
  }
}

AddItemForm.propTypes = {
  addItem: PropTypes.func
}

AddItemForm.defaultProps = {
  addItem: () => {}
}
