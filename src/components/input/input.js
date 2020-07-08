import React from 'react'
import './input.styles.scss'

const Input = ({ handleChange, label, ...otherProps }) =>  (
  <div className="input-field col s6">
    <input className='' onChange={handleChange} { ...otherProps } />
    {label ? (
      <label>
        {label}
      </label>
      ) : null }
  </div>
)

export default Input;
