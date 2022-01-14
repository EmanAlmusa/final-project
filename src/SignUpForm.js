import React from 'react'
import Button from './Button'

function SignUpForm() {
    return (
        <div className="SignUpForm">
            <form>
                <h3>First Name:</h3>
                <input type="text" />
                <h3>Last Name:</h3>
                <input type="text" />
                <h3>Email:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="text" />
                <Button content='Sign Up' />
            </form>
        </div>
    )
}

export default SignUpForm
