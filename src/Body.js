import React from 'react'
import Button from './Button'
import Header from './Header';
import SignInForm from './SignInForm';

function Body() {
    const [visible, setVisible] = React.useState(true);
    function CallSignInform() {
            document.getElementsByClassName('SignInForm')[0].style.visibility = visible;
             <SignInForm />
         
    }
    return (
        <div className="Body">
            {visible && <div id='insidedDiv'>
                <Header />
                <h3>Already have an account? </h3>
                <Button content='Sign In'  onClick={() => { setVisible(false); CallSignInform();}}/>
                <h3>Don't have an account? </h3>
                <Button content='Sign Up'  onClick={() => setVisible(false)} /> 
            </div>}
        </div>
    )
}

export default Body
