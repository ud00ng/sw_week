import React from 'react';
import LoginForm from '../components/LoginForm';
import '../css/Login.css';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

function Login() {
    return(
        <div className='Login'>
            <div className='LoginContainer'>
                <MenuBar/>
                <LoginForm/>
                <Footer/>
            </div>
        </div>
    )
}

export default Login;