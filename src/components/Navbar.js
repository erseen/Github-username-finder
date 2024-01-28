import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
        <div className='navbar navbar-dark bg-primary'>
    <div className='container'>
        <a href='/' className='navbar-brand'>
            <i className={props.icons}></i>{props.title}
        </a>
        </div>
    </div>
  )
}