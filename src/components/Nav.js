import React from 'react'
import h from 'react-hyperscript'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'page1', path: '/page1' },
  { name: 'page2', path: '/page2' }
]

export default class Nav extends React.Component {
  render () {
    return (
      h(Menu, { className: 'pointing' }, ROUTES.map((page) => (
        h(Menu.Item, {
          name: page.name,
          as: NavLink,
          to: page.path,
          exact: true
        })
      )))
    )
  }
}

// Nav.propTypes = {
//   location: PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired
// }
//
// const NavWithRouter = withRouter(Nav)
// export default NavWithRouter
