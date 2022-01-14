import React from 'react'
import Body from './Body';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Post from './Post';
import Header from './Header';

function Container() {
    return (
        <div className="Container">
            <Body />
            <SignInForm />
            <SignUpForm />
            <Post />
        </div>
    )
}

export default Container
