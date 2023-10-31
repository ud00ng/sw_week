import React, { useState } from 'react';
import '../css/SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
    const [userPassword, setUserPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [nickname, setNickname] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = async () => {
        const user = {
          nickname,
          userId,
          userPassword,
          email
        };
    
        try {
          const response = await axios.post('/api/auth/signup', user).then(
            // 페이지를 /login으로 이동시킵니다.
            navigate('/login')
          );
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <div className='SignupForm'>
            <div className="sfContainer">
                <Link to='/' className='toMain'>
                    <img src='/img/Logo.png'/>
                </Link>
                <ul className="menu">
                    <li>
                        <input 
                          type="text" 
                          placeholder="NickName" 
                          value={nickname}
                          onChange={(e) => setNickname(e.target.value)}
                          className='inputBox'
                        />
                    </li>
                    <li>
                      <input 
                        type="text" 
                        placeholder="UserID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className='inputBox'
                      />
                      {(userId.length < 7 || userId.length > 25) && (
                        <p class="error-message" style={{ color: 'red', fontSize: '10px' }}>
                          아이디는 7~25자입니다. 다시 입력해주세요.
                        </p>
                      )}
                    </li>
                    <li>
                        <input
                          type="password"
                          placeholder="Password"
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                          className='inputBox'
                        />
                        {(userPassword.length < 8 || userPassword.length > 30) && (
                            <p class="error-message" style={{ color: 'red', fontSize: '10px' }}>
                              비밀번호는 8~30자 입니다. 다시 입력해주세요.
                            </p>
                        )}
                    </li>
                    <li>
                        <div style={{ width:'100%', position : 'relative', margin: '0', padding: '0' }}>
                          <input
                            type="password"
                            placeholder="PasswordCheck"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            className='inputBox'
                          />
                          {userPassword && passwordCheck && userPassword !== passwordCheck && (
                            <p class="error-message" style={{ color: 'red', fontSize: '10px' }}>
                              입력하신 정보와 일치하지 않습니다. 다시 입력해주세요.
                            </p>
                          )}
                        </div>
                    </li>
                    <li>
                        <input 
                          type="email" 
                          placeholder="EmailAddress"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='inputBox'
                        />
                    </li>
                    <li className='checkBx'>
                        <button className='suCheck' type="button" onClick={handleFormSubmit}>확인</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SignupForm;