import React from 'react'
import PropTypes from 'prop-types';

function Navbar({ links }) {
  return (
    <div>Nav</div>
  )
}

Navbar.defaultProps = {
  links: [],
};
Navbar.propTypes = {
  links: PropTypes.array,
}

export default Navbar;