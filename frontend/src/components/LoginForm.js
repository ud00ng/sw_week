import React from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm() {

    return(
        <div className='loginform'>
            <div className='lfContainer'>
                <div className='imgBx'>
                    <img src='/img/market.jpg'/>
                </div>
                <div className='contentBx'>
                    <div className='formBx'>
                        <h2>로그인</h2>
                        <form>
                            <div className='inputBx'>
                                <span>아이디</span>
                                <input type='text' name=''/>
                            </div>
                            <div className='inputBx'>
                                <span>비밀번호</span>
                                <input type='password' name=''/>
                            </div>
                            <div className='remember'>
                                <label>
                                    <input type='checkbox' name=""/> Remember me
                                </label>
                            </div>
                            <div className='inputBx'>
                                <input type='submit' value='로그인' className='signin' name=''/>
                            </div>
                            <div className='inputBx'>
                                <p>계정이 없으신가요? <Link to='/signup'>회원가입</Link></p>
                            </div>
                        </form>
                        <h3>Login with social media</h3>
                        <ul className='sci'>
                            <li><img src='/img/kakao.png'/></li>
                            <li><img src='/img/google.png'/></li>
                            <li><img src='/img/facebook.png'/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;