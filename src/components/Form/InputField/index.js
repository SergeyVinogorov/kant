import React from "react";
import { Input } from "../Input";
import InputMask from 'react-input-mask';

import './index.scss'

function getInput(props) {
  return (
    <Input
      isError={props.error}
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
      onInput={props.onInput}
    />
  );
}

export const InputField = ( props ) =>{
	return (
		<div className="form-field">
			{props.placeholder && (
        <div className="form-field__placeholder">{props.placeholder}</div>
      )}
			{props.type === 'tel' ? (
        <InputMask
          mask="+7 (999) 999-99-99"
          readOnly={props.readOnly}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
        >
          {() => getInput(props)}
        </InputMask>
      ) : (
        getInput(props)
      )}
			{props.error && props.helperText && (
        <div className="form-field--error-text">{props.helperText}</div>
      )}
		</div>
	)
}