import React from 'react'
import PropTypes from 'prop-types'

function Theme({ className, children }) {
  return <div className={className}>{children}</div>
}

Theme.defaultProps = {
  className: '',
  children: null,
}
Theme.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Theme
