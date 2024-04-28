import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CustomLink({ className, children, url }) {
  return (
    <Link className={className} to={url}>
      {children}
    </Link>
  )
}

CustomLink.defaultProps = {
  className: '',
  children: null,
  url: '#',
}

CustomLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  url: PropTypes.string,
}

export default CustomLink
