import React from 'react';

function Input({ type, name, isDisabled, isRequired, isAutoFocus, placeholder, value, onChange, onKeyUp }) {
    return (
    <>
        <input type={type}
            name={name} 
            disabled={isDisabled} 
            required={isRequired} 
            autoFocus={isAutoFocus} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            onKeyUp={onKeyUp} 
        />
    </>
    );
}

Input.defaultProps = {
    type: "text",
    isDisabled: false,
    isRequired: false,
    isAutoFocus: false,
    placeholder: "",
    value: "",
    onChange: null,
    onKeyUp: null
}

export default Input;