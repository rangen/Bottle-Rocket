import React from 'react'
import './input.styles.scss'

const Input = ({ handleChange, label, prefilled, ...otherProps }) =>  (
  <div className="input-field col s6">
    <input className='' onChange={handleChange} { ...otherProps } />
    {label ? (
      <label className={prefilled ? 'active' : null} >
        {label}
      </label>
      ) : null }
  </div>
)

export default Input;
