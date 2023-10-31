import React from 'react';
import MenuBar from '../components/MenuBar';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import '../css/Signup.css';

function Signup() {
    return(
        <div className='Signup'>
            <div className='suContainer'>
                <MenuBar/>
                <SignupForm/>
                <Footer/>
            </div>
        </div>
    )
};

export default Signup;