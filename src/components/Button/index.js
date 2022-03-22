import React from 'react'
import PropTypes from "prop-types";

import './button.scss'

const Button = ({message}) => (
   <button>{message}</button>
)

export default Button

Button.propTypes = {
   message: PropTypes.string.isRequired
}
