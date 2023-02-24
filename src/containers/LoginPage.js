import React, {useState} from "react";
import logo from '../icons/MovieTube-logo.png';
import '../style/Login.css';

function LoginPage() {
    const [singIn, setSingIn] = useState(false)
    return(
        <div className='login-container'>
            <div className='login-background'>
                <img className='login-logo-icon' src={logo} alt='logo'/>
                <button className='login-button' onClick={() => setSingIn(true) }>Sing In</button>
                <div className='login-gradient' />
            </div>
            {singIn ? (<></>): (
                <div className='login-content'>
                    <h1>Watch movies, TV, series at MovieTube online cinema.</h1>
                    <h3>Enter Email to become a member</h3>
                    <div className='login-form'>
                        <form>
                            <input type='email' placeholder='Email' />
                            <button className='login-member-btn' onClick={() => setSingIn(true) }>GET MEMBERSHIP</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
export default LoginPage;