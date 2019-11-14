import React from 'react'
import h from 'react-hyperscript'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'home' }
    this.onClick = this.onClick.bind(this)
  }

  onClick (event, item) {
    const { name } = item
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state

    return (
      h(Menu, { className: 'pointing secondary' }, [
        h(Menu.Item, {
          name: 'home',
          active: activeItem === 'home',
          onClick: this.onClick
        }),
        h(Menu.Item, {
          name: 'page1',
          active: activeItem === 'page1',
          onClick: this.onClick
        }),
        h(Menu.Item, {
          as: Link,
          to: 'page2',
          name: 'page2',
          active: activeItem === 'page2',
          onClick: this.onClick
        })
      ])
    )
  }
}
