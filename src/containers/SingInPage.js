import React from "react";
import {useNavigate} from "react-router-dom";
import '../style/SignIn.css';
import logo from "../icons/MovieTube-logo.png";


function SingInPage() {
    const navigate = useNavigate()
    return(
        <div className='signIn-container'>
            <div className='signIn-background'>
                <img className='signIn-logo-icon' src={logo} alt='logo'/>
                <button className='signIn-button' onClick={ () => { navigate('/')}}>Login</button>
                <div className='signIn-gradient' />
            </div>
            <div className='signIn-content'>
                <h1>Sing In</h1>
                <div className='signIn-form'>
                    <form>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <button type='submit' className='signIn-submit-button'>Login</button>
                        <h5>Don't have account yet?
                            <span className='signIn-bold' onClick={ () => { navigate('/signup')}}>Sing Up!</span>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingInPage;