import React from 'react'
import './input.styles.scss'

const Input = ({ handleChange, label, classOverRide, icon, prefilled, ...otherProps }) =>  (
  <div className={classOverRide ? classOverRide : 'input-field col s6'}>
    {icon ? (<i class='material-icons prefix'>{icon}</i>) : null}
    <input className='' onChange={handleChange} { ...otherProps } />
    {label ? (
      <label className={prefilled ? 'active' : null} >
        {label}
      </label>
      ) : null }
  </div>
)

export default Input;
