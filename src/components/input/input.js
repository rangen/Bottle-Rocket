import React from 'react'
import './input.styles.scss'

const Input = props => {

    return (
        <>  
                <input
                        onChange={(e)=>props.chg(e)}
                        name={props.name}
                        className={props.inputClass}
                        placeholder={props.label}
                        value={props.value}
                        type={props.inputType}
                 />
        </>
        )
}

Input.defaultProps = {
        inputType: 'text',
        inputClass: 'form-input'
}

export default Input;