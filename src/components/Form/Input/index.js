import React from 'react'
import cn from 'classnames'

import './index.scss'

export const Input = (props) =>{
	return (
	<input className={cn("form-input", {"form-input--error": props.isError})}
	  id={props.name}
      name={props.name}
      type={props.type}
      disabled={props.disabled}
      readOnly={props.readOnly}
      value={props.value}
      placeholder={props.placeholderInput}
      autoComplete={props.autoComplete}
      defaultValue={props.defaultValue}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onInput={props.onInput}/>
	)
}