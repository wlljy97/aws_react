import React, { useState } from 'react';

function CustomerInputTest(props) {
    const [ customer, setCustomer ] = useState({
        name: "",
        grade: "",
        age: ""
    });

    const handleCustomerInfoChange = (e) => {
        const { name, value} = e.target;
        setCustomer({
            ...customer,
            [name]: value
        });
    }

    return (
        <div>
            <h1>고객명: {customer.name}</h1>
            <h1>등급: {customer.grade}</h1>
            <h1>나이: {customer.age}</h1>
            <div>
            <input type="text" name='name' onChange={handleCustomerInfoChange} />
            </div>
            <div>
            <input type="text" name='grade' onChange={handleCustomerInfoChange} />
            </div>
            <div>
            <input type="text" name='age' onChange={handleCustomerInfoChange} />
            </div>
        </div>
    );
}

export default CustomerInputTest;