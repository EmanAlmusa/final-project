import React from 'react'
import Button from './Button'

export default function SignInForm() {
    return (
        <div className="SignInForm">
            <form>
                <h3>Email:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="password" />
                <Button content='Sign In'/>
            </form>
        </div>
    )
}
