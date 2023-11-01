import React from 'react';
import '../css/MenuBar.css';
import { Link } from 'react-router-dom';

function MenuBar() {
    return (
        <div className='menubar'>
            <div className='header'>
                <ul className='menulist1'>
                    <Link to='/' className='toHome'>
                        <li><img src='/img/Logo.png'/></li>
                    </Link>
                    <Link to='/upload' className='toMenu'>
                        <li><p>물품 등록</p></li>
                    </Link>
                    <Link to='/list' className='toMenu'>
                        <li><p>물품 현황</p></li>
                    </Link>
                    <Link to='/place' className='toMenu'>
                        <li><p>마켓 위치</p></li>
                    </Link>
                </ul>
                <ul className='menulist2'>
                    <li><img src='/img/notify.png'/></li>
                    <Link to='/login' className='toLogin'>
                        <li><p>로그인</p></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar;