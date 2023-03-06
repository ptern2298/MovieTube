import React from "react";
import logo from '../icons/MovieTube-logo.png';
import '../style/Main.css';
import {useNavigate} from "react-router-dom";

function MainPage() {
    const navigate = useNavigate()
    return(
        <div className='login-container'>
            <div className='login-background'>
                <img className='login-logo-icon' src={logo} alt='logo'/>
                <button className='login-button' onClick={ () => { navigate('/signin')}}>Sing In</button>
                <div className='login-gradient' />
            </div>
                <div className='login-content'>
                    <h1>Watch movies, TV, series at MovieTube online cinema.</h1>
                    <h3>Enter Email to become a member</h3>
                    <div className='login-form'>
                        <form>
                            <input type='email' placeholder='Email' />
                            <button className='login-member-btn' onClick={() => navigate('/signin') }>GET MEMBERSHIP</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}
export default MainPage;