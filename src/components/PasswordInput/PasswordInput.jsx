import React from 'react';
import Input from '../Atom/Input/Input';

function PasswordInput({ onChange }) {
    return (
        <div>
            <Input type={"password"} onChange={onChange} />
        </div>
    );
}

export default PasswordInput;