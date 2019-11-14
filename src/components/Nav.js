import React from 'react'
import h from 'react-hyperscript'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'page1', path: '/page1' },
  { name: 'page2', path: '/page2' }
]

class Nav extends React.Component {
  constructor (props) {
    super(props)
    const { location } = this.props
    const currentRoute = ROUTES.find((r) => (r.path === location.pathname))
    this.state = { activeItem: currentRoute ? currentRoute.name : 'home' }
  }

  render () {
    const { activeItem } = this.state

    return (
      h(Menu, { className: 'pointing secondary' }, ROUTES.map((page) => (
        h(Menu.Item, {
          name: page.name,
          as: Link,
          to: page.path,
          active: activeItem === page.name,
          onClick: () => this.setState({ activeItem: page.name })
        })
      )))
    )
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

const NavWithRouter = withRouter(Nav)
export default NavWithRouter
