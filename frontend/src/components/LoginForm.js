import React, { useState } from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleFormLogin = async (event) => {
        event.preventDefault();
    
        const lgData = {
          userId,
          userPassword
        };
      
        try {
          const response = await axios.post('/api/auth/login', lgData);
    
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
      
          if (response.status === 200) {
            setUserId(response.data.userId);
            navigate('/main');
          } else { 
            navigate('/login');
            alert('로그인 오류')
          }
          
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          
        } catch (error) {
          if (error.response && error.response.status === 401) {
            alert('입력하신 비밀번호 정보가 일치하지 않습니다.');
          } else {
            console.log(error);
          }
        }
    }

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
                                <input type='submit' value='로그인' className='signin' name='' onClick={ handleFormLogin }/>
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