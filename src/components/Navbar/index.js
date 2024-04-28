import React from 'react'
import PropTypes from 'prop-types'

function Navbar() {
  return <div>Nav</div>
}

Navbar.defaultProps = {
  links: [],
}
Navbar.propTypes = {
  links: PropTypes.array,
}

export default Navbar
